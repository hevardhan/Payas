import React from 'react'
import './css/Navbar.css'


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light mx-4">
          <a href="#home" class="d-flex align-items-center gap-3">
            <img src="/logo.png" width="50" height="50" id="responsive-logo" />
            <p className='h5 title-nav m-0 p-0'>Payas Technologies</p>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h1 class="offcanvas-title" id="offcanvasNavbarLabel">Payas Technologies</h1>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Hide"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1">
                <li class="nav-item h5 m-0 p-0">
                  <a class="nav-link ms-lg-3" href="#about">About</a>
                </li>
                <li class="nav-item h5 m-0 p-0">
                  <a class="nav-link ms-lg-3" href="#about">About</a>
                </li>
                <li class="nav-item h5 m-0 p-0">
                  <a class="nav-link ms-lg-3" href="#about">About</a>
                </li>
                <li class="nav-item h5 m-0 p-0">
                  <a class="nav-link ms-lg-3" href="#about">About</a>
                </li>
                <li class="nav-item h5 m-0 p-0">
                  <a class="nav-link ms-lg-3" href="#skills">Skills</a>
                </li>
                <li class="nav-item h5 m-0 p-0">
                  <a class="nav-link ms-lg-3" href="#projects">Projects</a>
                </li>
                <li class="nav-item h5 m-0 p-0">
                  <a class="nav-link ms-lg-3" href="#contact">Contact</a>
                </li>
                <li class="nav-item h5 m-0 p-0">
                  <a class="nav-link ms-lg-3" href="#contact">Contact</a>
                </li>
                </ul>
            </div>
          </div>
      </nav>
      )
}

export default Navbar
