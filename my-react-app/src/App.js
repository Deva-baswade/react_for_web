import React, { useState } from 'react';
import './App.css';
import Navbar from './componant/Navbar';
import First from './componant/First';

function App() {
  const [mode, setMode] = useState("white");

  const togglemode = () => {
    if (mode === "light") {
      setMode("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  };
  return(
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <div className="container my-5">
        <h1>Enter the text</h1>
        <First mode={mode} togglemode={togglemode} />
      </div>
    </>
  );
}

export default App;