import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState("null");

  const showAlert = (message, type) =>{
    setalert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setalert("null");
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
       {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
