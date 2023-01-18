import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from './pages/Calculator';
import Notes from './pages/Notes';

const router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="./pages/Home.jsx" element={<Home />} />
            <Route path="./pages/Calculator.jsx" element={<Calculator />} />
            <Route path="./pages/Notes.jsx" element={<Notes />} />
        </Routes>
    </BrowserRouter>
  )
}

export default router
