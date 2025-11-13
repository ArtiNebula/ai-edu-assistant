import React, { useState } from "react";
import axios from "axios";
import "./OCRPage.css";

function OCRPage() {
  const [image, setImage] = useState(null);
  const [textResult, setTextResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleOCR = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post("http://127.0.0.1:8000/ocr", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTextResult(response.data.extracted_text);
    } catch (error) {
      setTextResult("Error occurred while extracting text.");
    }
    setLoading(false);
  };

  return (
    <div className="ocr-container">
      <div className="ocr-left">
        <h1 className="ocr-title">OCR - Image to Text</h1>
        <p className="ocr-subtitle">
          Upload an image containing text, and our AI will extract the text for you instantly.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="ocr-file-input"
        />

        <button
          className="ocr-btn"
          onClick={handleOCR}
          disabled={loading}
        >
          {loading ? "Extracting Text..." : "Run OCR"}
        </button>

        { textResult && (
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Extracted Text:</h3>
            <div className="extracted-box">
            <p className="whitespace-pre-wrap">{textResult}</p>
            </div>
        </div>
        )}
      </div>

      <div className="ocr-right">
        <img src="/ocr.svg" alt="OCR Illustration" className="ocr-image" />
      </div>
    </div>
  );
}

export default OCRPage;
