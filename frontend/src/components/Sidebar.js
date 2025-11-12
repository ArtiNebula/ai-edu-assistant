import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>EduMate AI</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/text-generation">Text Generation</Link></li>
        <li><Link to="/question-answer">Q&A</Link></li>
        <li><Link to="/image-classification">Image Classification</Link></li>
        <li><Link to="/object-detection">Object Detection</Link></li>
        <li><Link to="/sentiment-analysis">Sentiment Analysis</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar; 