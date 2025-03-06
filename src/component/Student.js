import { Dropdown } from "bootstrap";
import React from "react";

const Student = (props) => {
  const studentMark = props.studentMarks;
  return (
    <>
     
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Marks1</th>
            <th>Marks2</th>
            <th>Marks3</th>
            <th>Total</th>
            <th>Pass/Fail</th>
            <th>Percentage</th>
          </tr>
          {studentMark.map((student, idx) => {
            let rollNo = idx + 1;
            let total = student.marks1 + student.marks2 + student.marks3;
            let per = total / 3;
            let roundedPer = Math.round(per);

             return (
              <tr key={idx}>
                <td> {rollNo}</td>
                <td> {student.name}</td>
                <td>{student.marks1}</td>
                <td>{student.marks2}</td>
                <td>{student.marks3}</td>
                {total > 150 ? (
                  <td className="bg-success text-light"> {total}</td>
                ) : (
                  <td className="bg-danger text-light"> {total}</td>
                )}
                {total > 150 ? <td>Pass</td> : <td>Fail</td>}
                <td> {roundedPer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Student;
