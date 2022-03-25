import React, {useState} from "react";

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);

  const transition = (newMode) => {
    setMode(newMode)
  }

  return {mode, transition};
};

const useCoolHook = (something) => {}

export { useVisualMode };

