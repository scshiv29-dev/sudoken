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

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  const leaderboardData = await prisma.userGame.groupBy({
    by: ['userId'],
    _count: {
      id: true,
      solved: true,
    },
    _min: {
      userBestTime: true,
    },
    where: {
      solved: true,
    },
    orderBy: {
      _min: {
        userBestTime: 'asc',
      },
    },
  })

  const leaderboard = await Promise.all(
    leaderboardData.map(async (entry) => {
      const bestGame = await prisma.userGame.findFirst({
        where: {
          userId: entry.userId,
          userBestTime: entry._min.userBestTime,
        },
        select: {
          puzzleId: true,
        },
      })

      return {
        userId: entry.userId,
        totalGames: entry._count.id,
        solvedCount: entry._count.solved,
        bestTime: entry._min.userBestTime,
        bestPuzzleId: bestGame?.puzzleId || null,
      }
    })
  )

  return leaderboard
}