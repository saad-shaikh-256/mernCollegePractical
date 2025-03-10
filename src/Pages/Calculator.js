import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const Reset = () => {
    setNum1(0);
    setNum2(0);
    setResult(0);
  };

  const handleOperation = (operation) => {
    let res;
    if (operation === "+") {
      res = num1 + num2;
    } else if (operation === "-") {
      res = num1 - num2;
    } else if (operation === "^") {
      res = Math.pow(num1, num2);
    } else if (operation === "*") {
      res = num1 * num2;
    } else if (operation === "/") {
      if (num2 !== 0) {
        res = num1 / num2;
      } else {
        res = "Error";
      }
    } else {
      res = 0;
    }
    setResult(res);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="card shadow-lg p-4" style={{ borderRadius: "24px", width: "fit-content" }}>
        <div className="card-body text-center">
          <h4 className="card-title mb-4" style={{ fontSize: "24px", fontWeight: 600, color: "#212121" }}>
            Calculator
          </h4>

          {/* Input Section */}
          <div className="d-flex flex-column mb-3 gap-3">
            <div className="d-flex gap-2 justify-content-center">
              <input
                type="number"
                className="form-control"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                style={{ width: "180px", padding: "12px", fontSize: "1.2rem", borderRadius: "10px", border: "1px solid #ccc" }}
              />
              <input
                type="number"
                className="form-control"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                style={{ width: "180px", padding: "12px", fontSize: "1.2rem", borderRadius: "10px", border: "1px solid #ccc" }}
              />
            </div>
            <input
              type="text"
              className="form-control"
              value={result}
              disabled
              style={{
                backgroundColor: "#f0f0f0",
                fontSize: "1.2rem",
                fontWeight: "500",
                textAlign: "left",  // Changed to left align
                padding: "12px",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* Operations Section */}
          <div className="d-flex flex-column gap-3">
            <div className="d-flex justify-content-between gap-3 mb-3">
              {["+", "-", "^", "*", "/"].map((operation) => (
                <button
                  key={operation}
                  className="btn btn-dark"
                  style={{
                    width: "50px",
                    height: "50px",
                    fontSize: "1.5rem",
                    borderRadius: "12px",
                    fontWeight: "600",
                  }}
                  onClick={() => handleOperation(operation)}
                >
                  {operation}
                </button>
              ))}
            </div>

            {/* Reset Button */}
            <button
              onClick={Reset}
              className="btn w-100 mt-1"
              style={{
                backgroundColor: "#6e6cdf",
                color: "#ffffff",
                fontSize: "1.2rem",
                fontWeight: "600",
                borderRadius: "10px",
                padding: "12px",
              }}
            >
              AC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
