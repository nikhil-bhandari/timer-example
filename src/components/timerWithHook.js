import React, {useEffect, useRef, useState} from "react";
import {padZero} from "../utils";

export const TimerWithHook = ({duration}) => {
  const [seconds, setSeconds] = useState(duration);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    if (seconds) {
      setSeconds(seconds - 1);
    } else {
      setDelay(null);
    }
  }, delay);

  const m = padZero(seconds ? Math.ceil(seconds / 60) - 1 : 0);
  const s = padZero(seconds % 60);

  return <div>
    {m} : {s}
  </div>
};

const useInterval = (callback, delay) => {
  const cb = useRef();

  // Update the callback reference;
  useEffect(() => {
    cb.current = callback;
  }, [callback]);

  //Execute Tick
  useEffect(() => {
    function tick() {
      cb.current();
    }

    let id;

    if (delay !== null) {
      id = setInterval(tick, delay);
    }

    return () => {
      clearInterval(id);
    }
  }, [delay]);
}
