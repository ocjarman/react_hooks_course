import React, { useEffect } from "react";

const CallbackChild = ({ returnComment }) => {
  useEffect(() => {
    console.log("function was called inside callback child!");
  }, [returnComment]);

  return <div>{returnComment(" olivia")}</div>;
};

export default CallbackChild;
