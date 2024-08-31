import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   window.location.hash = '#home';
  // }, []);
  
  return (
    <>
      <Navbar />
      <section id="home" className="section-padding">
        <Home />
      </section>
      <section id="about" className="section-padding">
        <AboutUs /> 
      </section>
    </>
  )
}

export default App;
