"use client";
import { useEffect, useState } from "react";

const TimerComponent = ({ onTimeChange }: { onTimeChange: (timer: number) => void }) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        onTimeChange(prev + 1);
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <span className="time">{time}</span>
      <span className="unit">s</span>
    </div>
  );
};

export default TimerComponent;
