import React from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-container">
      {/* Left Side - Form */}
      <div className="register-left" style={{"background": "#fef2f2"}}>
        <h1>Nice to meet you!</h1>
        <p>Let’s Sign In Your Account</p>
        <form className="register-form">
          <div className="form-row">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Nick Name" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone Number" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-row">
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button type="submit" className="sign-btn">Sign In</button>
          <p className="login-link">
            Already have an account? /loginLogin Now
          </p>
        </form>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Cookies Settings</span>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="register-right">
        <img src="/registraion.png" alt="Login" />
      </div>
    </div>
  );
};

export default RegisterPage;