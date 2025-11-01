import { useState } from "react";
import { IoMenuSharp, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import image from "../assets/Hung_thao-gym.png";
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-black/60 backdrop-blur-md text-white z-40 shadow-md">

        {/* Logo */}
       <div className="flex items-center gap-2 text-2xl font-bold tracking-wide">
    <img
      src={image}
      alt="Hung Thao Sport 2 logo"
      className="w-20 h-20 object-contain drop-shadow-[0_0_6px_rgba(0,255,255,0.4)] -my-2"
    />
  </div>

        {/* Menu icon (mobile) */}
        <div className="block sm:hidden cursor-pointer z-50">
          {openMenu ? (
            <IoCloseOutline className="text-3xl" onClick={handleMenu} />
          ) : (
            <IoMenuSharp className="text-3xl" onClick={handleMenu} />
          )}
        </div>

        {/* Menu trên desktop */}
        <ul className="hidden sm:flex gap-8 text-lg font-medium ">
          {["Home", "About", "Service", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-cyan-400  transition-colors duration-200 "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu trên mobile */}
      {openMenu && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center gap-8 text-2xl text-gray-300 font-semibold z-30">
          {["Home", "About", "Service", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
              onClick={handleMenu}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
