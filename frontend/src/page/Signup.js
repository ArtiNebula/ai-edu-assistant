import React, { useState } from "react";
import "./Signup.css";
import signupIllustration from "./signup-illustration.png"; // Save your image in src folder

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={signupIllustration} alt="Signup Illustration" />
      </div>
      <div className="signup-right">
        <h2>Please Fill out form to Register!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="register-btn">Register</button>
        </form>
        <p>
          Yes I have an account? /loginLogin
        </p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-telegram"></i>
        </div>
      </div>
    </div>
  );
};

export default Signup;