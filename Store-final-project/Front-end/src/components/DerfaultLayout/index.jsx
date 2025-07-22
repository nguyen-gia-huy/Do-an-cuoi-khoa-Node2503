import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className="body-page">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default DefaultLayout;