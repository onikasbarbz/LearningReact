import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      console.log(`Time elapsed: ${seconds + 1} seconds`);
    }, 1000);
    return () => clearInterval(intervalId);
  }); // No dependency array means this effect runs after every render

  return <h1>Time Elapsed: {seconds} seconds</h1>;
}
export default Timer;