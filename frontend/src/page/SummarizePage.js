import React, { useState } from 'react';
import axios from 'axios';

function SummarizePage() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/summarize', {
        text: text,
      });
      setSummary(response.data.summary);
    } catch (error) {
      setSummary('Error occurred while summarizing.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Document Summarization</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="8"
        placeholder="Paste your lecture notes or long paragraph here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleSummarize}
        disabled={loading}
      >
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>
      {summary && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Summary:</h3>
          <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{summary}</p>
        </div>
      )}
    </div>
  );
}

export default SummarizePage;