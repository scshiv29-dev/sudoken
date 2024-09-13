"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Modal from "./Modal";
import { modalArray, ModalData, ModalState } from "@/lib/constants";

interface SudokuBoardProps {
  sudokudata: string[][];
  sudokuSolution: string[][];
  stopTimer: () => void;
}

export default function SudokuBoard({
  sudokudata,
  sudokuSolution,
  stopTimer,
}: SudokuBoardProps) {
  const [board, setBoard] = useState(sudokudata);
  const [isUnComplete, setIsUnComplete] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [incorrectCells, setIncorrectCells] = useState<
    { row: number; col: number }[]
  >([]);
  const [modal, setModal] = useState<ModalState | null>(null);
  const openedModal = modalArray.find(({ state }) => state === modal);
  function hasZero(matrix: string[][]): boolean {
    return matrix.some((row) => row.some((value) => value === "0"));
  }
  const closeModal = () => {
    setModal(null);
  };
  const checkSolution = () => {
    if (hasZero(board)) {
      setIsUnComplete(true);
      setModal(ModalState.Incomplete);
    } else {
      const incorrect: { row: number; col: number }[] = [];
      board.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          if (cell !== sudokuSolution[rowIndex][cellIndex]) {
            incorrect.push({ row: rowIndex, col: cellIndex });
          }
        });
      });

      if (incorrect.length === 0) {
        setIsFinished(true);
        setModal(ModalState.Success);
      } else {
        setIncorrectCells(incorrect);
        setModal(ModalState.Incorrect);
      }
    }
  };

  const handleChange = (rowIndex: number, cellIndex: number, value: string) => {
    if (/^[1-9]$/.test(value) || value === "") {
      const newBoard = board.map((row, rIndex) =>
        row.map((cell, cIndex) => {
          if (rIndex === rowIndex && cIndex === cellIndex) {
            return value === "" ? "0" : value;
          }
          return cell;
        })
      );
      setBoard(newBoard);
      setIncorrectCells(
        incorrectCells.filter(
          (cell) => cell.row !== rowIndex || cell.col !== cellIndex
        )
      );
    }
  };

  return (
    <>
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <div className="grid grid-cols-21 p-4 shadow-lg rounded-lg">
          {board.map((row, rowIndex) =>
            row.map((cell, cellIndex) => {
              const thirdRow = (rowIndex + 1) % 3 === 0;
              const thirdCell = (cellIndex + 1) % 3 === 0;
              const isReadOnly = sudokudata[rowIndex][cellIndex] !== "0";
              const isIncorrect = incorrectCells.some(
                (c) => c.row === rowIndex && c.col === cellIndex
              );
              return (
                <React.Fragment key={`${rowIndex}-${cellIndex}`}>
                  <input
                    type="text"
                    value={cell === "0" ? "" : cell}
                    readOnly={isReadOnly}
                    onChange={(e) =>
                      handleChange(rowIndex, cellIndex, e.target.value)
                    }
                    maxLength={1}
                    className={cn(
                      `w-12 h-12 col-span-2 text-center bg-white border border-error/50 focus:outline-none focus:border-blue-500`,
                      {
                        "bg-secondary text-secondary-content pointer-events-none":
                          isReadOnly,
                        "bg-red-500 text-white": isIncorrect,
                        "mb-3": thirdRow,
                      }
                    )}
                  />
                  {thirdCell ? <div className="opacity-0 w-1/2" /> : null}
                </React.Fragment>
              );
            })
          )}
        </div>
        <button className="btn btn-info" onClick={checkSolution}>
          Check ?
        </button>
      </div>
      {modal && openedModal ? (
        <Modal modal={openedModal} closeModal={closeModal} />
      ) : null}
    </>
  );
}
