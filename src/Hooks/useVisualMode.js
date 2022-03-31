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
        return;
      }

      const arrayWithItemRemoved = prev.slice(1)
      setMode(arrayWithItemRemoved[0]);
      return arrayWithItemRemoved
    })
  }

  return {mode, transition, back};
};

export default useVisualMode
