import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Represents a single leaderboard entry.
 */
interface LeaderboardEntry {
  userId: string;
  totalGames: number;
  solvedCount: number;
  bestTime: number | null;
  bestPuzzleId: string | null;
}

/**
 * Fetches leaderboard data for all users.
 *
 * @returns An array of LeaderboardEntry objects.
 */
export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  // Step 1: Aggregate data using groupBy
  const aggregatedData = await prisma.userGame.groupBy({
    by: ['userId'],
    _count: {
      id: true,      // Counts total games
      solved: true,  // Counts solved games
    },
    _min: {
      userBestTime: true, // Finds the minimum userBestTime
    },
  });

  // Step 2: Extract userIds and bestTimes
  const userIds = aggregatedData.map((data) => data.userId);
  
  // Create a map of userId to bestTime
  const bestTimesMap: { [userId: string]: number | null } = {};
  aggregatedData.forEach((data) => {
    bestTimesMap[data.userId] = data._min?.userBestTime ?? null;
  });

  // Step 3: Fetch UserGames with bestTime for all users in one query
  const bestUserGames = await prisma.userGame.findMany({
    where: {
      userId: { in: userIds },
      userBestTime: { not: null },
    },
    select: {
      userId: true,
      puzzleId: true,
      userBestTime: true,
    },
  });

  // Step 4: Map userId to their bestPuzzleId
  const bestPuzzleIdMap: { [userId: string]: string | null } = {};

  aggregatedData.forEach((data) => {
    const userId = data.userId;
    const bestTime = bestTimesMap[userId];
    if (bestTime === null) {
      bestPuzzleIdMap[userId] = null;
    } else {
      // Find the first UserGame that matches the bestTime
      const userGame = bestUserGames.find(
        (ug) => ug.userId === userId && ug.userBestTime === bestTime
      );
      bestPuzzleIdMap[userId] = userGame ? userGame.puzzleId : null;
    }
  });

  // Step 5: Assemble the leaderboard entries
  const leaderboard: LeaderboardEntry[] = aggregatedData.map((data) => ({
    userId: data.userId,
    totalGames: data._count.id,
    solvedCount: data._count.solved ?? 0,
    bestTime: bestTimesMap[data.userId],
    bestPuzzleId: bestPuzzleIdMap[data.userId],
  }));

  // Optional: Sort the leaderboard by bestTime ascending (nulls last)
  leaderboard.sort((a, b) => {
    if (a.bestTime === null && b.bestTime === null) return 0;
    if (a.bestTime === null) return 1;
    if (b.bestTime === null) return -1;
    return a.bestTime - b.bestTime;
  });

  return leaderboard;
}
