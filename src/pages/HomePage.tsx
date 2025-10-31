import Nav from "./Nav";
import Banner from "./Banner";
import Footer from "./Footer";
import "../index.css";
const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 text-white min-h-screen">
      <Nav />
      <Banner />

      <section className="py-20 px-6 text-center bg-gray-900">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">
          Sức Mạnh Của Bạn - Sứ Mệnh Của Chúng Tôi
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Tại{" "}
          <span className="text-cyan-400 font-semibold">Hung Thao Sport 2</span>
          , chúng tôi tin rằng mỗi người đều có tiềm năng vượt qua giới hạn.
          Không chỉ là phòng tập, đây là nơi bạn tìm thấy động lực, sức mạnh và
          cộng đồng cùng phát triển.
        </p>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-gray-950 to-gray-800 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Khám Phá Cùng Chúng Tôi
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Về Chúng Tôi",
              desc: "Tìm hiểu hành trình và triết lý của Hung Thao Sport 2.",
              link: "/about",
            },
            {
              title: "Dịch Vụ",
              desc: "Trải nghiệm các gói tập với giá tập ưu đãi.",
              link: "/service",
            },
            {
              title: "Liên Hệ",
              desc: "Kết nối ngay để bắt đầu hành trình của bạn.",
              link: "/contact",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="electric-card-homepage hover:scale-105 transition-transform duration-300"
            >
              {/* SVG border */}
              {/* <svg
                className="electric-border-homepage-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="electricGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="100%" stopColor="#0077ff" />
                  </linearGradient>
                </defs>

                <rect width="100%" height="100%" rx="16" ry="16" />
              </svg> */}

              <svg
                className="electric-border-homepage-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="electricGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="100%" stopColor="#0077ff" />
                  </linearGradient>
                </defs>

                <rect
                  width="100%"
                  height="100%"
                  rx="16"
                  ry="16"
                  fill="none"
                  stroke="url(#electricGradient)"
                  strokeWidth="3"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                >
                  {/* Hiệu ứng chạy liên tục, mượt tuyệt đối */}
                  <animate
                    attributeName="stroke-dashoffset"
                    from="400"
                    to="-400"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>

              {/* Nội dung */}
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4">{item.desc}</p>
              <a
                href={item.link}
                className="text-cyan-400 font-medium hover:underline"
              >
                Xem thêm →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 sm:px-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Liên Hệ</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Hãy đến với chúng tôi để bắt đầu hành trình chinh phục cơ thể lý tưởng
          của bạn! Tại Hung Thao Sport 2, mỗi buổi tập là một bước tiến gần hơn
          tới sức khỏe bền bỉ, tinh thần sảng khoái và vóc dáng mơ ước. Cùng
          chúng tôi trải nghiệm môi trường tập luyện chuyên nghiệp, thân thiện
          và đầy cảm hứng mỗi ngày!
        </p>

        <a
          href="tel:+84937336258"
          className="electric-card-button hover:scale-105 inline-block mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-semibold rounded-lg shadow-md hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg transition-all duration-300"
        >
          Liên hệ ngay
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
