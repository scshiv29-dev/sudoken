'use client'

import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function SudokuBoard() {
  // Create a 9x9 grid of empty strings
  const initialBoard = Array(9).fill(null).map(() => Array(9).fill(""))

  return (
    <Card className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Sudoku</h1>
      <div className="grid grid-cols-9 gap-0 border-2 border-primary">
        {initialBoard.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              inputMode="numeric"
              pattern="[1-9]"
              maxLength={1}
              className={`w-full h-10 text-center text-lg font-medium 
                ${colIndex % 3 === 2 && colIndex !== 8 ? 'border-r-2 border-r-primary' : ''}
                ${rowIndex % 3 === 2 && rowIndex !== 8 ? 'border-b-2 border-b-primary' : ''}
                ${colIndex % 3 === 0 ? 'border-l-2 border-l-primary' : ''}
                ${rowIndex % 3 === 0 ? 'border-t-2 border-t-primary' : ''}
                focus:z-10 focus:ring-2 focus:ring-ring focus:ring-offset-0`}
              defaultValue={cell}
            />
          ))
        )}
      </div>
    </Card>
  )
}