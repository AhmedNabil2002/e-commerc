import React from "react";
import "./Hero.css";
import log from "../Assets/hand_icon.png"
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/hero_image.png"

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALES ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={log} alt="" />
          </div>
          <p>collections</p>
          <p>for every one</p>
        </div>
        <div className="hero-lates-btn">
          <div>Latest collections</div>
        <img src={arrowIcon} alt="" />
          
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default Hero;
