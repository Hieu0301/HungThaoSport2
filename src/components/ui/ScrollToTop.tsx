import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuộn lên đầu trang mỗi khi pathname thay đổi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Không render gì ra giao diện
};

export default ScrollToTop;
