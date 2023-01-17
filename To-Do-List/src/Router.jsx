import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/notes" element={<Notes />} />
        </Routes>
    </BrowserRouter>
  )
}

export default router
