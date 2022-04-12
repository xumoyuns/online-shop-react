import React from "react";
import "./Hero.css";
import iphone from "../Assets/Images/iphone13.png";

const Hero = () => {
  return (
    <>
      <div className="site-main container">
        <section className="hero">
          <div className="hero-box">
            <h1 className="hero-heading">Аксессуары для Iphone 13 Pro Max</h1>

            <div className="image-wrapper">
              <img className="hero-img" src={iphone} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
