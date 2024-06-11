"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { exerciseDB, exerciseType } from "@/sourdData/exercises";

const WorkoutPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [workoutNum, setWorkout] = useState<number>(1);
  const [exercises, setExercises] = useState<exerciseType>("legs");
  const [isNextWorkoutDisabled, setNextWorkoutDisabled] = useState<boolean>(true);
  const [isStartExerciseDisabled, setStartExerciseDisabled] = useState<boolean>(false);
  const [selectedExercise, setSelectedExcercise] = useState<string>("wallsits");
  const [timerdata, setTimerData] = useState<number>(0);

  function selectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setExercises(e.target.value as exerciseType);
  }

  function startExerciseHandler() {
    //window.location.href = `/Workout/${selectedExercise}`;
    router.push(`/Workout/${selectedExercise}?workoutNum=${workoutNum}`);
  }

  function setExcerciseHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedExcercise(e.target.value);
  }

  function nextWorkoutHandler() {
    setWorkout(prev => prev + 1);
    setStartExerciseDisabled(false);
    setNextWorkoutDisabled(true);
  }

  function endWorkoutHandler() {
    window.location.href = "/";
  }

  useEffect(() => {
    if (params.get("isRunning") == "true") {
      setStartExerciseDisabled(true);
      setNextWorkoutDisabled(false);
      setTimerData(Number(params.get("timer")));
    }

    if (params.get("workoutNum")) {
      setWorkout(Number(params.get("workoutNum")));
    }
  }, []);

  return (
    <div>
      <h1>Exercise #{workoutNum}</h1>
      <select onInput={selectHandler} disabled={isStartExerciseDisabled}>
        <option value="legs">Legs</option>
        <option value="upper">Upper</option>
        <option value="core">Core</option>
      </select>

      <select onInput={setExcerciseHandler} disabled={isStartExerciseDisabled}>
        {exerciseDB[exercises].map(exercise => (
          <option value={exercise} key={exercise}>
            {exercise}
          </option>
        ))}
      </select>

      <button className="wo_button se_button" disabled={isStartExerciseDisabled} onClick={startExerciseHandler}>
        Start Exercise
      </button>

      {isStartExerciseDisabled ? <div className="timerreadout">{timerdata} seconds </div> : null}

      <button className="wo_button ne_button" onClick={nextWorkoutHandler} disabled={isNextWorkoutDisabled}>
        Next Exercise
      </button>
      <button className="wo_button ew_button" onClick={endWorkoutHandler}>
        End Workout
      </button>
    </div>
  );
};

export default WorkoutPage;

/*


*/
