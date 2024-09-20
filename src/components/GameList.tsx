'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface UserGame {
  id: string
  puzzleId: string
  solved: boolean | null
  userBestTime: number | null
}

interface MyGamesClientProps {
  initialGames: UserGame[]
  totalGames: number
  initialPage: number
  initialStatus: string | undefined
  initialSort: string | undefined
}

export function MyGamesClient({ 
  initialGames, 
  totalGames, 
  initialPage, 
  initialStatus, 
  initialSort 
}: MyGamesClientProps) {
  const [games, setGames] = useState(initialGames)
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [currentStatus, setCurrentStatus] = useState(initialStatus || 'all')
  const [currentSort, setCurrentSort] = useState(initialSort || 'newest')
  const router = useRouter()
  const searchParams = useSearchParams()
  const pageSize = 10
  const totalPages = Math.ceil(totalGames / pageSize)

  useEffect(() => {
    const page = searchParams.get('page')
    const status = searchParams.get('status')
    const sort = searchParams.get('sort')

    if (page) setCurrentPage(Number(page))
    if (status) setCurrentStatus(status)
    if (sort) setCurrentSort(sort)
  }, [searchParams])

  const formatTime = (seconds: number | null) => {
    if (seconds === null) return "N/A"
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const updateQueryParams = (params: { [key: string]: string | number | undefined }) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        newSearchParams.set(key, value.toString())
      } else {
        newSearchParams.delete(key)
      }
    })
    router.push(`/my-games?${newSearchParams.toString()}`)
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    updateQueryParams({ page: newPage })
  }

  const handleStatusChange = (newStatus: string) => {
    setCurrentStatus(newStatus)
    setCurrentPage(1)
    updateQueryParams({ page: 1, status: newStatus === 'all' ? undefined : newStatus })
  }

  const handleSortChange = (newSort: string) => {
    setCurrentSort(newSort)
    setCurrentPage(1)
    updateQueryParams({ page: 1, sort: newSort })
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">My Games</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Select onValueChange={handleStatusChange} value={currentStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="solved">Solved</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={handleSortChange} value={currentSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="best-time">Best Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Game ID</TableHead>
                <TableHead>Puzzle ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Best Time</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {games.map((game) => (
                <TableRow key={game.id}>
                  <TableCell>{game.id}</TableCell>
                  <TableCell>{game.puzzleId}</TableCell>
                  <TableCell>
                    <Badge variant={game.solved ? "default" : "secondary"}>
                      {game.solved ? "Solved" : "In Progress"}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatTime(game.userBestTime)}</TableCell>
                  <TableCell>
                    <Button variant="outline" asChild>
                      <Link href={`/game/${game.puzzleId}`}>
                        {game.solved ? "Review" : "Play"}
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {games.length === 0 && (
            <div className="text-center py-4">
              No games found with the current filters. 
              <Link href="/puzzles" className="text-blue-500 hover:underline ml-2">
                Browse puzzles
              </Link>
            </div>
          )}
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}