import { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import coach from "../assets/coach.jpg";
import gym6 from "../assets/gym-6.jpg";
import image from "../assets/image-1.jpg";
import "../index.css";

const Service = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Nav />

      <div className="pt-[100px] bg-gradient-to-b from-gray-950 to-gray-900 text-white min-h-screen">
        {/* Tiêu đề trang */}
        <section className="text-center px-6 sm:px-20 py-16">
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Tại{" "}
            <span className="text-cyan-400 font-semibold">
              Hung Thao Sport 2
            </span>
            , chúng tôi mang đến các dịch vụ huấn luyện chuyên nghiệp, không
            gian tập hiện đại và các chương trình phù hợp với mọi mục tiêu thể
            hình của bạn.
          </p>
        </section>

        {/* Danh sách dịch vụ */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-20 py-10">
          {[
            {
              title: "Huấn Luyện Cá Nhân",
              desc: `Được hướng dẫn bởi HLV chuyên nghiệp, giúp bạn đạt mục tiêu nhanh chóng và an toàn.  
Chương trình tập luyện được thiết kế riêng theo thể trạng và mục tiêu của từng cá nhân.  
HLV luôn đồng hành, chỉnh sửa tư thế, động tác để tối ưu hiệu quả và tránh chấn thương.  
Bạn sẽ nhận được lời khuyên về dinh dưỡng, lối sống và cách duy trì kết quả lâu dài.  
Mỗi buổi tập trở thành trải nghiệm cá nhân hóa, giúp bạn tiến bộ đều đặn và tự tin hơn.`,
              img: coach,
            },

            {
              title: "Phòng Tập Hiện Đại",
              desc: `Trang bị máy móc hiện đại, tối tân, phục vụ đầy đủ mọi nhu cầu tập luyện.
Không gian rộng rãi, thoáng mát, mang lại cảm giác thoải mái tối đa khi luyện tập.
Tiện nghi đầy đủ, từ phòng thay đồ sạch sẽ đến khu vực nghỉ ngơi thư giãn.
Ánh sáng và thông gió tự nhiên giúp cơ thể luôn tràn đầy năng lượng.
Mỗi góc tập đều được bố trí khoa học, giúp bạn tập luyện hiệu quả và an toàn.`,
              img: gym6,
            },

            {
              title: "Môi Trường Năng Động & Thân Thiện",
              desc: "Dù là người mới, bạn sẽ luôn được đồng hành và hướng dẫn tận tình tại Hung Thao Sport 2. Chúng tôi đảm bảo bạn tự tin làm quen với mọi thiết bị và bài tập, để mỗi buổi luyện tập đều trở nên thú vị và hiệu quả.",
              img: image, // đây là import hình ảnh mới
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/60 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-150 h-100 object-cover object-[center_30%]"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Phần dịch vụ – Các gói tập */}
        <h4 className="text-xl font-bold text-cyan-400 text-center mb-10 mt-5">
          {mounted &&
            "Các Gói Dịch Vụ Của Chúng Tôi".split(/(\s)/).map((char, index) => {
              const isSpace = char === " ";
              return (
                <span
                  key={index}
                  className="bounce-reveal-letter"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    width: isSpace ? "0.8rem" : "auto",
                  }}
                >
                  {isSpace ? "\u00A0" : char}
                </span>
              );
            })}
        </h4>

        <div className="px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
            {/* Card 1 */}
            <div className="electric-card">
              <svg className="electric-border-svg">
                <defs>
                  <linearGradient
                    id="electricGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="50%" stopColor="#0077ff" />
                    <stop offset="100%" stopColor="#00ffff" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" rx="16" ry="16" />
              </svg>

              <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                Gói tập
              </h4>
              <p className="text-gray-300 mb-2">
                Tập tất hết tất cả các loại máy trong phòng
              </p>
              <p className="text-lg font-bold text-white mb-2">270k / tháng</p>
            </div>

            {/* Card 2 */}
            <div className="electric-card">
              <svg className="electric-border-svg">
                <defs>
                  <linearGradient
                    id="electricGradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="50%" stopColor="#0077ff" />
                    <stop offset="100%" stopColor="#00ffff" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" rx="16" ry="16" />
              </svg>

              <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                Ưu đãi với học sinh - sinh viên
              </h4>
              {/* <p className="text-gray-300 mb-2">
                Ưu đãi đặc biệt với sinh viên
              </p> */}
              <p className="text-lg font-bold text-white mb-2">Giảm 10%</p>
            </div>

            {/* Card 3 */}
            <div className="electric-card">
              <svg className="electric-border-svg">
                <defs>
                  <linearGradient
                    id="electricGradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="50%" stopColor="#0077ff" />
                    <stop offset="100%" stopColor="#00ffff" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" rx="16" ry="16" />
              </svg>

              <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                Các ưu đãi khác
              </h4>
              <p className="text-gray-300 mb-2">
                Ưu đãi với những hội viên đóng theo quý hoặc năm
              </p>

              <p className="text-gray-400 mb-2">
                Đóng 3 tháng: <span className="text-cyan-400">giảm 5%</span>
              </p>
              <p className="text-gray-400 mb-2">
                Đóng 6 tháng: <span className="text-cyan-400">giảm 15%</span>
              </p>
              <p className="text-gray-400">
                Đóng năm: <span className="text-cyan-400">giảm 20%</span>
              </p>
            </div>
          </div>
        </div>

        {/* Phần CTA – Kêu gọi hành động */}
        <section className="text-center py-16 px-6 sm:px-20 bg-gray-900">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            Sẵn Sàng Bắt Đầu Hành Trình Của Bạn?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Đăng ký ngay hôm nay để nhận tư vấn miễn phí và bắt đầu hành trình
            chinh phục mục tiêu thể hình của bạn.
          </p>
          <button className="px-10 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg transition-all duration-300">
            Đăng Ký Ngay
          </button>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Service;
