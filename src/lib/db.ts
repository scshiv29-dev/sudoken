import { PrismaClient, Puzzle, UserGame, Prisma } from '@prisma/client';
import { getUser } from '@/lib/supabase';

const prisma = new PrismaClient();

interface LeaderboardEntry {
  userName:string;
  userId: string;
  totalGames: number;
  solvedCount: number;
  bestTime: number | null;
  bestPuzzleId: string | null;
}



// Read a puzzle by ID
export async function getPuzzleById(id: string): Promise<Puzzle | null> {
  const puzzle = await prisma.puzzle.findUnique({
    where: { id },
    include: { userGames: true },
  });
  return puzzle;
}

// Update the best time of a puzzle
export async function updatePuzzleBestTime(
  id: string,
  bestTime: number
): Promise<Puzzle> {
  const updatedPuzzle = await prisma.puzzle.update({
    where: { id },
    data: { bestTime },
  });
  return updatedPuzzle;
}
// Alternative createOrGetUserGame function using findFirst
export async function createOrGetUserGame(
  data: Prisma.UserGameUncheckedCreateInput
): Promise<UserGame> {
  try {
    const userGame = await prisma.userGame.create({
      data,
    });
    return userGame;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      // Fetch the existing UserGame using findFirst
      const existingUserGame = await prisma.userGame.findFirst({
        where: {
          userId: data.userId,
          puzzleId: data.puzzleId,
        },
      });
      if (existingUserGame) {
        return existingUserGame;
      } else {
        throw new Error('UserGame already exists but could not be retrieved.');
      }
    } else {
      throw error;
    }
  }
}

// Get a UserGame by userId and puzzleId
// Corrected getUserGameByUserAndPuzzle function
export async function getUserGameByUserAndPuzzle(
  userId: string,
  puzzleId: string
): Promise<UserGame | null> {
  const userGame = await prisma.userGame.findUnique({
    where: {
      userId_puzzleId: {
        userId,
        puzzleId,
      },
    },
  });
  return userGame;
}

// Update a UserGame
export async function updateUserGame(
  id: string,
  data: Partial<UserGame>
): Promise<UserGame> {
  return await prisma.$transaction(async (tx) => {
    // Update the UserGame
    const updatedUserGame = await tx.userGame.update({
      where: { id },
      data,
    });

    // Check if userBestTime was updated
    if (data.userBestTime !== undefined) {
      // Fetch the associated Puzzle
      const puzzle = await tx.puzzle.findUnique({
        where: { id: updatedUserGame.puzzleId },
        select: { bestTime: true },
      });

      if (!puzzle) {
        throw new Error('Associated puzzle not found.');
      }

      // Determine if the Puzzle's bestTime needs to be updated
      const shouldUpdatePuzzleBestTime =
        puzzle.bestTime === null ||
        (updatedUserGame.userBestTime !== null &&
          updatedUserGame.userBestTime < puzzle.bestTime);

      if (shouldUpdatePuzzleBestTime) {
        await tx.puzzle.update({
          where: { id: updatedUserGame.puzzleId },
          data: { bestTime: updatedUserGame.userBestTime },
        });
      }
    }

    return updatedUserGame;
  });
}
// Delete a UserGame
export async function deleteUserGame(id: string): Promise<UserGame> {
  const deletedUserGame = await prisma.userGame.delete({
    where: { id },
  });
  return deletedUserGame;
}

// Get puzzles by difficulty with pagination
export async function getPuzzlesByDifficulty(
  difficulty: string,
  page: number,
  pageSize: number
): Promise<Puzzle[]> {
  const puzzlesList = await prisma.puzzle.findMany({
    where: { difficulty },
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: { id: 'asc' },
  });
  return puzzlesList;
}

// Get a random puzzle by difficulty
export async function getRandomPuzzleByDifficulty(
  difficulty: string
): Promise<Puzzle | null> {
  const puzzlesCount = await prisma.puzzle.count({
    where: { difficulty },
  });

  if (puzzlesCount === 0) return null;

  const skip = Math.floor(Math.random() * puzzlesCount);

  const randomPuzzle = await prisma.puzzle.findFirst({
    where: { difficulty },
    skip,
  });

  return randomPuzzle;
}

// Get a random puzzle
export async function getRandomPuzzle(): Promise<Puzzle | null> {
  const puzzlesCount = await prisma.puzzle.count();

  if (puzzlesCount === 0) return null;

  const skip = Math.floor(Math.random() * puzzlesCount);

  const randomPuzzle = await prisma.puzzle.findFirst({
    skip,
  });

  return randomPuzzle;
}

// Get userIds of users who have played a puzzle
export async function getUserIdsByPuzzle(
  puzzleId: string
): Promise<string[]> {
  const userGames = await prisma.userGame.findMany({
    where: { puzzleId },
    select: { userId: true },
  });
  return userGames.map((userGame) => userGame.userId);
}

// Get leaderboard of users for a puzzle
export async function getLeaderboardByPuzzle(
  puzzleId: string,
  topN: number
): Promise<{ userId: string; userBestTime: number | null }[]> {
  const userGames = await prisma.userGame.findMany({
    where: {
      puzzleId,
      solved: true,
    },
    select: {
      userId: true,
      userBestTime: true,
    },
    orderBy: {
      userBestTime: 'asc',
    },
    take: topN,
  });
  return userGames;
}
// Get all UserGames by userId
export async function getUserGamesByUserId(
  userId: string,
  page: number = 1,
  pageSize: number = 10,
  status?: string,
  sort?: string
) {
  const skip = (page - 1) * pageSize
  
  let whereClause: any = { userId }
  if (status === 'solved') {
    whereClause.solved = true
  } else if (status === 'in-progress') {
    whereClause.solved = false
  }

  let orderBy: any = { id: 'desc' } // Default to newest
  if (sort === 'oldest') {
    orderBy = { id: 'asc' }
  } else if (sort === 'best-time') {
    orderBy = { userBestTime: 'asc' }
  }

  const [userGames, totalGames] = await Promise.all([
    prisma.userGame.findMany({
      where: whereClause,
      orderBy,
      skip,
      take: pageSize,
    }),
    prisma.userGame.count({ where: whereClause }),
  ])

  return { userGames, totalGames }
}

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  const usersGamesData = await prisma.userGame.groupBy({
    by: ['userId'],
    _count: {
      id: true,
      solved: true,
    },
    _min: {
      userBestTime: true,  // Only consider games that are solved
    },
    where: {
      solved: true,  // Ensure we're only considering solved games for best time
    },
  });

  // Mapping to fetch each user's total game count separately to ensure accuracy
  const totalGamesMap: { [userId: string]: number } = {};
  const allGamesData = await prisma.userGame.groupBy({
    by: ['userId'],
    _count: {
      id: true,
    },
  });
  allGamesData.forEach(data => {
    totalGamesMap[data.userId] = data._count.id;
  });

  const leaderboard: LeaderboardEntry[] = await Promise.all(usersGamesData.map(async (user) => {
    const userDetails = await getUser(user.userId); // Assume getUser function is defined elsewhere
    const userName = userDetails?.[0]?.name || 'Unknown User';
    const bestGame = await prisma.userGame.findFirst({
      where: {
        userId: user.userId,
        userBestTime: user._min.userBestTime,
      },
      select: {
        puzzleId: true,
      },
    });

    return {
      userName,
      userId: user.userId,
      totalGames: totalGamesMap[user.userId],
      solvedCount: user._count.solved ?? 0,
      bestTime: user._min.userBestTime,
      bestPuzzleId: bestGame?.puzzleId || null,
    };
  }));

  // Optional: Sorting by best time or other criteria
  leaderboard.sort((a, b) => (a.bestTime ?? Infinity) - (b.bestTime ?? Infinity));

  return leaderboard;
}