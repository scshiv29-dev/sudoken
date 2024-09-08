"use client"

import { useState } from "react"
import Navbar from "./navbar"
import Playnow from "@/components/Playnow"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Grid3X3Icon, TrophyIcon, BrainIcon, ZapIcon, ShuffleIcon } from "lucide-react"

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState("")

  const handleStartGame = (difficulty: string) => {
    setSelectedDifficulty(difficulty)
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <header className="p-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Grid3X3Icon className="mr-2 h-8 w-8" />
            Sudoken
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Master the art of Sudoku</p>
        </header>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">Choose Your Challenge</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sudoken offers Sudoku puzzles for all skill levels. Select your difficulty and start solving!
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Easy", icon: ZapIcon, color: "bg-green-100 dark:bg-green-900", textColor: "text-green-700 dark:text-green-300", buttonColor: "bg-green-500 hover:bg-green-600 text-white" },
            { title: "Medium", icon: BrainIcon, color: "bg-yellow-100 dark:bg-yellow-900", textColor: "text-yellow-700 dark:text-yellow-300", buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white" },
            { title: "Hard", icon: TrophyIcon, color: "bg-red-100 dark:bg-red-900", textColor: "text-red-700 dark:text-red-300", buttonColor: "bg-red-500 hover:bg-red-600 text-white" },
            { title: "Random", icon: ShuffleIcon, color: "bg-purple-100 dark:bg-purple-900", textColor: "text-purple-700 dark:text-purple-300", buttonColor: "bg-purple-500 hover:bg-purple-600 text-white" },
          ].map((level) => (
            <Card key={level.title} className={`${level.color} border-none shadow-lg hover:shadow-xl transition-shadow`}>
              <CardContent className="p-6 text-center">
                <level.icon className={`mx-auto h-12 w-12 ${level.textColor} mb-4`} />
                <h3 className={`text-xl font-semibold mb-2 ${level.textColor}`}>{level.title}</h3>
                <Button
                  variant="secondary"
                  className={`mt-4 ${level.buttonColor}`}
                  onClick={() => handleStartGame(level.title)}
                >
                  Start Game
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Why Choose Sudoken?</h2>
          <ul className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto space-y-2">
            <li>• Adaptive difficulty levels to match your skills</li>
            <li>• Clean, intuitive interface for seamless gameplay</li>
            <li>• Track your progress and improve over time</li>
            <li>• Available on all devices - play anywhere, anytime</li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 p-6 text-center text-gray-500 dark:text-gray-400">
        <p>© 2023 Sudoken. All rights reserved.</p>
      </footer>

      {showModal && (
        <Playnow
          color={`btn-${selectedDifficulty.toLowerCase()}`}
          diff={selectedDifficulty}
        />
      )}
    </div>
  )
}