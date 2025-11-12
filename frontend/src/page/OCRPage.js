import React, { useState } from 'react';
import axios from 'axios';

function OCRPage() {
  const [image, setImage] = useState(null);
  const [textResult, setTextResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleOCR = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('http://127.0.0.1:8000/ocr', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTextResult(response.data.extracted_text);
    } catch (error) {
      setTextResult('Error occurred while extracting text.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">OCR - Image to Text</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        onClick={handleOCR}
        disabled={loading}
      >
        {loading ? 'Extracting Text...' : 'Run OCR'}
      </button>
      {textResult && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Extracted Text:</h3>
          <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{textResult}</p>
        </div>
      )}
    </div>
  );
}

export default OCRPage;