import React, {useEffect, useState} from "react";
import {padZero} from "../utils";

export const Timer = ({duration}) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    const id = setTimeout(() => {
      if (seconds) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    }
  },  [seconds]);

  const m = padZero(seconds ? Math.ceil(seconds / 60) - 1 : 0);
  const s = padZero(seconds % 60);

  return <div>
    {m} : {s}
  </div>
};
