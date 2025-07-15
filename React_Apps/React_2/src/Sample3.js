import React from "react";

let title = "Avengers Endgame";
let imgUrl =
  "https://wallpapers.com/images/hd/avengers-endgame-pictures-62wb0ec9bi2igvio.jpg";
const Sample3 = () => {
  return (
    <div className="heading">
      <img src={imgUrl} alt="Marvel" width={400} height={400} />
      <h2>Title of the image is : {title}</h2>
      <p>
        Description: "Marvel" most commonly refers to Marvel Entertainment, a
        prominent entertainment company known for its comic books, films,
        television series, and video games, particularly within the Marvel
        Cinematic Universe (MCU).
      </p>
    </div>
  );
};

export default Sample3;


// App.js

// import "./App.css";
// import React from "react";
// import Sample3 from "./Sample3";
// function App() {
//   return (
//     <div>
//       <Sample3></Sample3>
//     </div>
//   );
// }
// export default App;