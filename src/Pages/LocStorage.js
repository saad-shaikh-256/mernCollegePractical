import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LocStorage = () => {
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
         error.num = "Mobile Number is required";
      }

      setFormErrors(error);

      return isValidate;
   };

   return (
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: "#ffffff", fontFamily: "Poppins", fontWeight: 400 }}>
         <div className="card shadow-lg p-4" style={{ maxWidth: '600px', width: '100%', borderRadius: '16px' }}>
            <h3 className="text-center mb-4" style={{ fontSize: '28px', color: '#6e6cdf' }}>Registration Form</h3>
            <form onSubmit={handleFormData}>
               <div className="mb-3">
                  <input
                     type="text"
                     name="firstName"
                     placeholder="Enter First Name"
                     className="form-control"
                     onChange={(e) => setData({ ...data, firstName: e.target.value })}
                     value={data.firstName}
                     style={{
                        borderRadius: '8px',
                        padding: '12px',
                        color: 'black',
                        fontWeight: 'normal',
                     }}
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
                     style={{
                        borderRadius: '8px',
                        padding: '12px',
                        color: 'black',
                        fontWeight: 'normal',
                     }}
                  />
                  <span className="text-danger">{formError.lastName}</span>
               </div>

               <div className="mb-3">
                  <input
                     type="text"
                     name="city"
                     placeholder="Enter City"
                     className="form-control"
                     onChange={(e) => setData({ ...data, city: e.target.value })}
                     value={data.city}
                     style={{
                        borderRadius: '8px',
                        padding: '12px',
                        color: 'black',
                        fontWeight: 'normal',
                     }}
                  />
                  <span className="text-danger">{formError.city}</span>
               </div>

               <div className="mb-3">
                  <input
                     type="email"
                     name="email"
                     placeholder="Enter Email"
                     className="form-control"
                     onChange={(e) => setData({ ...data, email: e.target.value })}
                     value={data.email}
                     style={{
                        borderRadius: '8px',
                        padding: '12px',
                        color: 'black',
                        fontWeight: 'normal',
                     }}
                  />
                  <span className="text-danger">{formError.email}</span>
               </div>

               <div className="mb-3">
                  <input
                     type="tel"
                     name="num"
                     placeholder="Enter Mobile No"
                     className="form-control"
                     onChange={(e) => setData({ ...data, num: e.target.value })}
                     value={data.num}
                     style={{
                        borderRadius: '8px',
                        padding: '12px',
                        color: 'black',
                        fontWeight: 'normal',
                     }}
                  />
                  <span className="text-danger">{formError.num}</span>
               </div>

               <div className="text-center">
                  <button
                     type="submit"
                     className="btn w-100 mt-4"
                     style={{
                        backgroundColor: '#6e6cdf',
                        color: '#fff',
                        padding: '12px',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                     }}
                  >
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default LocStorage;
