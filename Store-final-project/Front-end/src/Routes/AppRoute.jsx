import React from "react";
import { Route, Routes } from "react-router";
import DefaultLayout from "../components/DerfaultLayout";
import Home from "../components/DerfaultLayout/Home/Home";
import Hero from "../components/DerfaultLayout/Home/Hero";
import Features from "../components/DerfaultLayout/Home/Features";
import Products from "../components/DerfaultLayout/Home/Products";
import About from "../components/DerfaultLayout/Home/About";
import Contact from "../components/DerfaultLayout/Home/Contact";
import AllProducts from "../pages/AllProducts/AllProducts";
import MaleProducts from "../pages/MaleProducts";
import FemaleProducts from "../pages/FemaleProducts";
import BaloProducts from "../pages/BaloProducts";
import CheckOrders from "../pages/CheckOrders";

import DefaultLayoutStaff from "../components/DefaultLayoutStaff";
import StaffDashboard from "../components/DefaultLayoutStaff/SidebarStaff/StaffDashboard";
import AddProductPage from "../components/DefaultLayoutStaff/SidebarStaff/StaffAddProductPage";
const AppRoute = () => {
  return (
    <div className="font-sans text-gray-800">
      <Routes>
       
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="male" element={<MaleProducts />} />
          <Route path="female" element={<FemaleProducts />} />
          <Route path="accessories" element={<BaloProducts />} />
          <Route path="check-order" element={<CheckOrders />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/staff" element={<DefaultLayoutStaff/>}>
            <Route path="dashboard" element={<StaffDashboard/>} />
            <Route path="orders" element={<div>Manage Orders</div>} />
            <Route path="add-product" element={<AddProductPage/>} />
            <Route path="products" element={<div>Manage Products</div>} />
            <Route path="customers" element={<div>Manage Customers</div>} />
            <Route path="statistics" element={<div>Statistics</div>} />
        </Route>
        <Route path="/admin" element={<div>Admin Page</div>} />
      </Routes>
    </div>
  );
};

export default AppRoute;
