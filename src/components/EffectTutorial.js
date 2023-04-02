import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [testCounter, setTestCounter] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setData(response.data[0].email));
    //pasing test counter means the useEffect hook will run every time the testCounter is updated
    //always pass empty array unless you want the hook to run every time anything rerenders
  }, [testCounter]);

  const increment = () => {
    setTestCounter(testCounter + 1);
  };
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1>useEffect!</h1>
      <hr></hr>
      <div>Data Collected: {data}</div>
      <br></br>
      <div>
        Test Counter: {testCounter}
        <br></br>
        <button onClick={increment}>Increment Test Counter</button>
      </div>
      <hr></hr>
    </div>
  );
};

export default EffectTutorial;
