import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
