import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
        
      <div className="hero-content">
        <div className="text">
          <h1>Build your next project faster</h1>
          <p>
            Welcome to SB UI Kit Pro, a toolkit for building beautiful web
            interfaces, created by the development team at Start Bootstrap.
          </p>
          <div className="signup-box">
            <input type="email" placeholder="Enter your email..." />
            <button className="btn-primary">Sign Up</button>
          </div>
          <p className="terms">
            By signing up, you agree to our{" "}
            <a href="/">terms of service</a>.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="/Hero_Illustration.svg"
            alt="Hero Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
