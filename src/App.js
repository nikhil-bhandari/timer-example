import React from 'react';
import './App.css';
import {TimerWithHook} from "./components/timerWithHook";
import {Timer} from "./components/timer";

function App() {
  return (
    <div>
      <h1>10 Second</h1>
      <TimerWithHook duration={10}/>
      <h1>10 Second</h1>
      <Timer duration={10}/>
      <h1>1 Minutes</h1>
      <TimerWithHook duration={60}/>
      <h1>2 Minutes</h1>
      <TimerWithHook duration={120}/>
      <h1>7 Minutes</h1>
      <TimerWithHook duration={7 * 60}/>
    </div>
  );
}

export default App;
