import React from 'react'
import './css/Home.css';

const Home = () => {
  return (
    <div className='container main pt-2 align-items-center justify-content-center d-flex flex-column'>
      <div className="by-line text-center col-7" style={{marginBottom: '2vh'}}>
        <p className='display-5'>Your Gateway to IT Excellence and Career Growth</p>
      </div>
      <div className="home-buttons d-flex my-3 gap-5">
          <button className="right">
            Get Started
          </button>
          <button className="left">
            Contact Us
          </button>
      </div>
      <div className="home-img text-center col-lg-4 mt-2 col-sm-1 px-sm-2" style={{height: '50vh'}}>
        <img src="/home-img.png" alt="" style={{maxHeight: '100%', maxWidth: '100%', objectFit: 'contain'}}/>
      </div>
      <div className="home-footer d-flex align-items-center justify-content-center text-center mt-4 mx-5" style={{height: '20vh'}}>
        <div className="foot-left col-lg-4 col-sm-12">
          <p>Empowering IT professionals with top-tier training, ensuring clarity and expertise in every career step</p>
        </div>
        <div className="foot-center col-lg-4 col-sm-12">
          <p>Shaping the next generation of IT leaders with cutting-edge training and strategic placements for impactful careers</p>
        </div>
        <div className="foot-right col-lg-4 col-sm-12">
          <p>Connecting global IT talent with leading opportunities through innovative recruitment solutions</p>
        </div>
      </div>
    </div>
  )
}


export default Home