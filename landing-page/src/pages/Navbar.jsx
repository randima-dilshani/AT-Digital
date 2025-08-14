import { useState } from "react";
import logo from "../assets/Logo.png"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="text-white font-inter"
      style={{
        backgroundColor: "hsla(243, 75%, 59%, 1)",
      }}
    >
      <div
        className="max-w-[1440px] mx-auto flex justify-between items-center"
        style={{
          width: "1440px",
          height: "101.62127685546875px",
          paddingTop: "26px",
          paddingRight: "80px",
          paddingBottom: "26px",
          paddingLeft: "80px",
        }}
      >
     {/* Logo */}
<div className="flex items-center gap-[14px]">
  <img
    src={logo} 
    alt="AT Digital Logo"
    className="w-[226px] h-[49.62px] object-contain"
  />
</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="cursor-pointer hover:opacity-80 font-medium text-[14px] leading-none w-[68px] h-[17px]">
            SERVICES
          </li>
          <li className="cursor-pointer hover:opacity-80 font-medium text-[14px] leading-none w-[73px] h-[17px]">
            ABOUT US
          </li>
          <li className="cursor-pointer hover:opacity-80 font-medium text-[14px] leading-none w-[92px] h-[17px]">
            CONTACT US
          </li>
          <li className="cursor-pointer hover:opacity-80 font-medium text-[14px] leading-none w-[64px] h-[17px]">
            CAREERS
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-[80px] pb-4 space-y-4">
          <li className="cursor-pointer hover:opacity-80 font-medium text-[14px] leading-none w-[68px] h-[17px]">
            SERVICES
          </li>
          <li className="hover:opacity-80 cursor-pointer">ABOUT US</li>
          <li className="hover:opacity-80 cursor-pointer">CONTACT US</li>
          <li className="hover:opacity-80 cursor-pointer">CAREERS</li>
        </ul>
      )}
    </nav>
  );
}
