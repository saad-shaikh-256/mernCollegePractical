import React from "react";
import { useState } from "react";
const FormValidation = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    num: "",
  });
  const [formError, setFormErrors] = useState({});
  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      firstName: "",
      lastName: "",
      city: "",
      email: "",
      num: "",
    });
  };

  const handleFormData = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      console.log(data);
      setData({ firstName: "", lastName: "" });
    }
  };

  const checkValidation = (e) => {
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
      error.num = "Mobile Num is required";
    }

    setFormErrors(error);

    return isValidate;
  };

  return (
    <div>
      <h3>Registration Form</h3>

      <form onSubmit={handleFormData}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          value={data.firstName}
        />
        <span style={{ color: "red" }}>{formError.firstName}</span>
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          value={data.lastName}
        />
        <span style={{ color: "red" }}>{formError.lastName}</span>
        <br />
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          onChange={(e) => setData({ ...data, city: e.target.value })}
          value={data.city}
        />
        <span style={{ color: "red" }}>{formError.city}</span>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
        />
        <span style={{ color: "red" }}>{formError.email}</span>
        <br />
        <input
          type="tel"
          placeholder="Enter Mobile No"
          name="num"
          onChange={(e) => setData({ ...data, num: e.target.value })}
          value={data.num}
        />
        <span style={{ color: "red" }}>{formError.num}</span>
        <br />

        <label for="Male">Male</label>
        <input type="radio" name="gender" value="Male" />

        <label>Female</label>
        <input type="radio" name="gender" value="Female" />

        <label>Box1</label>
        <input type="text" />
        <label>Box1</label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
