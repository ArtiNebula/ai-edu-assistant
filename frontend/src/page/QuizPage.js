import React, { useState } from "react";
import axios from "axios";
import "./QuizPage.css";
// import quizSvg from "../assets/quiz.svg"; // 🧩 your SVG path here

function QuizPage() {
  const [text, setText] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuizGeneration = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/quiz", { text });
      setQuiz(response.data.quiz);
    } catch (error) {
      setQuiz("Error occurred while generating quiz.");
    }
    setLoading(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-left">
        <h1 className="quiz-title">AI Quiz Generator</h1>
        <p className="quiz-subtitle">
          Enter a paragraph or educational content and generate a quiz instantly!
        </p>

        <textarea
          className="quiz-textarea"
          rows="6"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button
          className="quiz-btn"
          onClick={handleQuizGeneration}
          disabled={loading}
        >
          {loading ? "Generating Quiz..." : "Generate Quiz"}
        </button>

        {quiz && (
          <div className="quiz-result">
            <h3>Generated Quiz:</h3>
            <p>{quiz}</p>
          </div>
        )}
      </div>

      <div className="quiz-right">
        <img src="/at-work.svg" alt="Quiz Illustration" className="quiz-image" />
      </div>
    </div>
  );
}

export default QuizPage;
