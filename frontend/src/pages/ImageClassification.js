import React, { useState } from "react";
import "../App.css";

const ImageClassification = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleClassify = async () => {
    setResult("Predicted class: Book");
  };

  return (
    <div className="task-page">
      <h2>Image Classification</h2>
      <p>Upload an image to identify educational objects like books or blackboards.</p>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleClassify}>Classify Image</button>
      {result && <div className="output-box">{result}</div>}
    </div>
  );
};

export default ImageClassification;
