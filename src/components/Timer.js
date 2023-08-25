import { useEffect, useState, useCallback } from "react";

let timerRef;

const Timer = () => {
  const [timer, setTimer] = useState(0);

  // timerRef = setInterval(() => {
  //   setTimer(timer - 1);
  //   if (timer == 0) clearInterval(timerRef);
  // }, 1000);

  // useEffect(createTimer(), []);

  // const stopTimer = () => {
  //   clearInterval(timerRef);
  //   createTimer();
  // };

  // const resetTimer = () => {
  //   setTimer(60);
  //   createTimer();
  // };

  return (
    <div className="timerClass">
      <span>{`${timer} seconds`}</span>
      {/* <button onClick={stopTimer}>{`stop`}</button>
      <button onClick={resetTimer}>{`reset`}</button> */}
    </div>
  );
};

export default Timer;
