import './App.css'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Navbar from './components/Navbar'
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.hash = '#home';
  }, []);
  return (
    <>
      <Navbar />
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <AboutUs/> 
    </section>
    </>
  )
}

export default App
