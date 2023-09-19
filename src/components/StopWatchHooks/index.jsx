import React, { useState, useEffect } from "react";
import { format, addSeconds } from "date-fns";

const StopWatchHooks = () => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0));
  const [isRunning, setIsRunning] = useState(false);

  const resertHandle = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0));
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const idSetInterval = setInterval(() => {
        setTime((prevTime) => addSeconds(prevTime, 1));
      }, 1000);
      return () => {
        clearInterval(idSetInterval);
      };
    }
  }, [isRunning]);

  const btnHandle = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div
      style={{
        border: "3px solid red",
        marginBottom: "10px",
        textAlign: "center",
      }}
    >
      <h2>StopWatchHooks</h2>
      <h3>time: {format(time, 'HH:mm:ss')}</h3>
      <button onClick={btnHandle}>{isRunning ? "stop" : "start"}</button>
      <button onClick={resertHandle}>reset</button>
    </div>
  );
};

export default StopWatchHooks;
