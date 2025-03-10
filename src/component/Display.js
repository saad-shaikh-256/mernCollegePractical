import React, { useState, useEffect } from "react";

const Display = (props) => {
   const [data, setData] = useState({});

   useEffect(() => {
      const localStorageData = JSON.parse(localStorage.getItem("formData"));
      setData(localStorageData);
   }, []);

   return (
      <div className="container mt-5">
         <div className="card">
            <div className="card-header text-center bg-primary text-white">
               <h3>Registration Details</h3>
            </div>
            <div className="card-body">
               <ul className="list-group">
                  <li className="list-group-item">
                     <strong>First Name:</strong> {data.firstName}
                  </li>
                  <li className="list-group-item">
                     <strong>Last Name:</strong> {data.lastName}
                  </li>
                  <li className="list-group-item">
                     <strong>Email:</strong> {data.email}
                  </li>
                  <li className="list-group-item">
                     <strong>City:</strong> {data.city}
                  </li>
                  <li className="list-group-item">
                     <strong>Number:</strong> {data.num}
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Display;
