import React from "react";
import "../App.css";

const TaskCard = ({ title, color }) => {
  return (
    <div className="task-card" style={{ background: color }}>
      <h3>{title}</h3>
    </div>
  );
};

export default TaskCard; 