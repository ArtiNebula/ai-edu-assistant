import React, { useState } from 'react';
import axios from 'axios';

function QAPage() {
  const [context, setContext] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQA = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/qa', {
        context: context,
        question: question,
      });
      setAnswer(response.data.result);
    } catch (error) {
      setAnswer('Error occurred while fetching answer.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question Answering</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="4"
        placeholder="Enter context here..."
        value={context}
        onChange={(e) => setContext(e.target.value)}
      ></textarea>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handleQA}
        disabled={loading}
      >
        {loading ? 'Fetching Answer...' : 'Get Answer'}
      </button>
      {answer && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Answer:</h3>
          <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default QAPage;