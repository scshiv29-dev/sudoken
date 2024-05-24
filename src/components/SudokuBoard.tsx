"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
export default function SudokuBoard({ sudokudata,sudokuSolution,stopTimer }: any) {
  // Initialize the state with the initial Sudoku data
  const [board, setBoard] = useState(sudokudata);

  const handleChange = (rowIndex: number, cellIndex: number, value: string) => {
    // Validate the input value
    if (/^[1-9]$/.test(value) || value === "") {
      // Create a copy of the board
      const newBoard = board.map((row: any[], rIndex: number) =>
        row.map((cell: any, cIndex: number) => {
          if (rIndex === rowIndex && cIndex === cellIndex) {
            return value === "" ? "0" : value;
          }
          return cell;
        })
      );
      // Update the state with the new board
      setBoard(newBoard);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-9 gap-1 p-4 shadow-lg rounded-lg">
        {board.map((row: any[], rowIndex: number) =>
        
          row.map((cell, cellIndex) => {
            const thirdcell=(cellIndex+1)%3===0
            console.log(typeof(cellIndex))
            return (  
              <input
                key={`${rowIndex+1}-${cellIndex+1}`}
                type="text"
                value={cell === "0" ? "" : cell}
                readOnly={sudokudata[rowIndex][cellIndex] !== "0"}
                onChange={(e) =>
                  handleChange(rowIndex, cellIndex, e.target.value)
                }
                maxLength={1}
                className={cn(`w-12 h-12 text-center border focus:outline-none focus:border-blue-500`,{"mr-2":thirdcell})}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
