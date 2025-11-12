import React, { useState } from "react";
import "../App.css";

const QuestionAnswer = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAnswer = async () => {
    // Placeholder for API call
    setAnswer("AI Answer: This is how AI would respond to '" + question + "'");
  };

  return (
    <div className="task-page">
      <h2>Question Answering</h2>
      <p>Ask any educational question and get instant answers.</p>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question..."
      />
      <button onClick={handleAnswer}>Get Answer</button>
      {answer && <div className="output-box">{answer}</div>}
    </div>
  );
};

export default QuestionAnswer;
