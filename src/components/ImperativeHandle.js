import React, { useRef } from "react";
import Button from "./Button";

const ImperativeHandle = () => {
  const buttonRef = useRef(null);

  //YOU CAN ALTER THE LOCAL STATE OF A CHILD COMPONENT USING AN IMPERATIVE HANDLE & USEREF
  return (
    <div style={{ backgroundColor: "orange" }}>
      <h1>useImperativeHandle!</h1>
      <hr></hr>
      <div>
        <button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
        >
          Button From Parent
        </button>
        <Button ref={buttonRef} />
        <br></br>
      </div>
    </div>
  );
};

export default ImperativeHandle;
