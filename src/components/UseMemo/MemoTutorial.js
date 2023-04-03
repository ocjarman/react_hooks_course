import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

const MemoTutorial = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setData(response.data));
  }, []);

  //this fxn will be recreated every rerender of this component --> very inefficient!
  //when you have large computations on the frontend, use useMemo
  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("THIS WAS COMPUTED");
    return longestName;
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ backgroundColor: "hotpink" }}>
      <h1>useMemoTutorial!</h1>
      <div>{findLongestName(data)}</div>
      Count: {count}
      <button onClick={increment}>MORE!</button>
    </div>
  );
};

export default MemoTutorial;
