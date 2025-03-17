import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormValidation = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    num: "",
    gender: "",
    country: "",
    checkbox: [],
  });

  const [formError, setFormErrors] = useState({});

  const submitForm = (event) => {
    event.preventDefault();
    if (checkValidation()) {
      console.log(data);
      setData({
        firstName: "",
        lastName: "",
        city: "",
        email: "",
        num: "",
        gender: "",
        country: "",
        checkbox: [],
      });
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setData((prevData) => {
      if (checked) {
        return { ...prevData, checkbox: [...prevData.checkbox, value] };
      } else {
        return {
          ...prevData,
          checkbox: prevData.checkbox.filter((item) => item !== value),
        };
      }
    });
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({ ...prevData, gender: value }));
  };

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({ ...prevData, country: value }));
  };

  const checkValidation = () => {
    let error = {};
    let isValidate = true;

    if (!data.firstName) {
      isValidate = false;
      error.firstName = "First Name is required";
    }

    if (!data.lastName) {
      isValidate = false;
      error.lastName = "Last Name is required";
    }

    if (!data.city) {
      isValidate = false;
      error.city = "City is required";
    }

    if (!data.email) {
      isValidate = false;
      error.email = "Email is required";
    }

    if (!data.num) {
      isValidate = false;
      error.num = "Mobile Number is required";
    }

    if (!data.gender) {
      isValidate = false;
      error.gender = "Please select your gender";
    }

    if (!data.country) {
      isValidate = false;
      error.country = "Please select a country";
    }

    if (data.checkbox.length === 0) {
      isValidate = false;
      error.checkbox = "Please select at least one interest";
    }

    setFormErrors(error);
    return isValidate;
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
              <span style={{ color: "red" }}>{formError.firstName}</span>
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
              <span style={{ color: "red" }}>{formError.lastName}</span>
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                onChange={(e) => setData({ ...data, city: e.target.value })}
                value={data.city}
                className="form-control"
                style={{
                  borderRadius: "8px",
                  padding: "12px",
                  color: "black",
                  fontWeight: "normal",
                }}
              />
              <span style={{ color: "red" }}>{formError.city}</span>
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
                className="form-control"
                style={{
                  borderRadius: "8px",
                  padding: "12px",
                  color: "black",
                  fontWeight: "normal",
                }}
              />
              <span style={{ color: "red" }}>{formError.email}</span>
            </div>

            <div className="mb-3">
              <input
                type="tel"
                name="num"
                placeholder="Enter Mobile No"
                onChange={(e) => setData({ ...data, num: e.target.value })}
                value={data.num}
                className="form-control"
                style={{
                  borderRadius: "8px",
                  padding: "12px",
                  color: "black",
                  fontWeight: "normal",
                }}
              />
              <span style={{ color: "red" }}>{formError.num}</span>
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ color: "#6e6cdf" }}>
                Gender
              </label>
              <div style={{ marginBottom: "10px" }}></div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={data.gender === "Male"}
                  onChange={handleRadioChange}
                  className="form-check-input"
                />
                <label className="form-check-label" style={{ color: "#111111" }}>
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={data.gender === "Female"}
                  onChange={handleRadioChange}
                  className="form-check-input"
                />
                <label className="form-check-label" style={{ color: "#111111" }}>
                  Female
                </label>
              </div>
              <span style={{ color: "red" }}>{formError.gender}</span>
            </div>

            <div style={{ marginBottom: "20px" }}></div>

            <div className="mb-3">
              <select
                className="form-select"
                name="country"
                value={data.country}
                onChange={handleSelectChange}
                style={{
                  borderRadius: "8px",
                  padding: "12px",
                  color: "black",
                  fontWeight: "normal",
                }}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
              <span style={{ color: "red" }}>{formError.country}</span>
            </div>

            <div className="mb-3">
              <label className="form-label" style={{ color: "#6e6cdf" }}>
                Interests
              </label>
              <div style={{ marginBottom: "10px" }}></div>

              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="Cricket"
                  value="Cricket"
                  checked={data.checkbox.includes("Cricket")}
                  onChange={handleCheckboxChange}
                  className="form-check-input"
                />
                <label className="form-check-label" style={{ color: "#111111" }}>
                  Cricket
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="Football"
                  value="Football"
                  checked={data.checkbox.includes("Football")}
                  onChange={handleCheckboxChange}
                  className="form-check-input"
                />
                <label className="form-check-label" style={{ color: "#111111" }}>
                  Football
                </label>
              </div>
              <span style={{ color: "red" }}>{formError.checkbox}</span>
            </div>

            <div style={{ marginBottom: "20px" }}></div>

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

export default FormValidation;
