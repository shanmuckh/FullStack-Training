import React from 'react';

const ThirdProp = (props) => {
  const {name, email, course, fee}=props.StudentInfo; // Destructure for clarity
  return (
    <div className='thirdprop'>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Course : {course}</p>
        <p>Fee : {fee}</p>
    </div>
  );
};

export default ThirdProp;


//App.js for destructuring
// import "./App.css";
// import React from "react";
// // import FirstProp from "./PropsDir/FirstProp";
// // import SecondProp from "./PropsDir/SecondProp";
// import ThirdProp from "./PropsDir/ThirdProp";

// function App() {
//   const Student = {
//     name: 'Sai Pranay',
//     email: 'sai@gmail.com',
//     course: 'MERN',
//     fee: 20000,
//   };

//   return (
//     <div className="App">
//       {/* <FirstProp />
//       <SecondProp name={'Sai Pranay'} email={'sai@gmail.com'}/>
//       <ThirdProp id={'420'} course={'MERN'} fee={20000}/> */}
//       <ThirdProp StudentInfo={Student} />
//     </div>
//   );
// }

// export default App;




//App.css
// .App{
//   text-align: center;
//   margin: 180px 400px;
//   font-size: 30px;
//   color: #ffffff;
//   font-family: Arial, sans-serif;
//   border-style: dashed;
//   border-color: #ff0000;
//   border-width: 3px;
//   padding: 20px;  
//   background-color: #0b0909;
//   box-shadow: #ffffff 2px 2px 10px;
// }
// body{
//   background-color: black;
// }
// .App:hover{
//   background-color: #1a1a1a;
//   color: #ff0000;
//   border-color: #ffffff;
//   box-shadow: #ff0000 2px 2px 10px;
//   transition: all 0.3s ease-in-out;
// }