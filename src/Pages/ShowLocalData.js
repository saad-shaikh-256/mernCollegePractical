import React, { useState, useEffect } from "react";

const ShowLocalData = () => {
   const [data, setData] = useState({});

   useEffect(() => {
      const localStorageData = JSON.parse(localStorage.getItem("formData"));
      setData(localStorageData);
   }, []);

   return (
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: "#ffffff", fontFamily: "Poppins", fontWeight: 400 }}>
         <div className="card shadow-lg p-4" style={{ maxWidth: '1000px', width: '100%', borderRadius: '16px' }}>
            <div className="card-header text-center" style={{ backgroundColor: '#6e6cdf', color: '#fff', borderRadius: '16px 16px 0 0' }}>
               <h3>Registration Details</h3>
            </div>
            <div className="card-body">
               <table className="table table-bordered" style={{ textAlign: 'left' }}>
                  <thead>
                     <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Mobile Number</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>{data?.firstName}</td>
                        <td>{data?.lastName}</td>
                        <td>{data?.email}</td>
                        <td>{data?.city}</td>
                        <td>{data?.num}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default ShowLocalData;
