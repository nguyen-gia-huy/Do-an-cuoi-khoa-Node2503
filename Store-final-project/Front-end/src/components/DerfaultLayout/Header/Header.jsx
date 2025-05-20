import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
   <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to={"/"} className="text-2xl font-bold text-blue-600">ShopSmart</Link>
        <nav className="space-x-6 hidden md:block">
          <a href="#features" className="hover:text-blue-600">Tính năng</a>
          <a href="#products" className="hover:text-blue-600">Sản phẩm</a>
          <a href="#about" className="hover:text-blue-600">Về chúng tôi</a>
          <a href="#contact" className="hover:text-blue-600">Liên hệ</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Đăng nhập
        </button>
      </div>
    </header>
  )
}

export default Header