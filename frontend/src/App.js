
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Signup from './page/Signup';
import SummarizePage from './page/SummarizePage';
import OCRPage from './page/OCRPage';
import QAPage from './page/QAPage';
import QuizPage from './page/QuizPage';
import DiagramPage from './page/DiagramPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/summarize" element={<SummarizePage />} />
        <Route path="/ocr" element={<OCRPage />} />
        <Route path="/fraud" element={<QAPage />} />
        <Route path="/sentiment" element={<QuizPage />} />
        <Route path="/classify" element={<DiagramPage />} />
      </Routes>
    </Router>
  );
}

export default App
