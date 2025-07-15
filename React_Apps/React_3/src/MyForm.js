import React, { useState } from "react";


// ******************************************************************************************************************************************************
// ******************************************************************************************************************************************************

// This is the first version of the form with text input and checkbox


// const MyForm0 = () => {
//   const [name, setName] = useState("");
//   const [check, setCheck] = useState(false);
//   return (
//     <div>
//       <h1>React Form :</h1>
//       <form>
//         <label>Enter Your Name :</label>
//         <br />
//         <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
//       </form>
//       <p>Entered Name Is : {name}</p>
//       <hr />
//       <input type="checkbox" name="check" checked={check} onChange={(e) => setCheck(e.target.checked)}/>Accept Terms :
//       <p>Status is : {check ? 'Accept' : 'Not Accept'}</p>
//     </div>
//   );
// };
// export default MyForm0;


// ******************************************************************************************************************************************************
// ******************************************************************************************************************************************************


// This is the second version of the form with radio buttons


// const MyForm1 = () => {
//     const [gender, setGender] = useState("");

//     return (
//         <div>
//             <div>
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={gender === "Male"}
//                         onChange={(e) => setGender(e.target.value)}
//                     />
//                     Male
//                 </label>
//                 <label style={{ marginLeft: "10px" }}>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={gender === "Female"}
//                         onChange={(e) => setGender(e.target.value)}
//                     />
//                     Female
//                 </label>
//             </div>
//             <p>You have selected : {gender}</p>
//         </div>
//     );
// };
// export default MyForm1;



// ******************************************************************************************************************************************************
// ******************************************************************************************************************************************************


const MyForm2 = () => {
    const [course, setCourse] = useState("");

    return (
        <div>
            <label htmlFor="course-select" placeholder="Course">Select a Course : </label>
            <select
                id="course-select"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            >
                
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
                <option value="Node.js">Node.js</option>
            </select>
            <p>Selected Course is: {course}</p>
        </div>
    );
};

export default MyForm2;