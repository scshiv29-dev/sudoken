"use client"

import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface SudokuBoardProps {
  sudokudata: string[][]
  sudokuSolution: string[][]
  stopTimer: () => void
  getTime: () => void
}

enum ModalState {
  Incomplete = "INCOMPLETE",
  Incorrect = "INCORRECT",
  Success = "SUCCESS",
}

interface ModalData {
  state: ModalState
  title: string
  description: string
}

const modalArray: ModalData[] = [
  {
    state: ModalState.Incomplete,
    title: "Incomplete Puzzle",
    description: "Please fill in all the cells before checking the solution.",
  },
  {
    state: ModalState.Incorrect,
    title: "Incorrect Solution",
    description: "Some cells are incorrect. Please try again.",
  },
  {
    state: ModalState.Success,
    title: "Congratulations!",
    description: "You've successfully solved the Sudoku puzzle!",
  },
]

export default function SudokuBoard({
  sudokudata,
  sudokuSolution,
  stopTimer,
  getTime
}: SudokuBoardProps) {
  const [board, setBoard] = useState(sudokudata)
  const [incorrectCells, setIncorrectCells] = useState<{ row: number; col: number }[]>([])
  const [modal, setModal] = useState<ModalState | null>(null)
  const [hintCount, setHintCount] = useState(0)
  const [hintTimer, setHintTimer] = useState(0)
  const [isHintAvailable, setIsHintAvailable] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (hintTimer > 0 && !isHintAvailable) {
      interval = setInterval(() => {
        setHintTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (hintTimer === 0 && !isHintAvailable) {
      setIsHintAvailable(true);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hintTimer, isHintAvailable]);

  function hasZero(matrix: string[][]): boolean {
    return matrix.some((row) => row.some((value) => value === "0"))
  }

  const closeModal = () => {
    setModal(null)
  }

  const checkSolution = () => {
    if (hasZero(board)) {
      setModal(ModalState.Incomplete)
    } else {
      const incorrect: { row: number; col: number }[] = []
      board.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          if (cell !== sudokuSolution[rowIndex][cellIndex]) {
            incorrect.push({ row: rowIndex, col: cellIndex })
          }
        })
      })

      if (incorrect.length === 0) {
        stopTimer()
        setModal(ModalState.Success)
      } else {
        setIncorrectCells(incorrect)
        setModal(ModalState.Incorrect)
      }
    }
  }

  const handleChange = (rowIndex: number, cellIndex: number, value: string) => {
    if (/^[1-9]$/.test(value) || value === "") {
      const newBoard = board.map((row, rIndex) =>
        row.map((cell, cIndex) => {
          if (rIndex === rowIndex && cIndex === cellIndex) {
            return value === "" ? "0" : value
          }
          return cell
        })
      )
      setBoard(newBoard)
      setIncorrectCells(
        incorrectCells.filter(
          (cell) => cell.row !== rowIndex || cell.col !== cellIndex
        )
      )
    }
  }

  const getHint = () => {
    if (isHintAvailable) {
      const emptyCells = board.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => ({ rowIndex, cellIndex, value: cell }))
      ).filter(cell => cell.value === "0")

      if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        const newBoard = board.map((row, rIndex) =>
          row.map((cell, cIndex) => {
            if (rIndex === randomCell.rowIndex && cIndex === randomCell.cellIndex) {
              return sudokuSolution[rIndex][cIndex]
            }
            return cell
          })
        )
        setBoard(newBoard)
        setHintCount(hintCount + 1)
        setIsHintAvailable(false)
        setHintTimer(20)
      }
    }
  }

  const openedModal = modalArray.find(({ state }) => state === modal)

  return (
    <>
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div className="grid grid-cols-9 gap-[1px] p-[1px] bg-black rounded-lg">
          {board.map((row, rowIndex) =>
            row.map((cell, cellIndex) => {
              const isReadOnly = sudokudata[rowIndex][cellIndex] !== "0"
              const isIncorrect = incorrectCells.some(
                (c) => c.row === rowIndex && c.col === cellIndex
              )
              const isHint = !isReadOnly && cell !== "0"
              return (
                <Input
                  key={`${rowIndex}-${cellIndex}`}
                  type="text"
                  value={cell === "0" ? "" : cell}
                  readOnly={isReadOnly || isHint}
                  onChange={(e) =>
                    handleChange(rowIndex, cellIndex, e.target.value)
                  }
                  maxLength={1}
                  className={cn(
                    "w-10 h-10 text-center rounded-none border-[1px] border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    {
                      "bg-gray-300 text-black font-bold": isReadOnly,
                      "bg-red-200 text-red-800": isIncorrect,
                      "bg-blue-200 text-blue-800 font-bold": isHint,
                      "bg-white": !isReadOnly && !isIncorrect && !isHint,
                    },
                    (rowIndex + 1) % 3 === 0 && "border-b-black",
                    (cellIndex + 1) % 3 === 0 && "border-r-black"
                  )}
                />
              )
            })
          )}
        </div>
        <div className="flex gap-4">
          <Button onClick={checkSolution} className="mt-4">Check Solution</Button>
          <Button 
            onClick={getHint} 
            className="mt-4" 
            variant="outline"
            disabled={!isHintAvailable}
          >
            {isHintAvailable 
              ? `Get Hint (${hintCount})`
              : `Next hint in ${hintTimer}s`
            }
          </Button>
        </div>
      </div>
      <Dialog open={modal !== null} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{openedModal?.title}</DialogTitle>
            <DialogDescription>{openedModal?.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}