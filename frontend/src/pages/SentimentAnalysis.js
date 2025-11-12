import React, { useState } from "react";
import "../App.css";

const SentimentAnalysis = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");

  const handleAnalyze = async () => {
    setSentiment("Sentiment: Positive 👍");
  };

  return (
    <div className="task-page">
      <h2>Sentiment Analysis</h2>
      <p>Analyze feedback or essay tone using AI sentiment detection.</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste student feedback or paragraph..."
      />
      <button onClick={handleAnalyze}>Analyze Sentiment</button>
      {sentiment && <div className="output-box">{sentiment}</div>}
    </div>
  );
};

export default SentimentAnalysis;
