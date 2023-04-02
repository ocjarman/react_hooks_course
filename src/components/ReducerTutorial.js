import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  //when an event is triggering more than one action, consider useReducer

  return (
    <div>
      <h1>Reducer testing!</h1>
      <hr></hr>
      <div>
        Counter: {state.count}
        <br></br>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          CHANGE BOTH STATES
        </button>
      </div>
      <hr></hr>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "toggleShowText" });
          }}
        >
          CHANGE SHOW TEXT ONLY
        </button>
        <br></br>
        {state.showText && <p>displaying text!!</p>}
      </div>
      <hr></hr>
    </div>
  );
};

export default ReducerTutorial;
