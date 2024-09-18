import { PrismaClient, Puzzle, UserGame, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

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
  data: Prisma.UserGameUpdateInput
): Promise<UserGame> {
  const updatedUserGame = await prisma.userGame.update({
    where: { id },
    data,
  });
  return updatedUserGame;
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
