import React, { useState } from "react";

export default function QuizGenerator() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("http://localhost:5000/api/generate-quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    setQuiz(data.quiz);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">AI Quiz Generator</h2>
      <input
        className="border p-2 w-1/2"
        placeholder="Enter a topic (e.g. Cloud Computing)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        className="bg-green-500 text-white p-2 ml-2 rounded"
        onClick={handleGenerate}
      >
        Generate
      </button>
      {quiz && (
        <div className="mt-4 p-4 bg-gray-100 rounded whitespace-pre-wrap">
          <strong>Quiz:</strong> {quiz}
        </div>
      )}
    </div>
  );
}
