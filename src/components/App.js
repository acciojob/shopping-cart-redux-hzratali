
import React from "react";
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import './../styles/App.css';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App
