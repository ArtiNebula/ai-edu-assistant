import React, { useState } from "react";

export default function VoiceTutor() {
  const [transcript, setTranscript] = useState("");
  const [answer, setAnswer] = useState("");

  const startRecording = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event) =>
      setTranscript(event.results[0][0].transcript);
    recognition.start();
  };

  const handleAsk = async () => {
    const res = await fetch("http://localhost:5000/api/voice-ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: transcript }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Voice Tutor</h2>
      <button
        className="bg-blue-600 text-white p-2 rounded"
        onClick={startRecording}
      >
        🎙 Start Speaking
      </button>
      {transcript && (
        <div className="mt-4">
          <strong>Your Question:</strong> {transcript}
          <button
            className="bg-green-500 text-white p-2 ml-2 rounded"
            onClick={handleAsk}
          >
            Ask AI
          </button>
        </div>
      )}
      {answer && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  );
}
