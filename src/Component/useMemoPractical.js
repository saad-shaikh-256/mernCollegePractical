import React, { useMemo, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const useMemoPractical = () => {

   const studentMarks = [
      {
         name: "Saad",
         marks1: Math.floor(Math.random() * 101),
         marks2: Math.floor(Math.random() * 101),
         marks3: Math.floor(Math.random() * 101),
      },
      {
         name: "Taleb",
         marks1: Math.floor(Math.random() * 101),
         marks2: Math.floor(Math.random() * 101),
         marks3: Math.floor(Math.random() * 101),
      },
      {
         name: "Muzir",
         marks1: Math.floor(Math.random() * 101),
         marks2: Math.floor(Math.random() * 101),
         marks3: Math.floor(Math.random() * 101),
      },
      {
         name: "Rayyan",
         marks1: Math.floor(Math.random() * 101),
         marks2: Math.floor(Math.random() * 101),
         marks3: Math.floor(Math.random() * 101),
      },
      {
         name: "Ayesha",
         marks1: Math.floor(Math.random() * 101),
         marks2: Math.floor(Math.random() * 101),
         marks3: Math.floor(Math.random() * 101),
      },
      {
         name: "Zara",
         marks1: Math.floor(Math.random() * 101),
         marks2: Math.floor(Math.random() * 101),
         marks3: Math.floor(Math.random() * 101),
      },
      {
         name: "Ibrahim",
         marks1: Math.floor(Math.random() * 101),
         marks2: Math.floor(Math.random() * 101),
         marks3: Math.floor(Math.random() * 101),
      },
   ];

   const studentMark = studentMarks;

   let filterUsingMemo = useMemo(() => {
      return studentMark.map((student, idx) => {
         let rollNo = idx + 1;
         let marks1 = student.marks1;
         let marks2 = student.marks2;
         let marks3 = student.marks3;
         let total = marks1 + marks2 + marks3;
         let per = total / 3;
         let roundedPer = Math.round(per);

         // Function to apply text color if marks are below 40
         const markClass = (marks) => (marks < 40 ? "text-danger" : "");


         if (per > 75) {
            return (
               <tr key={idx}>
                  <td>{rollNo}</td>
                  <td>{student.name}</td>
                  <td className={markClass(marks1)}>{marks1}</td>
                  <td className={markClass(marks2)}>{marks2}</td>
                  <td className={markClass(marks3)}>{marks3}</td>
                  <td className={markClass(total)}>{total}</td>
                  <td className={markClass(roundedPer)}>{roundedPer}%</td>
               </tr>
            );
         }
         return null;
      }
      )
   }, [studentMark])



   return (
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-5">
         <div className="card shadow-lg w-75">
            <div className="card-header" style={{ backgroundColor: "#6e6cdf" }}>
               <h4 className="text-white text-center mb-0 py-3">Student Data</h4>
            </div>
            <div className="card-body">
               <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover">
                     <thead className="thead-light">
                        <tr>
                           <th>Roll No</th>
                           <th>Name</th>
                           <th>PHP</th>
                           <th>Java</th>
                           <th>Python</th>
                           <th>Total</th>
                           <th>Percentage</th>
                        </tr>
                     </thead>
                     <tbody>
                        {filterUsingMemo}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   )
}

export default useMemoPractical