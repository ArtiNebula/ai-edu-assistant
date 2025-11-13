import React, { useState } from "react";
import axios from "axios";
import "./QAPage.css";

function QAPage() {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQA = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/qa", {
        context,
        question,
      });
      setAnswer(response.data.answer);
    } catch (error) {
      setAnswer("Error occurred while fetching answer.");
    }
    setLoading(false);
  };

  return (
    <div className="qa-container">
      <div className="qa-left">
        <h1 className="qa-title">AI Question Answering</h1>
        <p className="qa-subtitle">
          Enter a paragraph (context) and ask a question — our AI will extract the best answer!
        </p>

        <textarea
          className="qa-textarea"
          rows="5"
          placeholder="Enter context here..."
          value={context}
          onChange={(e) => setContext(e.target.value)}
        ></textarea>

        <input
          type="text"
          className="qa-input"
          placeholder="Enter your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button className="qa-btn" onClick={handleQA} disabled={loading}>
          {loading ? "Fetching Answer..." : "Get Answer"}
        </button>

        {answer && (
          <div className="qa-result">
            <h3>Answer:</h3>
            <p>{answer}</p>
          </div>
        )}
      </div>

      <div className="qa-right">
        <img src="/browser-stats.svg" alt="QA Illustration" className="qa-image" />
      </div>
    </div>
  );
}

export default QAPage;
