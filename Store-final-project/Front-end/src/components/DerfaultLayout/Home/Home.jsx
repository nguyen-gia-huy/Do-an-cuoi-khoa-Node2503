import React from "react";
import AllProducts from "../../../pages/AllProducts";
import Contact from "../../Contact";
import About from "../../About";
import Products from "../../Products";
import Features from "../../Features";
import Hero from "../../Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
      <About />
      <Contact /> 
    </div>
  );
};

export default Home;
