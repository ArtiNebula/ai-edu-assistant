// import React, { useState } from "react";
// import "../App.css";

// const TextGeneration = () => {
//   const [prompt, setPrompt] = useState("");
//   const [result, setResult] = useState("");

//   const handleGenerate = async () => {
//     // Placeholder for API call
//     setResult("Generated text for: " + prompt);
//   };

//   return (
//     <div className="task-page">
//       <h2>Text Generation</h2>
//       <p>Generate educational content, summaries, or notes using AI.</p>
//       <textarea
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder="Enter a topic or question..."
//       />
//       <button onClick={handleGenerate}>Generate Text</button>
//       {result && <div className="output-box">{result}</div>}
//     </div>
//   );
// };

// export default TextGeneration;

import React from "react";
import "./TextGeneration.css";

const TextGeneration = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        {/* /images/folder.png */}
        <div className="hero-text">
          <h2>Text Generation</h2>
          <p>
            Generate creative and concise text for your educational content.
            Upload your topic and let AI assist you.
          </p>
        </div>
      </div>

      <div className="form-section">
        <textarea placeholder="Enter your topic here..." className="input-box"></textarea>
        <button className="generate-btn">Generate Text</button>
      </div>

      <div className="output-section">
        <h3>Generated Output:</h3>
        <p className="output-text">Your AI-generated text will appear here...</p>
      </div>
    </div>
  );
};

export default TextGeneration;
