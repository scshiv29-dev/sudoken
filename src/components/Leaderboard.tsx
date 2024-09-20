'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'

interface LeaderboardEntry {
  userName:string
  userId: string
  totalGames: number
  solvedCount: number
  bestTime: number | null
  bestPuzzleId: string | null
}

interface LeaderboardClientProps {
  initialData: LeaderboardEntry[]
}

export function LeaderboardClient({ initialData }: LeaderboardClientProps) {
  const [leaderboardData] = useState(initialData)

  const formatTime = (seconds: number | null) => {
    if (seconds === null) return "N/A"
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Total Games</TableHead>
                <TableHead>Solved Games</TableHead>
                <TableHead>Best Time</TableHead>
                <TableHead>Best Puzzle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((entry, index) => (
                <TableRow key={entry.userId}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{entry.userName}</TableCell>
                  <TableCell>{entry.totalGames}</TableCell>
                  <TableCell>{entry.solvedCount}</TableCell>
                  <TableCell>{formatTime(entry.bestTime)}</TableCell>
                  <TableCell>
                    {entry.bestPuzzleId ? (
                      <Link href={`/game/${entry.bestPuzzleId}`} className="text-blue-600 hover:underline">
                        View Puzzle
                      </Link>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}