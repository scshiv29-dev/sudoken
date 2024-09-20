import { getLeaderboard } from '@/app/actions'
import { LeaderboardClient } from '@/components/Leaderboard'

export const dynamic = 'force-dynamic'

export default async function LeaderboardPage() {
  const leaderboardData = await getLeaderboard()
    console.log(leaderboardData)
  return <LeaderboardClient initialData={leaderboardData} />
}