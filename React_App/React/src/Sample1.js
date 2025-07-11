import React from "react";
import './Sample1.css';

// This is a sample React component
let name = "Bruce Wayne";
let imgUrl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/de3mn3j-ae2a13b0-8d86-45c5-8d23-530b81235a5e.png/v1/fill/w_900,h_431/the_batman__2022__logo_png__by_mintmovi3_de3mn3j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDMxIiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZTNtbjNqLWFlMmExM2IwLThkODYtNDVjNS04ZDIzLTUzMGI4MTIzNWE1ZS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.QkiAfoqdBwfNqabUzCHyh1571ekyUZO0GS_Cm2hp9gw";
const Sample1 = () => {
  return (
    <div>
      <h1>I am </h1>
      <div className="img-container">
      <img src={imgUrl} width={(500)} height={(300)} alt="Sample" />
        </div>
      <p>This is a sample React component.</p>
    </div>
  );
};
export default Sample1;