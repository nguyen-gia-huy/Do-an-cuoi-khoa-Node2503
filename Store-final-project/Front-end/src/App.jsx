import React from "react";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";

import AllProducts from "./pages/AllProducts";
import { Route, Routes } from "react-router";
import DefaultLayout from "./components/DerfaultLayout";
import Home from "./components/DerfaultLayout/Home/Home";

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
        <Route path='' element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
