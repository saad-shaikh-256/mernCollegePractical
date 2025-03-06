import React, { useState } from "react";
import "./CSS/Counter.css";

const Counter = () => {
  // State for Counter
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div class="Container">
        <div class="Counter">
          <span>Counter</span>
          <div class="Action">
            <button onClick={Decrement}>-</button>
            <div>{count}</div>
            <button onClick={Increment}>+</button>
          </div>
          <button onClick={Reset} class="Reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
