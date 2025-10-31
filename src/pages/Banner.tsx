
import bannerImg from "../assets/Banner.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
  {/* Background image */}
  <img
    src={bannerImg}
    alt="Banner"
    className="absolute w-full h-full object-cover object-[-100px_center]   sm:object-center"
  />

  {/* Overlay đen mờ */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <h1 className="text-5xl sm:text-6xl font-extrabold text-cyan-400 drop-shadow-lg">
      FINESS &SPORT
    </h1>
    <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
      Cùng{" "}
      <span className="text-cyan-500 font-semibold">Hung Thao Sport 2</span>{" "}
      xây dựng cơ thể khỏe mạnh và tinh thần bền bỉ hơn mỗi ngày.
    </p>
    <button className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-semibold rounded-lg shadow-md hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg transition-all duration-300">
      Tìm hiểu thêm
    </button>
  </div>
</div>

  );
};

export default Banner;
