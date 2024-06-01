
import Navbar from './components/Navbar.js'
import Textform from './components/Textform'
import React, {useState} from 'react'
import './App.css';
import About from './components/About.js';
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert("Dark Mode has been enabled","success")
      document.title='TextUtils-Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success")
      document.title='TextUtils-Light Mode'
    }
    
  }
  return (
    <>
    <Router>
      <Navbar title="NixBlaze" home="Main" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<Textform mode={mode} showAlert={showAlert} heading='Try TextUtils-word counter, character counter, remove extra spaces'/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
