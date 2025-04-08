import React, { useState } from 'react';
import './App.css';
import Navbar from './componant/Navbar';
import First from './componant/First';
import Alert from './componant/Alert';

function App() {
  const [mode, setMode] = useState("white");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
      
  }






  const togglemode = () => {
    if (mode === "light") {
      setMode("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("the light mode enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#222761";
      document.body.style.color = "white";
      showAlert("the dark mode enabled","success");
    }
  };




  return(
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container my-5">
        <h1>Enter the text</h1>
        <First  showAlert={showAlert} mode={mode} togglemode={togglemode} />
      </div>
    
    </>
  );
}

export default App;