import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import imageOne from "/images/image_one.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          width: "20rem",
          height: "22rem",
        }}
      >
        <img alt="house plant" src={imageOne} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          width: "20rem",
          height: "22rem",
        }}
      ></div>
    </>
  );
}

export default App;
