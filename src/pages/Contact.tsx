
import Nav from "./Nav";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="pt-[100px] bg-gradient-to-b from-gray-950 to-gray-900 text-white min-h-screen">
        {/* Tiêu đề */}
        <section className="text-center px-6 sm:px-20 py-16">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-cyan-400 mb-6">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p data-aos="zoom-in-up" className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông
            tin, đội ngũ{" "}
            <span className="text-cyan-400 font-semibold">
              Hung Thao Sport 2
            </span>{" "}
            sẽ liên hệ với bạn trong thời gian sớm nhất.
          </p>
        </section>

        {/* Grid chia 2 cột: form + thông tin liên hệ */}
        <section className="grid md:grid-cols-2 gap-10 px-6 sm:px-20 py-10">
          {/* Form liên hệ */}
          <div data-aos="flip-left" className="bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Nội dung tin nhắn..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg transition-all duration-300"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-6">
            <h3 data-aos="fade-up" className="text-2xl font-semibold text-cyan-400 mb-2">
              Thông Tin Liên Hệ
            </h3>
            <p data-aos="zoom-in-up" className="text-gray-300">
              📍 <span className="text-cyan-400 font-medium">Địa chỉ:</span>
              4122 đường ĐT 743, khu phố Nội Hóa 2. Phường Bình An, Thành Phố Dĩ An, tỉnh Bình Dương
            </p>
            <p data-aos="zoom-in-up" className="text-gray-300">
              📞 <span className="text-cyan-400 font-medium">Hotline:</span>
              0937336258
            </p>
            <p data-aos="zoom-in-up" className="text-gray-300">
              📧 <span className="text-cyan-400 font-medium">Email:</span>
              phamdinhtien1969s@gmail.com
            </p>
            <div data-aos="zoom-in-up" className="text-gray-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline">
                  ⏰{" "}
                  <span className="text-cyan-400 font-medium">
                    Giờ hoạt động:
                  </span>
                
                <span className="sm:ml-2">4:30 AM – 20:30 PM (T2 - T7)</span>
              </div>
              <div className="sm:ml-[143px] ml-1">4:30 AM – 9:30 AM (CN)</div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
