import React from 'react'

const ListCondition = () => {
    const students=[
        {Sno:1, name:'Pavan', course:'MERN', fee:20000},
        {Sno:2, name:'Karthik', course:'MERN', fee:20000},
        {Sno:3, name:'mani', course:'MERN', fee:20000}
    ]
  return (
    <div>
        <h2>List in React</h2>
        <h4>Student details :</h4>
        {students.length>0 ?(students.map(student=>
            <li key={student.Sno}>Sno : {student.Sno} <br/>Name : {student.name} <br/>Course : {student.course} <br/>Fee : {student.fee}</li>
        )) :(<p>No Record Found</p>)}
    </div>
  )
}

export default ListCondition