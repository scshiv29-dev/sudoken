"use client";
import React, { useState, useEffect } from "react";
import Pill from "./pill";
interface ClockProps {
  onStop: () => void;
}

const Clock: React.FC = ({ onStop }: any) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  const stopClock = () => {
    setIsRunning(false);
    onStop();
  };

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
        <Pill data={formatTime(seconds)}/>
  );
};

export default Clock;
