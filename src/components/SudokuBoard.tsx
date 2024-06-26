"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Modal from "./Modal";

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
  const [incorrectCells, setIncorrectCells] = useState<{ row: number; col: number }[]>([]);

  function hasZero(matrix: string[][]): boolean {
    return matrix.some((row) => row.some((value) => value === "0"));
  }

  const checkSolution = () => {
    if (hasZero(board)) {
      setIsUnComplete(true);
      (document.getElementById('my_modal_4') as HTMLDialogElement).showModal();
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
        (document.getElementById('my_modal_5') as HTMLDialogElement).showModal();
      } else {
        setIncorrectCells(incorrect);
        (document.getElementById('my_modal_6') as HTMLDialogElement).showModal();
        (document.getElementById('my_modal_7') as HTMLDialogElement).showModal();
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
      setIncorrectCells(incorrectCells.filter(cell => cell.row !== rowIndex || cell.col !== cellIndex));
    }
  };

  function ModalSuccess({
    color,
    title,
    desc,
  }: {
    color: string;
    title: string;
    desc: string;
  }) {
    return (
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className={`font-bold text-lg ${color}`}>{title}</h3>
          <p className="py-4">{desc}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }

  function ModalNoob({
    color,
    title,
    desc,
  }: {
    color: string;
    title: string;
    desc: string;
  }) {
    return (
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className={`font-bold text-lg ${color}`}>{title}</h3>
          <p className="py-4">{desc}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }

  function ModalIncorrect({
    color,
    title,
    desc,
  }: {
    color: string;
    title: string;
    desc: string;
  }) {
    return (
      <dialog id="my_modal_7" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className={`font-bold text-lg ${color}`}>{title}</h3>
          <p className="py-4">{desc}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-21 p-4 shadow-lg rounded-lg">
          <Modal
            color="text-error"
            title="Complete the puzzle first"
            desc="Sorry but the puzzle looks incomplete. Please fill all the squares to evaluate."
          />
          <ModalSuccess
            color="text-success"
            title="Congrats You Won"
            desc="Congrats! You have completed the Sudoku. Your time has been added to the leaderboard of this quiz."
          />
          <ModalNoob
            color="text-warning"
            title="Oops Try again!"
            desc="Seems like this is not the optimal solution for this puzzle. Try again 😊"
          />
          <ModalIncorrect
            color="text-error"
            title="Incorrect Solution"
            desc="Some cells are incorrect. Please correct them to complete the puzzle."
          />
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
                      `w-12 h-12 col-span-2 text-center border border-error/50 focus:outline-none focus:border-blue-500`,
                      {
                        "bg-primary text-primary-content pointer-events-none": isReadOnly,
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
    </>
  );
}
