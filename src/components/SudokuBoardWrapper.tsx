"use client";
import React, { useEffect, useRef, useState } from "react";
import SudokuBoard from "@/components/SudokuBoard";
import { createUserGame } from "@/app/actions";
import Clock, { ClockHandle } from "@/components/Clock";
interface SudokuBoardWrapperProps {
  sudokudata: string[][];
  sudokuSolution: string[][];
  sudokuId:string;
  userId:string | undefined;
}

const SudokuBoardWrapper: React.FC<SudokuBoardWrapperProps> = ({
  sudokudata,
  sudokuSolution,
  sudokuId,
  userId
}) => {
  const data={
    "userId":userId,
    "puzzleId":sudokuId

  }
  
  const clockRef = useRef<ClockHandle>(null);
  const [stoppedTime, setStoppedTime] = useState<number | null>(null);
  const [currentTime,setCurrentTime]=useState<number | null>(null);
  const handleStop = (timeStoppedAt: number) => {
    setStoppedTime(timeStoppedAt); // Update the state with the stop time
  };

  const stopClock = () => {
    if (clockRef.current) {
      clockRef.current.stop(); // Stop the clock externally
    }
  };
  const getCurrentTime = () => {
    if (clockRef.current) {
      const time = clockRef.current.getCurrentTime(); // Get the current time
      setCurrentTime(time);
    }
  };
  
useEffect(()=>{
  createUserGame(data)
})
  return (
    <>
     <Clock ref={clockRef} color={"blue"} isRunning={true} onStop={handleStop} />
      <SudokuBoard
      sudokudata={sudokudata}
      sudokuSolution={sudokuSolution}
      stopTimer={stopClock}
      getTime={getCurrentTime}
    />
    </>
  );
};

export default SudokuBoardWrapper;
