import { PrismaClient, puzzles, UserGame } from '@prisma/client';

const prisma = new PrismaClient();

// Read a puzzle by ID
export async function getPuzzleById(id: string): Promise<puzzles | null> {
  const puzzle = await prisma.puzzles.findUnique({
    where: { id },
    include: { userGames: true } // Include related UserGames
  });
  return puzzle;
}

// Update the best time of a puzzle
export async function updatePuzzleBestTime(id: string, bestTime: number): Promise<puzzles> {
  const updatedPuzzle = await prisma.puzzles.update({
    where: { id },
    data: { bestTime }
  });
  return updatedPuzzle;
}

// Add user games to a puzzle
export async function addUserGamesToPuzzle(puzzleId: string, userGame: UserGame): Promise<puzzles> {
  const updatedPuzzle = await prisma.puzzles.update({
    where: { id: puzzleId },
    data: {
      userGames: {
        create: userGame
      }
    },
    include: { userGames: true } // Include related UserGames
  });
  return updatedPuzzle;
}

// Create a new UserGame
export async function createUserGame(data: Omit<UserGame, 'id'>): Promise<UserGame> {
  const newUserGame = await prisma.userGame.create({
    data
  });
  return newUserGame;
}

// Read a UserGame by ID
export async function getUserGameById(id: string): Promise<UserGame | null> {
  const userGame = await prisma.userGame.findUnique({
    where: { id }
  });
  return userGame;
}

// Update a UserGame
export async function updateUserGame(id: string, data: Partial<UserGame>): Promise<UserGame> {
  const updatedUserGame = await prisma.userGame.update({
    where: { id },
    data
  });
  return updatedUserGame;
}

// Delete a UserGame
export async function deleteUserGame(id: string): Promise<UserGame> {
  const deletedUserGame = await prisma.userGame.delete({
    where: { id }
  });
  return deletedUserGame;
}

export async function getPuzzlesByDifficulty(difficulty: string, count: number): Promise<puzzles[]> {
  const puzzlesList = await prisma.puzzles.findMany({
    where: { difficulty },
    take: count,
    orderBy: {
      id: 'asc' // Adjust the order as necessary
    }
  });
  return puzzlesList;
}

export async function getRandomPuzzleByDifficulty(difficulty: string): Promise<puzzles | null> {
  console.log(difficulty)
  const puzzlesCount = await prisma.puzzles.count({
    where: { difficulty }
  });

  if (puzzlesCount === 0) return null;

  const skip = Math.floor(Math.random() * puzzlesCount);

  const randomPuzzle = await prisma.puzzles.findMany({
    where: { difficulty },
    take: 1,
    skip: skip
  });
  
  return randomPuzzle.length ? randomPuzzle[0] : null;
}

export async function getRandomPuzzle(): Promise<puzzles | null> {
  const puzzlesCount = await prisma.puzzles.count();

  if (puzzlesCount === 0) return null;

  const skip = Math.floor(Math.random() * puzzlesCount);

  const randomPuzzle = await prisma.puzzles.findMany({
    take: 1,
    skip: skip
  });

  return randomPuzzle.length ? randomPuzzle[0] : null;
}


