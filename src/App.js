import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import Knowledges from "../src/pages/Knowledges";
import NotFound from "../src/pages/NotFound";
import Portfolio from "../src/pages/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Knowledges />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

