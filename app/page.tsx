"use client";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push(`/Workout?isRunning=false&timer=0&workoutNum=1`);
  }

  return (
    <div>
      <button className="wo_button" onClick={handleClick}>
        Start Workout
      </button>
    </div>
  );
};

export default HomePage;
