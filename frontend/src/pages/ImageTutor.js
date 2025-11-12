import React, { useState } from "react";

export default function ImageTutor() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch("http://localhost:5000/api/analyze-image", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setResult(data.description);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Image Tutor</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        className="bg-purple-500 text-white p-2 ml-2 rounded"
        onClick={handleUpload}
      >
        Analyze
      </button>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}
