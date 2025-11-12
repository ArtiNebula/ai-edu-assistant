import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container signup-container">
      {/* Left section */}
      <div className="left-section">
        {/* <h1 className="brand">Borcelle.</h1>
        <nav className="nav-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT</a>
          <a href="#" className="active">
            SIGN UP
          </a>
        </nav>
        <div className="welcome-text">Welcome!</div> */}
      </div>

      {/* Right section */}
      <div className="right-section">
        <form className="signup-form">
          <h2>Sign up</h2>

          <label>Full Name</label>
          <input type="text" placeholder="Daniel Gallego" />

          <label>Email Address</label>
          <input type="email" placeholder="hello@reallygreatsite.com" />

          <div className="password-fields">
            <div>
              <label>Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div>
              <label>Confirm Password</label>
              <input type="password" placeholder="********" />
            </div>
          </div>

          <button type="submit" className="create-btn">
            Create Account
          </button>
          <div className="divider">Or</div>
          <button type="button" className="login-btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
