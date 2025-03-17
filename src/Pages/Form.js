import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-5"
      style={{ backgroundColor: "#ffffff", fontFamily: "Poppins", fontWeight: 400 }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ borderRadius: "16px", width: "100%", maxWidth: "600px" }}
      >
        <div className="card-body">
          <h3 className="text-center mb-4" style={{ fontSize: "28px", color: "#6e6cdf" }}>
            Registration Form
          </h3>

          <form onSubmit={submitForm}>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                onChange={(e) => setData({ ...data, firstName: e.target.value })}
                value={data.firstName}
                className="form-control"
                style={{
                  borderRadius: "8px",
                  padding: "12px",
                  color: "black",
                  fontWeight: "normal",
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                value={data.lastName}
                className="form-control"
                style={{
                  borderRadius: "8px",
                  padding: "12px",
                  color: "black",
                  fontWeight: "normal",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn w-100 mt-4"
              style={{
                backgroundColor: "#6e6cdf",
                color: "#fff",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
