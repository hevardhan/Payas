import React from 'react'
import './css/Home.css';

const Home = () => {
  return (
    <div className='container main pt-2 align-items-center justify-content-center d-flex flex-column'>

      <div className="by-line text-center col-7">
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
    </div>
  )
}


export default Home