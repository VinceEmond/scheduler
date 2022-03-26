import React, {useEffect, useState} from "react";

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    setHistory([newMode, ...history.slice((replace ? 1 : 0 ))])
    setMode(newMode);
  }

  const back = () => {
    if (history.length < 2) return;

    const arrayWithItemRemoved = history.slice(1);
    setHistory(arrayWithItemRemoved);
    setMode(arrayWithItemRemoved[0]);
  }

  return {mode, transition, back};
};

export { useVisualMode };
