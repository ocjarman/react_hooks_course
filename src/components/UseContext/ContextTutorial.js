import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

//context is a collection of information/states you want to be able to access inside of components
export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [username, setUsername] = useState("");
  return (
    <div style={{ backgroundColor: "limegreen" }}>
      <h1>useContextTutorial!</h1>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login /> <User />
      </AppContext.Provider>
    </div>
  );
};

export default ContextTutorial;
