import React from "react";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light mx-4">
      <a href="#home" class="d-flex align-items-center gap-3">
        <img
          src="/paypal-logo.png"
          width="30"
          height="30"
          id="responsive-logo"
        />
        <p className="h4 title-nav m-0 p-0">Payas Technologies</p>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h1 class="offcanvas-title" id="offcanvasNavbarLabel">
            Payas Technologies
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Hide"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1">
            <li class="nav-item h6 m-0 p-0">
              <a class="nav-link ms-lg-3" href="#about">
                Home
              </a>
            </li>
            <li class="nav-item h6 m-0 p-0">
              <a class="nav-link ms-lg-3" href="#about">
                About
              </a>
            </li>
            <li class="nav-item h6 m-0 p-0">
              <a class="nav-link ms-lg-3" href="#about">
                Courses
              </a>
            </li>
            <li class="nav-item h6 m-0 p-0">
              <a class="nav-link ms-lg-3" href="#about">
                E-Learning
              </a>
            </li>
            <li class="nav-item h6 m-0 p-0">
              <a class="nav-link ms-lg-3" href="#skills">
                Gallery
              </a>
            </li>
            <li class="nav-item h6 m-0 p-0">
              <a class="nav-link ms-lg-3" href="#contact">
                Contact
              </a>
            </li>
            <li class="nav-item h6 m-0 p-0 ms-3">
              <button class="button">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
