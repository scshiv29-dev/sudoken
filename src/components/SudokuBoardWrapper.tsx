"use client";
import React from "react";
import SudokuBoard from "@/components/SudokuBoard";

interface SudokuBoardWrapperProps {
  sudokudata: string[][];
  sudokuSolution: string[][];
}

const SudokuBoardWrapper: React.FC<SudokuBoardWrapperProps> = ({
  sudokudata,
  sudokuSolution,
}) => {
  const stopTimer = () => {
    // Implement the logic to stop the timer here
    console.log("Timer stopped");
  };

  return (
    <SudokuBoard
      sudokudata={sudokudata}
      sudokuSolution={sudokuSolution}
      stopTimer={stopTimer}
    />
  );
};

export default SudokuBoardWrapper;
