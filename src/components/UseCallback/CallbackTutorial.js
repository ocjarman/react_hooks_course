import React, { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

const CallbackTutorial = () => {
  const [data, setData] = useState("data to be changed");
  const [toggle, setToggle] = useState(false);

  //similar to useMemo functionality
  //difference is accessing a function through a prop vs accessing a value
  const returnCommment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div style={{ backgroundColor: "turquoise" }}>
      <h1>useCallback!</h1>
      <div>
        <CallbackChild returnComment={returnCommment} />
      </div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        MORE!
      </button>
      {toggle && <h5>toggled!</h5>}
    </div>
  );
};

export default CallbackTutorial;
