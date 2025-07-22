// FemaleProducts.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const productData = {
  "Áo thun": [
    {
      id: 1,
      name: "Áo thun nữ basic",
      price: 270000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+Nu+1",
    },
    {
      id: 2,
      name: "Áo thun form rộng nữ",
      price: 290000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+Nu+2",
    },
    {
      id: 3,
      name: "Áo thun nữ cotton",
      price: 310000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+Nu+3",
    },
    {
      id: 4,
      name: "Áo thun nữ graphic",
      price: 330000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+Nu+4",
    },
    {
      id: 5,
      name: "Áo thun nữ cổ tim",
      price: 295000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+Nu+5",
    },
    {
      id: 6,
      name: "Áo thun nữ tay dài",
      price: 320000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+Nu+6",
    },
    {
      id: 7,
      name: "Áo thun oversize nữ",
      price: 340000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+Nu+7",
    },
    {
      id: 8,
      name: "Áo thun in hình nữ",
      price: 360000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+Nu+8",
    },
  ],
  Váy: [
    {
      id: 9,
      name: "Váy xòe hoa nhí",
      price: 450000,
      image: "https://via.placeholder.com/300x400?text=Vay+1",
    },
    {
      id: 10,
      name: "Váy body dự tiệc",
      price: 620000,
      image: "https://via.placeholder.com/300x400?text=Vay+2",
    },
    {
      id: 11,
      name: "Váy maxi đi biển",
      price: 480000,
      image: "https://via.placeholder.com/300x400?text=Vay+3",
    },
    {
      id: 12,
      name: "Váy chữ A công sở",
      price: 520000,
      image: "https://via.placeholder.com/300x400?text=Vay+4",
    },
    {
      id: 13,
      name: "Váy denim nữ",
      price: 390000,
      image: "https://via.placeholder.com/300x400?text=Vay+5",
    },
    {
      id: 14,
      name: "Váy hoa vintage",
      price: 530000,
      image: "https://via.placeholder.com/300x400?text=Vay+6",
    },
    {
      id: 15,
      name: "Váy công chúa tay bồng",
      price: 570000,
      image: "https://via.placeholder.com/300x400?text=Vay+7",
    },
    {
      id: 16,
      name: "Váy 2 dây nữ tính",
      price: 430000,
      image: "https://via.placeholder.com/300x400?text=Vay+8",
    },
  ],
  
  "Áo hoodie": [
    {
      id: 24,
      name: "Hoodie nữ trơn basic",
      price: 550000,
      image: "https://via.placeholder.com/300x400?text=Hoodie+1",
    },
    {
      id: 25,
      name: "Hoodie form rộng nữ",
      price: 580000,
      image: "https://via.placeholder.com/300x400?text=Hoodie+2",
    },
    {
      id: 26,
      name: "Hoodie có mũ nữ",
      price: 600000,
      image: "https://via.placeholder.com/300x400?text=Hoodie+3",
    },
    {
      id: 27,
      name: "Hoodie in hình cute",
      price: 620000,
      image: "https://via.placeholder.com/300x400?text=Hoodie+4",
    },
    {
      id: 28,
      name: "Hoodie nỉ ấm mùa đông",
      price: 650000,
      image: "https://via.placeholder.com/300x400?text=Hoodie+5",
    },
    {
      id: 29,
      name: "Hoodie phong cách Nhật",
      price: 670000,
      image: "https://via.placeholder.com/300x400?text=Hoodie+6",
    },
    {
      id: 30,
      name: "Hoodie nữ pastel",
      price: 610000,
      image: "https://via.placeholder.com/300x400?text=Hoodie+7",
    },
  ],
};

const FemaleProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Sản phẩm dành cho Nữ
      </h1>

      {Object.entries(productData).map(([category, products]) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-base font-medium">{product.name}</h3>
                    <p className="text-gray-700 mt-1 text-sm">
                      {product.price.toLocaleString()}₫
                    </p>
                    <button className="mt-3 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 text-sm">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default FemaleProducts;
