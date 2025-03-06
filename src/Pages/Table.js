import React from "react";
import "./CSS/Table.css";

const Table = (props) => {
  const studentMark = props.studentMarks;

  return (
    <div class="homeContainer">
      <div class="mainContainer">
        <span>Student Data</span>
        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>PHP</th>
              <th>Java</th>
              <th>Python</th>
              <th>Total</th>
              <th>Percentage </th>
            </tr>
          </thead>
          <tbody>
            {studentMark.map((student, idx) => {
              let rollNo = idx + 1;
              let marks1 = student.marks1;
              let marks2 = student.marks2;
              let marks3 = student.marks3;
              let total = student.marks1 + student.marks2 + student.marks3;
              let per = total / 3;
              let roundedPer = Math.round(per);

              return (
                <tr key={idx}>
                  <td> {rollNo}</td>
                  <td> {student.name}</td>
                  {marks1 > 40 ? (
                    <td class=""> {marks1}</td>
                  ) : (
                    <td class="Fail"> {marks1}</td>
                  )}
                  {marks2 > 40 ? (
                    <td class=""> {marks2}</td>
                  ) : (
                    <td class="Fail"> {marks2}</td>
                  )}
                  {marks3 > 40 ? (
                    <td class=""> {marks3}</td>
                  ) : (
                    <td class="Fail"> {marks3}</td>
                  )}
                  {total > 120 ? (
                    <td class=""> {total}</td>
                  ) : (
                    <td class="Fail"> {total}</td>
                  )}
                  {roundedPer > 40 ? (
                    <td>{roundedPer}%</td>
                  ) : (
                    <td class="Fail">{roundedPer}%</td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
