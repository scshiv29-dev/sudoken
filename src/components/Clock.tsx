"use client";
import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import Pill from "./pill";

interface ClockProps {
  onStop?: (timeStoppedAt: number) => void; // Pass the time when the clock is stopped
  color: string;
  isRunning?: boolean; // Control whether the clock is running from outside
}

export interface ClockHandle {
  stop: () => void; // Method to stop the clock externally
  getCurrentTime: () => number; // Method to get the current time, even if the clock is stopped
}

const Clock = forwardRef<ClockHandle, ClockProps>(({ onStop, color, isRunning = true }, ref) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [internalIsRunning, setInternalIsRunning] = useState<boolean>(isRunning);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (internalIsRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [internalIsRunning]);

  // This allows the parent to stop the clock via a ref
  useImperativeHandle(ref, () => ({
    stop() {
      setInternalIsRunning(false);
      if (onStop) {
        onStop(seconds); // Pass the stop time to the parent
      }
    },
    getCurrentTime() {
      return seconds; // Return the current time, even if stopped
    }
  }));

  // Update internal running state when `isRunning` prop changes
  useEffect(() => {
    setInternalIsRunning(isRunning);
  }, [isRunning]);

  const getTwoDigitsTime = (...values: number[]): string => {
    return values
      .map((val) => (val > 9 ? val.toString() : "0" + val))
      .join(":");
  };

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return getTwoDigitsTime(hours, minutes, seconds);
  };

  return <Pill color={color} data={formatTime(seconds)} />;
});

export default Clock;
