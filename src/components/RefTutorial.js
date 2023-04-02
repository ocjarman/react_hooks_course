import React from "react";
import { useRef } from "react";

const RefTutorial = () => {
  const inputRef = useRef(null);

  //USEREF is usually helpful for situations where you might be using vanilla js
  const onClick = () => {
    inputRef.current.focus();
    //clears input on submit
    inputRef.current.value = "";
  };
  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <h1>useRef!</h1>
      <hr></hr>
      <div>
        My name is: <h2>Olivia</h2> <br></br>
        <input type="text" placeholder="ex..." ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
      </div>
      <br></br>
    </div>
  );
};

export default RefTutorial;
