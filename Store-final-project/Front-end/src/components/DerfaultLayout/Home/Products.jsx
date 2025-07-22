import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section id="products" className="py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Sản phẩm nổi bật
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-4 shadow rounded-md hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h4 className="text-lg font-semibold mb-2">Áo thun </h4>
            <p className="text-gray-600 mb-2">Mô tả ngắn về sản phẩm.</p>
            <span className="font-bold text-blue-600">499.000đ</span>
          </div>
          <div className="bg-white p-4 shadow rounded-md hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h4 className="text-lg font-semibold mb-2">Quần dài</h4>
            <p className="text-gray-600 mb-2">Mô tả ngắn về sản phẩm.</p>
            <span className="font-bold text-blue-600">499.000đ</span>
          </div>
          <div className="bg-white p-4 shadow rounded-md hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h4 className="text-lg font-semibold mb-2">Balo </h4>
            <p className="text-gray-600 mb-2">Mô tả ngắn về sản phẩm.</p>
            <span className="font-bold text-blue-600">499.000đ</span>
          </div>
        </div>

        {/* Nút xem thêm */}
        <div className="text-center mt-10">
          <Link
            to="/all-products"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Xem thêm sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
