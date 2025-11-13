import React, { useState } from "react";
import axios from "axios";
import "./DiagramPage.css";

function DiagramPage() {
  const [image, setImage] = useState(null);
  const [diagramResult, setDiagramResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDiagramGeneration = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post("http://127.0.0.1:8000/diagram", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setDiagramResult(response.data.predicted_label);
    } catch (error) {
      setDiagramResult("Error occurred while generating diagram.");
    }
    setLoading(false);
  };

  return (
    <div className="diagram-container">
      <div className="diagram-left">
        <h2 className="diagram-title">Diagram Generator</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
        />
        <button
          className="generate-btn"
          onClick={handleDiagramGeneration}
          disabled={loading}
        >
          {loading ? "Generating Diagram..." : "Generate Diagram"}
        </button>

        {diagramResult && (
          <div className="result-box">
            <h3 className="result-title">Generated Diagram:</h3>
            <div className="scroll-box">
              <p className="whitespace-pre-wrap">{diagramResult}</p>
            </div>
          </div>
        )}
      </div>

      <div className="diagram-right">
        <img src="/statistics.svg" alt="Diagram Illustration" className="diagram-image" />
      </div>
    </div>
  );
}

export default DiagramPage;

