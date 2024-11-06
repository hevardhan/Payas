import React, { useState, useEffect } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-light mx-4 ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="d-flex align-items-center gap-3">
        <img
          src="/paypal-logo.png"
          width="30"
          height="30"
          id="responsive-logo"
        />
        <p className="h4 title-nav m-0 p-0">Payas Technologies</p>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasNavbarLabel">
            Payas Technologies
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Hide"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1">
            <li className="nav-item h6 m-0 p-0">
              <a className="nav-link ms-lg-3" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item h6 m-0 p-0">
              <a className="nav-link ms-lg-3" href="#about">
                About
              </a>
            </li>
            <li className="nav-item h6 m-0 p-0">
              <a className="nav-link ms-lg-3" href="#about">
                Courses
              </a>
            </li>
            <li className="nav-item h6 m-0 p-0">
              <a className="nav-link ms-lg-3" href="#about">
                E-Learning
              </a>
            </li>
            <li className="nav-item h6 m-0 p-0">
              <a className="nav-link ms-lg-3" href="#skills">
                Gallery
              </a>
            </li>
            <li className="nav-item h6 m-0 p-0">
              <a className="nav-link ms-lg-3" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item h6 m-0 p-0 ms-3">
              <button className="button">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
