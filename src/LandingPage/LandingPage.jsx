import React from 'react'
import LandingImg from "../Assets/lens-1418954.png"
import "./LandingPage.css"
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="landing-page-container">
        <div className="img-cont">
          <img src={LandingImg} alt="landing-img" />
        </div>
        <div className="right-side">
          <div><h1 className='team'>10x TEAM</h1></div>
          <Link to="/posts">
          <div className="enter-btn-cont"><button>Enter</button></div>
          </Link>
        </div>
    </div>
  )
}

export default LandingPage