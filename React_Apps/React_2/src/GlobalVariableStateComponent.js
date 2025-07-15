import React from 'react'
let count = 0; // Global variable to hold the state
const GlobalVariableStateComponent = () => {
    const increment = () => {
        count++;
        console.log(count);
    }
    const decrement = () => {
        count--;
        console.log(count);
    }
  return (
    <div >
        <h1>Click the buttons given below to Increment Or Decrement the values.</h1>
        <button className='button' onClick={increment}>increment</button>
        <span> count : {count} </span>
        <button className='button' onClick={decrement}>decrement</button><br />
    </div>
  )
}
export default GlobalVariableStateComponent



// App.js
// import "./App.css";
// import React from "react";
// import GlobalVariableStateComponent from "./GlobalVariableStateComponent";


// function App() {
//   return (
//     <div className="App">
//       <GlobalVariableStateComponent />
//     </div>
//   );
// }

// export default App;


// App.css
// .App{
//   text-align: center;
//   margin: 260px 400px;
//   font-size: 30px;
//   color: #ffffff;
//   font-family: Arial, sans-serif;
//   border-style: dashed;
//   border-color: #ff0000;
//   border-width: 3px;
//   padding: 20px;  
//   background-color: #0b0909;
//   box-shadow: #ffffff 4px 4px 10px;
// }
// body{
//   background-color: black;
// }
// .App:hover{
//   background-color: #1a1a1a;
//   color: #ff0000;
//   border-color: #ffffff;
//   box-shadow: #ff0000 2px 2px 10px;
//   transition: all 0.2s ease-in-out;
// }
// .button {
//   background-color: #4CAF50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
// }
// .button:hover {
//   background-color: #45a049; /* Darker green */
//   color: white;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//   transition: background-color 0.3s ease, box-shadow 0.3s ease;
// }  