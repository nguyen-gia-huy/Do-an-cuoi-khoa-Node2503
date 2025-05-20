import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className="body-page">
        <Outlet /> {/* This will render the matched child route */}
      </div>
      <Footer/>
    </div>
  );
};

export default DefaultLayout;