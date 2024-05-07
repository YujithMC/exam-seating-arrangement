import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Student from './student'; 
import Class from './class';
import Exam from './exam'; 
import Navbar from './Navbar';
import WrittenBy from './written_by';
import WritesExamIn from './writes_exam_in';
import SittingArrangement from './SittingArrangement';
import Home from './home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/class" element={<Class />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/written_by" element={<WrittenBy />} />
        <Route path="/writes_exam_in" element={<WritesExamIn />} />
        <Route path="/sitting-arrangement" element={<SittingArrangement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
