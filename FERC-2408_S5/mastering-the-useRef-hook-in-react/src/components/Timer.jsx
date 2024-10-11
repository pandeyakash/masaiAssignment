import { useEffect, useRef, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(600);
  const totalTimeRef = useRef(600);
  const intervalId = useRef(null);
  const totalTime = useRef(600);
  const messageRef = useRef(null);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(secs).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const handleStart = () => {
    if (intervalId.current !== null) {
      alert("Timer is already running!");
      return;
    }

    intervalId.current = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          clearInterval(intervalId.current);
          intervalId.current = null;
          showMessage();
          return prev - 1;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setTime(totalTime.current);
    hideMessage();
  };

  const calculatePercentage = () => {
    return (time / totalTime.current) * 100;
  };

  const handleTimeChange = () => {
    const newDuration = parseInt(totalTimeRef.current.value, 10);
    console.log(!isNaN(newDuration) && newDuration > 0);
    if (!isNaN(newDuration) && newDuration > 0) {
      totalTime.current = newDuration;
      setTime(newDuration);
      handleReset();
    } else {
      alert("Enter valid number");
    }
    totalTimeRef.current.value = "";
  };

  const getBackgroundColor = () => {
    const percentage = calculatePercentage();
    if (percentage <= 10) {
      return "#CC0000";
    } else if (percentage <= 20) {
      return "#FF0000";
    } else if (percentage <= 30) {
      return "#FF3300";
    } else if (percentage <= 40) {
      return "#FF6600";
    } else if (percentage <= 50) {
      return "#FF9900";
    } else if (percentage <= 60) {
      return "#FFCC00";
    } else if (percentage <= 70) {
      return "#FFFF00";
    } else if (percentage <= 80) {
      return "#CCFF00";
    } else if (percentage <= 90) {
      return "#66FF00";
    } else {
      return "green";
    }
  };

  const showMessage = () => {
    messageRef.current.style.display = "block";
  };

  const hideMessage = () => {
    messageRef.current.style.display = "none";
  };

  useEffect(() => {
    return () => {
      handleReset();
    };
  }, []);
  return (
    <div className="container">
      <h2>Timer</h2>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${calculatePercentage()}%`,
            backgroundColor: `${getBackgroundColor()}`,
          }}
        ></div>
      </div>
      <div className="timer">
        <h3>{formatTime(time)}</h3>
        <div>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="input">
        <input
          type="number"
          ref={totalTimeRef}
          placeholder="Enter the duration"
        />
        <button onClick={handleTimeChange}>Change Duration</button>
      </div>
      <div className="message" ref={messageRef}>
        Time is Up!!!
      </div>
    </div>
  );
};

export { Timer };
