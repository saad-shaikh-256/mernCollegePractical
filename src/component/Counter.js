import React, { useState } from "react";
import styles from "./container.module.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const Value = () => {
    setValue(value + 1);
  };

  const Increment = () => {
    setCount(count + value);
  };

  const Decrement = () => {
    if (count - value < 0) {
      setCount(0);
    } else {
      setCount(count - value);
    }
  };

  const Reset = () => {
    setCount(0);
    setValue(0);
  };

  return (
    <div className="body">
      <div>
        <span> Counter: {count}</span>
        <span> Value: {value}</span>
      </div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Value}>Value</button>
      <button onClick={Reset}>Reset Value</button>
    </div>
  );
};

export default Counter;
