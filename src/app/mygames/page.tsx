import { getUserGamesByUserId } from '@/app/actions'
import { MyGamesClient } from '@/components/GameList'
import { auth } from '@/auth'

export const dynamic = 'force-dynamic'

export default async function MyGamesPage({
    searchParams,
  }: {
    searchParams: { page?: string; status?: string; sort?: string }
  }) {
    const session = await auth()
    const userId = session?.user?.id
  
    if (!userId) {
      return <div>Please log in to view your games.</div>
    }
  
    const page = Number(searchParams.page) || 1
    const status = searchParams.status
    const sort = searchParams.sort
  
    const { userGames, totalGames } = await getUserGamesByUserId(userId, page, 10, status, sort)
  
    return (
      <MyGamesClient 
        initialGames={userGames} 
        totalGames={totalGames} 
        initialPage={page}
        initialStatus={status}
        initialSort={sort}
      />
    )
  }