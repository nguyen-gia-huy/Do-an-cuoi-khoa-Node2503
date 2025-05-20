import React from 'react'

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Giao hàng nhanh</h3>
          <p>Chỉ trong 24h tại các thành phố lớn</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Hỗ trợ 24/7</h3>
          <p>Luôn sẵn sàng giải đáp mọi thắc mắc</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Đảm bảo chất lượng</h3>
          <p>Cam kết hoàn tiền nếu không hài lòng</p>
        </div>
      </div>
    </section>
  )
}

export default Features