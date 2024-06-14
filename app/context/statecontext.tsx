import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context state
interface StateContextProps {
  workout: {
    date: string;
    exercises: Record<string, number>;
  };
  reset: () => void;
  setCurrentDate: (date: string) => void;
  addExcercise: (excercise: string, duration: number) => void;
}

// Create the context with a default value
const StateContext = createContext<StateContextProps | undefined>(undefined);

// Define the provider component
const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [date, setDate] = useState("");
  const [exercises, setExercises] = useState({});

  const reset = () => {
    setExercises({});
    setDate("");
  };

  const setCurrentDate = () => {
    setDate(Date.now().toString());
  };

  const addExcercise = (excercise: string, duration: number) => {
    setExercises({ ...exercises, [excercise]: duration });
  };

  return (
    <StateContext.Provider value={{ workout: { date, exercises }, reset, setCurrentDate, addExcercise }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the context
const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};

export { StateProvider, useStateContext };
