import React from 'react'

const CarProp = (CarProp) => {
  const {CarName, CarModel, CarPrice}=CarProp.cars; // Destructure for clarity
  return (
    <div className='thirdprop'>
        <p>Car Name : {CarName}</p>
        <p>Car Model : {CarModel}</p>
        <p>Car Price : {CarPrice}</p>
    </div>
  )
}

export default CarProp


// App.js for CarProp
// import "./App.css";
// import React from "react";
// import CarProp from "./PropsDir/CarProp";

// function App() {
//   const CarDetails = {
//     CarName : 'Tesla Model S',
//     CarModel : '2023',
//     CarPrice : 79999,
//   };

//   return (
//     <div className="App">
//       {/* <FirstProp />
//       <SecondProp name={'Sai Pranay'} email={'sai@gmail.com'}/>
//       <ThirdProp id={'420'} course={'MERN'} fee={20000}/> */}
//       <CarProp cars={CarDetails} />
//     </div>
//   );
// }

// export default App;

// App.css for CarProp
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
//   transition: all 0.3s ease-in-out;
// }