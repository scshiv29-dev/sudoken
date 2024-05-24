"use client";
import React, { useState } from "react";

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
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-9 gap-1 p-4 shadow-lg rounded-lg">
        {board.map((row: any[], rowIndex: number) =>
          row.map((cell, cellIndex) => {
            let borderClasses = "border border-gray-300";
            if (cellIndex % 3 === 2 && cellIndex !== 8)
              borderClasses += " border-r-2 border-black";
            if (rowIndex % 3 === 2 && rowIndex !== 8)
              borderClasses += " border-b-2 border-black";
            if (cellIndex === 8) borderClasses += " border-r";
            if (rowIndex === 8) borderClasses += " border-b";

            return (
              <input
                key={`${rowIndex}-${cellIndex}`}
                type="text"
                value={cell === "0" ? "" : cell}
                readOnly={sudokudata[rowIndex][cellIndex] !== "0"}
                onChange={(e) =>
                  handleChange(rowIndex, cellIndex, e.target.value)
                }
                maxLength={1}
                className={`w-12 h-12 text-center ${borderClasses} focus:outline-none focus:border-blue-500`}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
