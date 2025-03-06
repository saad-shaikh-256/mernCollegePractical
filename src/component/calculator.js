import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const Reset = () => {
    setNum1(0);
    setNum2(0);
  };

  return (
    <>
      <div className="body">
        <h3> Number-1: {num1}</h3>
        <h3> Number-2: {num2}</h3>

        <button onClick={Reset}>Reset Value</button>
      </div>
    </>
  );
};

export default Calculator;
