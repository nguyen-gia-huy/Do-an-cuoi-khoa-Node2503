import React from 'react'

const Contact = () => {
  return (
      <section id="contact" className="py-16 bg-gray-100 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Liên hệ với chúng tôi</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Tên của bạn"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <textarea
          rows="4"
          placeholder="Lời nhắn"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Gửi
        </button>
      </form>
    </section>
  )
}

export default Contact