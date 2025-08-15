import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#" },
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
        <div className="md:hidden mt-[10px] mx-4 p-4 bg-white text-black backdrop-blur-2xl rounded-2xl border border-gray-200 shadow-2xl animate-fade-in">
          <nav className="flex flex-col items-center space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center justify-between px-4 py-3 hover:text-blue-700 transition-all duration-300 font-medium rounded-xl hover:bg-gray-100 border border-transparent hover:border-gray-300 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
