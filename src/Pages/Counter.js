import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="card shadow-lg p-4" style={{ width: "fit-content", borderRadius: "24px" }}>
        <div className="card-body text-center">
          <h4 className="card-title mb-4" style={{ fontSize: "24px", fontWeight: 600, color: "#212121" }}>
            Counter
          </h4>
          <div className="d-flex justify-content-center align-items-center mb-3 gap-4">
            <button
              onClick={Decrement}
              className="btn"
              style={{
                backgroundColor: "#212121",
                color: "#ffffff",
                width: "50px",
                height: "50px",
                fontSize: "24px",
                borderRadius: "8px",
                fontWeight: "600",
              }}
            >
              -
            </button>
            <div
              className="display-4"
              style={{ fontWeight: "600", width: "80px", textAlign: "center", fontSize: "2rem" }}
            >
              {count}
            </div>
            <button
              onClick={Increment}
              className="btn"
              style={{
                backgroundColor: "#212121",
                color: "#ffffff",
                width: "50px",
                height: "50px",
                fontSize: "24px",
                borderRadius: "8px",
                fontWeight: "600",
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={Reset}
            className="btn w-100 mt-4"
            style={{
              backgroundColor: "#6e6cdf",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "500",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
