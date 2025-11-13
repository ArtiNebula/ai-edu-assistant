import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">AI EDU ASSISTANT</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/summarize">Summarize</Link>
          <Link to="/qa">Question-Answer</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/ocr">OCR</Link>
          <Link to="/diagram">Diagram Classification</Link>

           {/* <a href="/">Summarization</a>
          <a href="/">Question-Answer</a>
          <a href="/">Quiz</a>
          <a href="/">OCR</a>
          <a href="/">Digram Classification</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


