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

// Add a user game to a puzzle
export async function addUserGameToPuzzle(
  puzzleId: string,
  userGameData: Prisma.UserGameCreateWithoutPuzzleInput
): Promise<Puzzle> {
  const updatedPuzzle = await prisma.puzzle.update({
    where: { id: puzzleId },
    data: {
      userGames: {
        create: userGameData,
      },
    },
    include: { userGames: true },
  });
  return updatedPuzzle;
}

// Create a new UserGame
export async function createUserGame(
  data: Prisma.UserGameUncheckedCreateInput
): Promise<UserGame> {
  const newUserGame = await prisma.userGame.create({
    data,
  });
  return newUserGame;
}

// Read a UserGame by ID
export async function getUserGameById(id: string): Promise<UserGame | null> {
  const userGame = await prisma.userGame.findUnique({
    where: { id },
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

// Get puzzles by difficulty
export async function getPuzzlesByDifficulty(
  difficulty: string,
  count: number
): Promise<Puzzle[]> {
  const puzzlesList = await prisma.puzzle.findMany({
    where: { difficulty },
    take: count,
    orderBy: {
      id: 'asc',
    },
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

  const randomPuzzle = await prisma.puzzle.findMany({
    where: { difficulty },
    take: 1,
    skip: skip,
  });

  return randomPuzzle.length ? randomPuzzle[0] : null;
}

// Get a random puzzle
export async function getRandomPuzzle(): Promise<Puzzle | null> {
  const puzzlesCount = await prisma.puzzle.count();

  if (puzzlesCount === 0) return null;

  const skip = Math.floor(Math.random() * puzzlesCount);

  const randomPuzzle = await prisma.puzzle.findMany({
    take: 1,
    skip: skip,
  });

  return randomPuzzle.length ? randomPuzzle[0] : null;
}
