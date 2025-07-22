import React, { useEffect, useState } from "react";

const BaloProducts = () => {
  const [products, setProducts] = useState([]);

  const sampleProducts = [
    {
      id: 1,
      name: "Balo Laptop Chống Nước",
      price: 450000,
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 2,
      name: "Balo Du Lịch Cao Cấp",
      price: 560000,
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      name: "Balo Thời Trang Nữ",
      price: 390000,
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      name: "Balo Thời Trang Nữ",
      price: 390000,
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      name: "Balo Thời Trang Nữ",
      price: 390000,
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      name: "Balo Thời Trang Nữ",
      price: 390000,
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      name: "Balo Thời Trang Nữ",
      price: 390000,
      image: "https://via.placeholder.com/300x400",
    },{
      id: 3,
      name: "Balo Thời Trang Nữ",
      price: 390000,
      image: "https://via.placeholder.com/300x400",
    },
  ];

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center uppercase">
        Sản phẩm Balo
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-red-500 text-base font-bold mb-3">
                {product.price.toLocaleString()} đ
              </p>
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaloProducts;
