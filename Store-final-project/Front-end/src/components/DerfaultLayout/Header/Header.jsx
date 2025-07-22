import React, { useState } from "react";
import { Link } from "react-router";
import { Input } from "antd";
import { Button, Modal } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import LoginPage from "../../../pages/LoginAndRegister/Login/login";
import RegisterPage from "../../../pages/LoginAndRegister/Register/register";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to={"/"}
          style={{ textDecoration: "none" }}
          className="text-2xl font-bold text-blue-600 "
        >
          ShopSmart
        </Link>
        <nav className="space-x-6 hidden md:block">
          {/* <a href="#features" className="hover:text-blue-600">Tính năng</a>
          <a href="#products" className="hover:text-blue-600">Sản phẩm</a>
          <a href="#about" className="hover:text-blue-600">Về chúng tôi</a>
          <a href="#contact" className="hover:text-blue-600">Liên hệ</a> */}
          <Link
            to={"male"}
            style={{ textDecoration: "none" }}
            className="hover:text-blue-600 "
          >
            Nam
          </Link>
          <Link
            to={"female"}
            style={{ textDecoration: "none" }}
            className="hover:text-blue-600"
          >
            Nữ
          </Link>
          <Link
            to={"accessories"}
            style={{ textDecoration: "none" }}
            className="hover:text-blue-600"
          >
            Balo
          </Link>
          <Link
            to={"/check-order"}
            style={{ textDecoration: "none" }}
            className="hover:text-blue-600"
          >
            Kiểm tra đơn hàng
          </Link>
          <Input
            placeholder="Tìm kiếm"
            className="border border-gray-300 rounded-md px-4 py-2"
            style={{ width: 300 }}
          />
          <>
            <Button
              onClick={showModal}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 rounded-md text-black"
            >
              <FaShoppingCart className="text-lg" />
              Giỏ hàng
            </Button>

            <Modal
              title={null}
              open={isModalOpen}
              footer={null}
              onCancel={handleCancel}
              onOk={handleOk}
              width={400}
              closable={false}
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">GIỎ HÀNG</h2>
                <div className="border-t pt-6 pb-4">
                  <FaShoppingCart className="mx-auto text-4xl text-gray-500 mb-2" />
                  <p className="text-gray-500">Hiện chưa có sản phẩm</p>
                </div>
                <div className="border-t pt-4 pb-2 flex justify-between px-4 text-lg font-medium">
                  <span>TỔNG TIỀN:</span>
                  <span className="text-red-600 font-bold">0₫</span>
                </div>
                <div className="px-4">
                  <Link to="/cart">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full py-2 rounded mt-2">
                      XEM GIỎ HÀNG
                    </button>
                  </Link>
                </div>
              </div>
            </Modal>
          </>
        </nav>
        <div className="flex justify-between items-center w-[15%]">
          <LoginPage />
          <RegisterPage />
        </div>
      </div>
    </header>
  );
};

export default Header;
