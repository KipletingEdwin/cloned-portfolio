import "./HeroImageStyles.css";
import introImage from "../assets/intro-bg.jpg"

import React from 'react'
import { Link } from "react-router-dom";

function HeroImage() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImage} alt="introImage"/>
      </div>
      <div className="content">
        <p>I'M A FREELANCER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
      </div>
  )
}

export default HeroImage