"use client";

import React, { useEffect, useRef, useState } from "react";
import SudokuBoard from "@/components/SudokuBoard";
import { createOrGetUserGame, updateUserGame } from "@/app/actions";
import Clock, { ClockHandle } from "@/components/Clock";
import { Badge } from "@/components/ui/badge";

interface SudokuBoardWrapperProps {
  sudokudata: string[][];
  sudokuSolution: string[][];
  sudokuId: string;
  userId: string | undefined;
  difficulty:string
}

const SudokuBoardWrapper: React.FC<SudokuBoardWrapperProps> = ({
  sudokudata,
  sudokuSolution,
  sudokuId,
  userId,
  difficulty
}) => {
  const clockRef = useRef<ClockHandle>(null);
  const [stoppedTime, setStoppedTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [userGame, setUserGame] = useState("");
  
  const handleStop = (timeStoppedAt: number) => {
    setStoppedTime(timeStoppedAt);
  };

  const stopClock = () => {
    if (clockRef.current) {
      clockRef.current.stop();
    }
  };

  const getCurrentTime = () => {
    if (clockRef.current) {
      const time = clockRef.current.getCurrentTime();
      setCurrentTime(time);
    }
  };

  const update = (time: any) => {
    updateUserGame(userGame, {
      puzzleId: sudokuId,
      solved: true,
      userBestTime: time,
    }).then(() => {
      console.log("updated");
    });
  };

  useEffect(() => {
    if (userId) {
      const data = {
        userId: userId,
        puzzleId: sudokuId,
      };
      createOrGetUserGame(data).then((val) => {
        setUserGame(val.id);
      });
    } else {
      console.error("User ID is undefined. Cannot create or get UserGame.");
    }
  }, [userId, sudokuId]);

  return (
<div className="w-full max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-4">
      <div className="flex-grow space-y-4">
        <div className="flex justify-between items-center">
          <Badge className="bg-green-500 text-white px-3 py-1">{difficulty.toLocaleUpperCase()}</Badge>
          <Clock ref={clockRef} color="bg-blue-500" isRunning={true} onStop={handleStop} />
        </div>
        <SudokuBoard
          sudokudata={sudokudata}
          sudokuSolution={sudokuSolution}
          stopTimer={stopClock}
          getTime={getCurrentTime}
          updateGame={update}
        />
      </div>
      <div className="md:w-48">
        
        {/* Leaderboard content would go here */}
      </div>
    </div>
  );
};

export default SudokuBoardWrapper;