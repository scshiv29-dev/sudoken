"use client";
import React, { useEffect, useRef, useState } from "react";
import SudokuBoard from "@/components/SudokuBoard";
import { createOrGetUserGame, updateUserGame } from "@/app/actions";
import Clock, { ClockHandle } from "@/components/Clock";


interface SudokuBoardWrapperProps {
  sudokudata: string[][];
  sudokuSolution: string[][];
  sudokuId:string;
  userId:string |undefined;
}

const SudokuBoardWrapper: React.FC<SudokuBoardWrapperProps> = ({
  sudokudata,
  sudokuSolution,
  sudokuId,
  userId,

}) => {
  const clockRef = useRef<ClockHandle>(null);
  const [stoppedTime, setStoppedTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [userGame,setUserGame] =useState("");
  
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
  const update=(time:any)=>{
    updateUserGame(userGame,{
      puzzleId:sudokuId,
      solved:true,
      userBestTime:time,
    }).then(()=>{
      console.log("updated")
    })
  }
  useEffect(() => {
    if (userId) {
      const data = {
        userId: userId,
        puzzleId: sudokuId,
      };
      createOrGetUserGame(data).then((val)=>{
        setUserGame(val.id)
      })
    
    } else {
      // Handle the case when userId is undefined
      console.error("User ID is undefined. Cannot create or get UserGame.");
      // Optionally, you could redirect to a login page or show a message
    }
  }, [userId, sudokuId]);

  return (
    <>
  
      <Clock ref={clockRef} color={"blue"} isRunning={true} onStop={handleStop} />
      <SudokuBoard
        sudokudata={sudokudata}
        sudokuSolution={sudokuSolution}
        stopTimer={stopClock}
        getTime={getCurrentTime}
        updateGame={update}
      />
    </>
  );
};

export default SudokuBoardWrapper;
