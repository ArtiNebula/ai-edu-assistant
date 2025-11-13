
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './page/Login';
// import Signup from './page/Signup';
// import SummarizePage from './page/SummarizePage';
// import OCRPage from './page/OCRPage';
// import QAPage from './page/QAPage';
// import QuizPage from './page/QuizPage';
// import DiagramPage from './page/DiagramPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/summarize" element={<SummarizePage />} />
//         <Route path="/ocr" element={<OCRPage />} />
//         <Route path="/fraud" element={<QAPage />} />
//         <Route path="/sentiment" element={<QuizPage />} />
//         <Route path="/classify" element={<DiagramPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HeroSection";
import SummarizePage from "./page/SummarizePage";
import QuizPage from "./page/QuizPage";
import QAPage from "./page/QAPage";
import OCRPage from "./page/OCRPage";
// import DigramPage from "./page/DigramPage";
import "./App.css";
import DiagramPage from "./page/DiagramPage";

const App = () => {
  return (
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summarize" element={<SummarizePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/qa" element={<QAPage />} />
        <Route path="/ocr" element={<OCRPage />} />
        <Route path="/diagram" element={<DiagramPage />} />
      </Routes>
    </Router>
  );
};

export default App;
