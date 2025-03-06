import React, { useState } from "react";

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
    <div>
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
        <button type="submit">Submit </button>
      </form>
    </div>
  );
};

export default Form;
