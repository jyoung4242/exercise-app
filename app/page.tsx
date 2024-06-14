"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { StateProvider } from "../app/context/statecontext";

const HomePage = () => {
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push(`/Workout?isRunning=false&timer=0&workoutNum=1`);
  }

  useEffect(() => {}, []);

  return (
    <div>
      <StateProvider>
        <button className="wo_button" onClick={handleClick}>
          Start Workout
        </button>
      </StateProvider>
    </div>
  );
};

export default HomePage;
