import React from "react";
import { Home, ShoppingCart, Box, Users, LogOut, BarChart, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "HomePage", icon: <Home size={20} />, path: "/" },
  { label: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/staff/dashboard" },
  { label: "Add product", icon: <LayoutDashboard size={20} />, path: "/staff/add-product" },
  {
    label: "Quản lý đơn hàng",
    icon: <ShoppingCart size={20} />,
    path: "/staff/orders",
  },
  { label: "Sản phẩm", icon: <Box size={20} />, path: "/staff/products" },
  { label: "Khách hàng", icon: <Users size={20} />, path: "/staff/customers" },
  {
    label: "Thống kê",
    icon: <BarChart size={20} />,
    path: "/staff/statistics",
  },
];

const StaffSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="text-2xl font-bold px-6 py-4 border-b border-gray-700">
        Staff Panel
      </div>

      <nav className="flex-1 px-4 py-6">
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.label}
            className="flex items-center gap-3 px-4 py-2 mb-2 rounded hover:bg-gray-700 transition"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="border-t border-gray-700 p-4">
        <button className="flex items-center gap-2 text-red-400 hover:text-red-200">
          <LogOut size={20} />
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default StaffSidebar;
