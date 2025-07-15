import React from 'react'
import { useState } from 'react'

const MyState = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Click the buttons given below to Increment Or Decrement the values.</h1>
        <button className="button" onClick={()=>setCount(count+1)}>increment</button><br />
        <span>{count}</span><br />
        <button className="button" onClick={()=>setCount(count-1)}>decrement</button><br />
    </div>
  )
}

export default MyState



// if the count should be 0 then it should not decrement
// import React, { useState } from 'react';

// const MyState = () => {
//   const [count, setCount] = useState(0);

//   // Custom decrement handler that prevents going below 0
//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button><br />
//       <span>{count}</span><br />
//       <button onClick={handleDecrement}>Decrement</button><br />
//     </div>
//   );
// };

// export default MyState;


// App/.js
// import "./App.css";
// import React from "react";
// import MyState from "./MyState";


// function App() {
//   return (
//     <div className="App">
//       <MyState />
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