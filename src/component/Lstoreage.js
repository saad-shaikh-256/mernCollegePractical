import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Lstoreage = () => {

   const [data, setData] = useState({
      firstName: "",
      lastName: "",
      city: "",
      email: "",
      num: "",
   });
   const [formError, setFormErrors] = useState({});
   const navigate = useNavigate();

   const handleFormData = (e) => {
      e.preventDefault();
      if (checkValidation()) {
         console.log(data);
         localStorage.setItem("formData", JSON.stringify(data));
         setData({ firstName: "", lastName: "", city: "", email: "", num: "" });
         navigate("/display");
      }
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
         error.num = "Mobile Num is required";
      }

      setFormErrors(error);

      return isValidate;
   };

   return (
      <div className="container mt-5">
         <h3 className="text-center text-primary">Registration Form</h3>
         <form onSubmit={handleFormData} className="mt-4">
            <div className="mb-3">
               <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  className="form-control"
                  onChange={(e) => setData({ ...data, firstName: e.target.value })}
                  value={data.firstName}
               />
               <span className="text-danger">{formError.firstName}</span>
            </div>
            <div className="mb-3">
               <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  className="form-control"
                  onChange={(e) => setData({ ...data, lastName: e.target.value })}
                  value={data.lastName}
               />
               <span className="text-danger">{formError.lastName}</span>
            </div>
            <div className="mb-3">
               <input
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  className="form-control"
                  onChange={(e) => setData({ ...data, city: e.target.value })}
                  value={data.city}
               />
               <span className="text-danger">{formError.city}</span>
            </div>
            <div className="mb-3">
               <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="form-control"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
               />
               <span className="text-danger">{formError.email}</span>
            </div>
            <div className="mb-3">
               <input
                  type="tel"
                  placeholder="Enter Mobile No"
                  name="num"
                  className="form-control"
                  onChange={(e) => setData({ ...data, num: e.target.value })}
                  value={data.num}
               />
               <span className="text-danger">{formError.num}</span>
            </div>
            <div className="text-center">
               <button type="submit" className="btn btn-primary ">
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
};

export default Lstoreage;
