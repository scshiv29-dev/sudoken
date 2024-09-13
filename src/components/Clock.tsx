"use client";
import React, { useState, useEffect } from "react";
import Pill from "./pill";
interface ClockProps {
  onStop?: () => void;
  color: string;
}

const Clock: React.FC<ClockProps> = ({ onStop, color }) => {
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
    onStop ? onStop() : null;
  };

  const getTwoDigitsTime = (val: number): string => {
    if (val > 9) return val.toString();
    else return "0" + val;
  };
  const formatTime = (totalSeconds: number): string => {
    const hours = getTwoDigitsTime(Math.floor(totalSeconds / 3600));
    const minutes = getTwoDigitsTime(Math.floor((totalSeconds % 3600) / 60));
    const seconds = totalSeconds % 60;
    return `${hours}:${minutes}:${seconds}`;
  };

  return <Pill color={color} data={formatTime(seconds)} />;
};

export default Clock;
