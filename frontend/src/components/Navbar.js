

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo1.png" alt="Logo" />
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-btn login-btn">Login</Link>
        <Link to="/register" className="nav-btn register-btn">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;