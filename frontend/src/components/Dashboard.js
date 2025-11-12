import React from "react";
import { Link } from "react-router-dom";
import TaskCard from "./TaskCard"; 
import "../App.css";

const Dashboard = () => {
  const tasks = [
    { title: "Text Generation", path: "/text-generation", color: "#4B9CD3" },
    { title: "Question Answering", path: "/question-answer", color: "#6A5ACD" },
    { title: "Image Classification", path: "/image-classification", color: "#48C774" },
    { title: "Object Detection", path: "/object-detection", color: "#FFB347" },
    { title: "Sentiment Analysis", path: "/sentiment-analysis", color: "#FF6B6B" },
  ];

  return (
    <div className="dashboard">
      <h1>Welcome to EduMate AI</h1>
      <p>Choose a task to explore AI-powered educational tools.</p>
      <div className="task-grid">
        {tasks.map((task, index) => (
          <Link key={index} to={task.path}>
            <TaskCard title={task.title} color={task.color} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 
