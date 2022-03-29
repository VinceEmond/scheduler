import {useState} from "react";

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    setHistory((prev) => [newMode, ...prev.slice((replace ? 1 : 0 ))])
    setMode(newMode);
  }

  const back = () => {
    setHistory((prev) => {
      if (history.length === 1) {
        // return [...prev];
        return;
      }

      const arrayWithItemRemoved = prev.slice(1)
      setMode(arrayWithItemRemoved[0]); // Set mode to the first item of the array
      return arrayWithItemRemoved
    })
  }

  return {mode, transition, back};
};

export default useVisualMode



/*
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

*/