import React from "react";
import { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffect = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    //CALLED BEFORE THE USEFFECT
    console.log("useLAYOUTeffect");
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    //CALLED AFTER THE LAYOUT EFFECT!
    console.log("useEffect");
    inputRef.current.value = "HELLO";
    console.log(inputRef.current.value);
  }, []);
  return (
    <div style={{ backgroundColor: "lavender" }}>
      <h1>useLayoutEffect!</h1>
      <hr></hr>
      <div>
        <input
          ref={inputRef}
          value="OLIVIA"
          style={{ width: 50, height: 50 }}
        />
      </div>
      <br></br>
    </div>
  );
};

export default LayoutEffect;
