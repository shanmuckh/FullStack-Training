import React from "react";
let name = "Shankar";
let imgUrl =
  "https://wallpapers.com/images/hd/avengers-endgame-pictures-62wb0ec9bi2igvio.jpg";
let Description = "Hello friends.";
// Nested components
// Home and About components
const Home = () => {
  return <div>This is Home component [nested component]</div>;
};

const About = () => {
  return <div>This is About component [nested component]</div>;
};
// ProfileCard component
// This component will use Home and About components
const ProfileCard = () => {
  return (
    <div className="heading">
      <img src={imgUrl} alt="Mypic" width={400} height={400} />
      <h2>My name is: {name}</h2>
      <p>{Description}</p>
      <Home/>
      <About/>
    </div>
  );
};
export default ProfileCard;



// App.js for this file
// import "./App.css";
// import React from "react";
// import ProfileCard from "./ProfileCard";
// function App() {
//   return (
//     <div>
//       <ProfileCard></ProfileCard>
//     </div>
//   );
// }
// export default App;



//When bootstrap links are not added to the index.html
// App.css for this file
// .heading{
//   padding: 40px 40px;
//   margin: auto;
//   border-style: solid;
//   border-width: 5px 5px;
//   max-width: 500px;
//   background-color: beige;
// }
// img{
//   border-radius: 50%;
// }
// h1{
//   text-align: center;
// }