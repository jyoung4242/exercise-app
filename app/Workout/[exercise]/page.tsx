"use client";
import TimerComponent from "@/components/timer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ExercisePage = ({ params }: { params: { exercise: string } }) => {
  const searchparams = useSearchParams();
  const [exercise, setExercise] = useState<string>("WallSit");
  const [time, setTime] = useState<number>(0);
  const [exercisenum, setExercisenum] = useState<number>(1);

  function stopExerciseHandler() {
    window.location.href = `/Workout?isRunning=true&timer=${time}&workoutNum=${exercisenum}`;
  }

  function handleTimerChange(timer: number) {
    setTime(timer);
  }

  useEffect(() => {
    setExercise(params.exercise);
  }, [params]);

  useEffect(() => {
    if (searchparams.get("workoutNum")) {
      setExercisenum(Number(searchparams.get("workoutNum")));
    }
  }, []);

  return (
    <div className="content">
      <h1>{exercise}</h1>
      <TimerComponent onTimeChange={handleTimerChange} />
      <button className="wo_button ew_button" onClick={stopExerciseHandler}>
        Stop Exercise
      </button>
    </div>
  );
};

export default ExercisePage;
