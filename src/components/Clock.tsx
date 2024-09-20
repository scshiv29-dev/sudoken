"use client";

import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";

import { Badge } from "@/components/ui/badge";

interface ClockProps {
  onStop?: (timeStoppedAt: number) => void;
  color: string;
  isRunning?: boolean;
}

export interface ClockHandle {
  stop: () => void;
  getCurrentTime: () => number;
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

  useImperativeHandle(ref, () => ({
    stop() {
      setInternalIsRunning(false);
      if (onStop) {
        onStop(seconds);
      }
    },
    getCurrentTime() {
      return seconds;
    }
  }));

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

    return [hours, minutes, seconds]
      .map(val => val.toString().padStart(2, '0'))
      .join(':');
  };

  return (
    <Badge className={`${color} text-white px-3 py-1 text-xl`}>
      {formatTime(seconds)}
    </Badge>
  );
});

Clock.displayName = "Clock";

export default Clock;