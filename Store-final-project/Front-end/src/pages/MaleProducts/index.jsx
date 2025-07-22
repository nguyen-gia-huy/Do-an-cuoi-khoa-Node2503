import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const productData = {
  "Áo thun": [
    {
      id: 1,
      name: "Áo thun nam basic",
      price: 290000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+1",
    },
    {
      id: 2,
      name: "Áo thun nam form rộng",
      price: 310000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+2",
    },
    {
      id: 3,
      name: "Áo thun cotton 100%",
      price: 330000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+3",
    },
    {
      id: 4,
      name: "Áo thun graphic",
      price: 360000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+4",
    },
    {
      id: 15,
      name: "Áo thun thể thao",
      price: 340000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+5",
    },
    {
      id: 16,
      name: "Áo thun cổ tròn",
      price: 320000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+6",
    },
    {
      id: 17,
      name: "Áo thun cổ tim",
      price: 335000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+7",
    },
    {
      id: 18,
      name: "Áo thun oversize",
      price: 355000,
      image: "https://via.placeholder.com/300x400?text=Ao+Thun+8",
    },
  ],
  Quần: [
    {
      id: 5,
      name: "Quần jean slim fit",
      price: 520000,
      image: "https://via.placeholder.com/300x400?text=Quan+Jean+1",
    },
    {
      id: 6,
      name: "Quần tây công sở",
      price: 490000,
      image: "https://via.placeholder.com/300x400?text=Quan+Tay+2",
    },
    {
      id: 7,
      name: "Quần jogger thể thao",
      price: 420000,
      image: "https://via.placeholder.com/300x400?text=Quan+Jogger",
    },
    {
      id: 8,
      name: "Quần short kaki",
      price: 310000,
      image: "https://via.placeholder.com/300x400?text=Quan+Short",
    },
    {
      id: 19,
      name: "Quần jean rách",
      price: 540000,
      image: "https://via.placeholder.com/300x400?text=Quan+Jean+2",
    },
    {
      id: 20,
      name: "Quần short thể thao",
      price: 295000,
      image: "https://via.placeholder.com/300x400?text=Quan+Short+2",
    },
    {
      id: 21,
      name: "Quần kaki ống đứng",
      price: 470000,
      image: "https://via.placeholder.com/300x400?text=Quan+Kaki",
    },
    {
      id: 22,
      name: "Quần jogger nỉ",
      price: 410000,
      image: "https://via.placeholder.com/300x400?text=Quan+Jogger+2",
    },
  ],
 
  "Áo bomber": [
    {
      id: 12,
      name: "Bomber kaki phối da",
      price: 850000,
      image: "https://via.placeholder.com/300x400?text=Bomber+1",
    },
    {
      id: 13,
      name: "Bomber dù chống nước",
      price: 920000,
      image: "https://via.placeholder.com/300x400?text=Bomber+2",
    },
    {
      id: 14,
      name: "Bomber thêu logo",
      price: 890000,
      image: "https://via.placeholder.com/300x400?text=Bomber+3",
    },
    {
      id: 27,
      name: "Bomber classic",
      price: 870000,
      image: "https://via.placeholder.com/300x400?text=Bomber+4",
    },
    {
      id: 28,
      name: "Bomber phối màu",
      price: 910000,
      image: "https://via.placeholder.com/300x400?text=Bomber+5",
    },
    {
      id: 29,
      name: "Bomber lót lông",
      price: 950000,
      image: "https://via.placeholder.com/300x400?text=Bomber+6",
    },
    {
      id: 30,
      name: "Bomber basic",
      price: 800000,
      image: "https://via.placeholder.com/300x400?text=Bomber+7",
    },
  ],
};

const MaleProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Sản phẩm dành cho Nam
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
                    <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm">
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

export default MaleProducts;
