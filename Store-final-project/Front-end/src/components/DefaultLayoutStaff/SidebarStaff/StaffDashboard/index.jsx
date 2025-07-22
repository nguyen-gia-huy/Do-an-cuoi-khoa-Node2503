import React from "react";
import { ShoppingCart, DollarSign, Box, Users } from "lucide-react";

const summaryData = [
  {
    title: "Tổng đơn hàng",
    icon: <ShoppingCart size={24} />,
    value: 1200,
    bg: "bg-blue-500",
  },
  {
    title: "Tổng doanh thu",
    icon: <DollarSign size={24} />,
    value: "560,000,000 đ",
    bg: "bg-green-500",
  },
  {
    title: "Sản phẩm còn hàng",
    icon: <Box size={24} />,
    value: 340,
    bg: "bg-yellow-500",
  },
  {
    title: "Khách hàng",
    icon: <Users size={24} />,
    value: 285,
    bg: "bg-purple-500",
  },
];

const StaffDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Trang tổng quan</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow p-5 text-white flex items-center justify-between ${item.bg}`}
          >
            <div>
              <h2 className="text-sm font-medium">{item.title}</h2>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
            <div className="opacity-80">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Optional: More detailed chart or table here */}
      {/* <div className="mt-10"> */}
      {/*   <ChartComponent /> */}
      {/* </div> */}
    </div>
  );
};

export default StaffDashboard;
