import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "SERVICES", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "CONTACT US", href: "#" },
    { name: "CAREERS", href: "#" },
  ];

  return (
    <nav
      className="text-white font-inter"
      style={{
        backgroundColor: "hsla(243, 75%, 59%, 1)",
      }}
    >
      <div className="w-full mx-auto flex justify-between items-center px-6 sm:px-10 lg:px-20 py-6">
        {/* Logo */}
        <div className="flex items-center gap-[14px]">
          <img
            src={logo}
            alt="AT Digital Logo"
            className="w-[180px] sm:w-[226px] h-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:opacity-80 text-[14px]"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
    {menuOpen && (
  <div className="md:hidden fixed top-0 left-0 w-[80%] h-full p-4 bg-white text-black backdrop-blur-2xl shadow-2xl animate-fade-in z-50">
    <div className="flex justify-end mb-6">
      <button
        onClick={() => setMenuOpen(false)}
        className="text-black p-2"
      >
        <X className="h-6 w-6" />
      </button>
    </div>
    <nav className="flex flex-col space-y-6 text-lg font-medium">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="hover:text-blue-700 transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
        </a>
      ))}
    </nav>
  </div>
)}
    </nav>
  );
}
