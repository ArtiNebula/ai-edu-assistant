import React, { useState } from 'react';
import axios from 'axios';

function DiagramPage() {
  const [file, setFile] = useState(null);
  const [diagramResult, setDiagramResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDiagramGeneration = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/diagram', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setDiagramResult(response.data.result);
    } catch (error) {
      setDiagramResult('Error occurred while generating diagram.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Diagram Generator</h2>
      <input
        type="file"
        accept=".txt,.pdf,.docx"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        onClick={handleDiagramGeneration}
        disabled={loading}
      >
        {loading ? 'Generating Diagram...' : 'Generate Diagram'}
      </button>
      {diagramResult && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Generated Diagram:</h3>
          <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{diagramResult}</p>
        </div>
      )}
    </div>
  );
}

export default DiagramPage;