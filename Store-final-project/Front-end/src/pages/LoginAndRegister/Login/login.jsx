import axios from "axios";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const LoginPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/v1/login", form);
      console.log(form);
      alert("Đăng nhập thành công");
      handleClose(); // Đóng modal sau khi đăng nhập thành công
    } catch (err) {
      console.error(err);
      alert("Đăng nhập thất bại, vui lòng thử lại sau");
    }
  };
  return (
    <>
      <Button variant="primary " onClick={handleShow}>
        Đăng nhập
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Nhập email của bạn"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mật khẩu
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Nhập mật khẩu của bạn"
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleClose}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Đăng Nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginPage;
