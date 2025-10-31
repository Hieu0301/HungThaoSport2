
import Nav from "./Nav";
import gym2 from "../assets/gym-2.jpg";
import gym1 from "../assets/gym-1.jpg";
import gym3 from "../assets/gym-3.jpg";
import gym4 from "../assets/gym-4.jpg";
import gym5 from "../assets/gym-5.jpg";
import coach from "../assets/coach.jpg";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  const settings = {
    dots: true, // hiển thị dấu chấm phía dưới
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // ẩn mũi tên (bật lại bằng true nếu muốn)
    pauseOnHover: true,
  };
  const images = [gym1, gym2, gym3, gym4, gym5];
  return (
    <>
      <Nav />
      <div className="pt-[100px] bg-gray-950 text-white min-h-screen">
        {/* Giới thiệu chung */}
        <section className="text-center px-6 sm:px-20 py-16">
          <h2 data-aos="zoom-in-up" className="text-4xl font-bold text-cyan-400 mb-6">
            Về Chúng Tôi
          </h2>
          <div data-aos="fade-up-left" className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            <span className="font-semibold text-cyan-400 font-semibold">
              Hung Thao Sport 2
            </span>{" "}
            <p>
              là trung tâm thể hình được thành lập từ năm 2015, luôn giữ vững mục
            tiêu mang đến một không gian tập luyện chuyên nghiệp nhưng vẫn bình
            dân và gần gũi với mọi người. Trải qua nhiều năm hoạt động, chúng
            tôi không ngừng nâng cấp hệ thống máy tập hiện đại, mở rộng không
            gian rộng rãi – thoáng mát, tạo cảm giác thoải mái cho hội viên
            trong mỗi buổi tập. 
            </p>
            <p>Tại đây, bạn sẽ được hướng dẫn bởi đội ngũ huấn luyện viên giàu kinh nghiệm, luôn sẵn sàng đồng hành để giúp bạn đạt được mục tiêu sức khỏe và hình thể lý tưởng. Môi trường tập luyện tại Hung Thao Sport 2 luôn vui vẻ, thân thiện, với một cộng đồng yêu thể hình năng động và ông chủ phòng vui tính, hòa đồng, mang lại không khí tích cực mỗi ngày.</p>
          </div>
          
        </section>

        {/* Hình ảnh + nội dung chia cột */}
        <section className="grid md:grid-cols-2 gap-10 items-center px-6 sm:px-20 py-10">
          <div data-aos="zoom-in" className="rounded-2xl overflow-hidden shadow-lg">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`gym-${index}`}
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <h3 data-aos="zoom-in-up" className="text-3xl font-bold text-cyan-400 mb-4">
              Sứ Mệnh Của Chúng Tôi
            </h3>
            <p data-aos="flip-right" className="text-gray-300 leading-relaxed">
              Chúng tôi hướng tới việc xây dựng một môi trường tập luyện chuyên
              nghiệp, thân thiện và tràn đầy năng lượng. Tại đây, bạn có thể
              khơi dậy tinh thần thể thao, học cách kiên trì và không ngừng thử
              thách giới hạn của chính mình. Mỗi bước tiến dù nhỏ cũng là minh
              chứng cho nỗ lực và sự thay đổi tích cực của bạn. <br />
              <br />
              Tại{" "}
              <span className="text-cyan-400 font-semibold">
                Hung Thao Sport 2
              </span>
              , bạn không chỉ tập luyện — bạn còn xây dựng lối sống khỏe mạnh,
              tích cực và đầy năng lượng.
            </p>
          </div>
        </section>

        {/* Tầm nhìn */}
        <section className="text-center py-16 px-6 sm:px-20 bg-gray-950">
          <h3 data-aos="zoom-in-up" className="text-3xl font-bold text-cyan-400 mb-6">
            Tầm Nhìn & Giá Trị
          </h3>
          <p data-aos="fade-left" className="max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Chúng tôi mong muốn xây dựng một phòng gym thân thiện và gần gũi,
            nơi mọi người — dù là người mới bắt đầu hay đã tập lâu năm — đều có
            thể thoải mái rèn luyện và cải thiện sức khỏe của mình. Với không
            gian đơn giản, sạch sẽ và đầy đủ trang thiết bị cần thiết, chúng tôi
            hy vọng mang đến cho bạn một môi trường tập luyện tích cực, giúp bạn
            duy trì thói quen thể thao và cảm thấy tràn đầy năng lượng mỗi ngày.
          </p>

          {/* Trích dẫn & ảnh chủ phòng */}
          <div className="mt-10 flex flex-col items-center justify-center">
            <img
              src={coach} // ảnh chủ phòng (import ở trên)
              alt="Chủ phòng gym"
              data-aos="zoom-out-right"
              className="w-24 h-24 rounded-full object-cover border-2 border-cyan-500 shadow-md mb-4 mx-auto"
            />
            <p data-aos="flip-up" className="text-xl italic text-gray-200 max-w-2xl">
              “Đừng để lý do ngăn bạn trở nên mạnh mẽ hơn mỗi ngày.”
            </p>
            <span data-aos="zoom-in-up" className="mt-2 text-cyan-400 font-semibold">
              – Phạm Đình Tiến, Chủ phòng –
            </span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
