import React, { useState } from "react";
import "../App.css";

const ObjectDetection = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleDetect = async () => {
    setResult("Detected objects: Pen, Notebook, Laptop");
  };

  return (
    <div className="task-page">
      <h2>Object Detection</h2>
      <p>Detect educational objects inside classroom images.</p>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleDetect}>Detect Objects</button>
      {result && <div className="output-box">{result}</div>}
    </div>
  );
};

export default ObjectDetection;
