import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import TextForms from './components/TextForms';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#262A56';
      showAlert("Dark Mode has been enabled", "Success: ");
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "Success: ");
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    // <BrowserRouter>
    //   <div className='App container' >
    //     {/* <Navigation title = "TextUtils" aboutText = "About Us" /> */}
    //     <Navigation title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    //     <Alert alert={alert} />
    //     <div className='container my-3'>
    //       <Routes>
    //         <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
    //           <Route exact path="/About" element={<About/>}></Route>
    //         </Route>
    //       </Routes>

    //     </div>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
  <div className='App container'>
    <Navigation title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className='container my-3'>
      <Routes>
        <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </div>
  </div>
</BrowserRouter>
  );
}

export default App;
