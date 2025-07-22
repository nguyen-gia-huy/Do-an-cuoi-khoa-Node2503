import React from "react";
import { Link } from "react-router-dom"; // ❗ Dùng "react-router-dom", không phải "react-router"
import { Outlet } from "react-router-dom"; // ✅ Thêm dòng này

const AllProducts = () => {
  return (
    <div className="flex justify-center min-h-[60vh]">
      <div className="py-16 px-6 max-w-6xl w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Tất cả sản phẩm</h1>
        <p className="text-gray-600">Hiển thị danh sách sản phẩm ở đây...</p>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10"></section>

        <div className="bg-white p-4 shadow rounded-md hover:shadow-lg transition">
          <h4 className="text-lg font-semibold mb-2">NAM</h4>
          <div className="h-50 bg-gray-200 rounded mb-4"></div>
        </div>

        <div className="bg-white p-4 shadow rounded-md hover:shadow-lg transition">
          <h4 className="text-lg font-semibold mb-2">NỮ</h4>
          <div className="h-50 bg-gray-200 rounded mb-4"></div>
        </div>

        <div className="bg-white p-4 shadow rounded-md hover:shadow-lg transition">
          <h4 className="text-lg font-semibold mb-2">BALO</h4>
          <div className="h-50 bg-gray-200 rounded mb-4"></div>
        </div>

        {/* ✅ Đây là nơi hiển thị các route con */}
        <Outlet />
      </div>
    </div>
  );
};

export default AllProducts;
