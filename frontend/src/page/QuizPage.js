import React, { useState } from 'react';
import axios from 'axios';

function QuizPage() {
  const [text, setText] = useState('');
  const [quiz, setQuiz] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuizGeneration = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/quiz', {
        text: text,
      });
      setQuiz(response.data.result);
    } catch (error) {
      setQuiz('Error occurred while generating quiz.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Quiz Generator</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="6"
        placeholder="Enter educational content or paragraph here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        onClick={handleQuizGeneration}
        disabled={loading}
      >
        {loading ? 'Generating Quiz...' : 'Generate Quiz'}
      </button>
      {quiz && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Generated Quiz:</h3>
          <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{quiz}</p>
        </div>
      )}
    </div>
  );
}

export default QuizPage;