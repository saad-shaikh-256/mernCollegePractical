import React, { useState } from "react";

const Form2 = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    num: "",
    checkbox: "",
  });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      firstName: "",
      lastName: "",
      city: "",
      email: "",
      num: "",
      checkbox: "",
    });
  };
  return (
    <div>
      <h3>Registration Form</h3>

      <form onSubmit={submitForm}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          value={data.firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          value={data.lastName}
        />
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          onChange={(e) => setData({ ...data, city: e.target.value })}
          value={data.city}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
        />
        <input
          type="tel"
          placeholder="Enter Mobile No"
          name="num"
          onChange={(e) => setData({ ...data, num: e.target.value })}
          value={data.num}
        />

        <input
          type="checkbox"
          name="Cricket"
          onChange={(e) => setData({ ...data, checkbox: e.target.value })}
          value={data.firstName}
        />
        <label for="Cricket">Cricket</label>

        <input
          type="checkbox"
          name="Football"
          onChange={(e) => setData({ ...data, checkbox: e.target.value })}
          value={data.firstName}
        />
        <label for="Football">Football</label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2;
