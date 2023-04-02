import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Login;
