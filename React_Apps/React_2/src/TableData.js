import React from 'react';

const TableData = () => {
  const students=[
        {Sno:1, name:'Pavan', course:'MERN', fee:20000},
        {Sno:2, name:'Karthik', course:'MERN', fee:20000},
        {Sno:3, name:'mani', course:'MERN', fee:20000}
    ]

  return (
    <div>
      <h2>Students Data</h2>
      {students.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing={0}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Course</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.Sno}>
                <td>{student.Sno}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No record found</p>
      )}
    </div>
  );
};

export default TableData;