import React from "react";
import { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("this is my input");

  const increment = () => {
    setCounter(counter + 1);
  };

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>State testing!</h1>
      <hr></hr>
      <div>
        Counter: {counter}
        <button onClick={increment}>Increment</button>
      </div>
      <hr></hr>
      <div>
        Input: {input}
        <br></br>
        <input placeholder="enter something..." onChange={changeInput} />
      </div>
      <hr></hr>
    </div>
  );
};

export default StateTutorial;
