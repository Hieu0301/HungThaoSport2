
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-950 to-gray-900 text-gray-400 text-sm py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center gap-x-20 sm:text-left px-6">
        {/* Cột 1 */}

        <div>
          <div>
            <span className="font-semibold text-cyan-400">Địa chỉ:</span>
            <br />
            <div className="flex items-start text-gray-300 mt-2 leading-tight">
              <FaRegAddressCard className="text-cyan-400 mr-2 mt-[2px] flex-shrink-0" />
              <span>
                4122 đường ĐT 743, khu phố Nội Hóa 2. Phường Bình An, Thành Phố Dĩ An, tỉnh Bình Dương
              </span>
            </div>
          </div>
        </div>

        {/* Cột 2 */}
        <div className="flex flex-col items-center sm:items-start justify-center gap-2">
          <div className="flex flex-col items-center sm:items-start mt-1">
            <span className="font-semibold text-cyan-400 mb-1">Liên hệ:</span>
            <div className="flex items-center">
              <MdOutlineLocalPhone className="text-cyan-400 mr-2 text-lg" />
              <span className="text-gray-300">0937336258</span>
            </div>
          </div>
          <div className="flex items-center">
            <CiFacebook className="text-cyan-400 mr-2 text-lg" />
            <span>
              <a href="https://www.facebook.com/toi.phamdinh.73" className="text-gray-300">
                Toi Pham Dinh{" "}
              </a>
            </span>
          </div>
          <div className="flex items-center justify-center sm:justify-start mt-1">
            <CiMail className="text-cyan-400 mr-2 text-lg" />
            <span className="text-gray-300">phamdinhtien1969s@gmail.com</span>
          </div>
        </div>

        {/* Cột 3 */}
        <div className="flex flex-col items-center sm:items-start justify-center gap-1">
          <span className="font-semibold text-cyan-400">Giờ hoạt động:</span>
          <div className="text-gray-300">4:30 AM – 20:30 PM (T2 - T7)</div>
          <div className="text-gray-300">4:30 AM – 9:30 AM (CN)</div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-6">
        © 2025 Gym Center. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
