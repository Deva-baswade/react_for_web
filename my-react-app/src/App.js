import React, { useState } from 'react';
import './App.css';
import Navbar from './componant/Navbar';
import First from './componant/First';
import Alert from './componant/Alert';
import About from './componant/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("The light mode enabled", "success");
      document.title = "Textutils-light mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#222761";
      document.body.style.color = "white";
      showAlert("The dark mode enabled", "success");
      document.title = "Textutils-dark mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route  exact path="/about" element={<About mode={mode}  togglemode={togglemode} showAlert={showAlert} />} />
            <Route exact path="/" element={<First mode={mode}  togglemode={togglemode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;