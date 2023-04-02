import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>Button From Child</button>
      <br></br>
      {toggle && <span>toggle me!</span>}
    </div>
  );
});

export default Button;
