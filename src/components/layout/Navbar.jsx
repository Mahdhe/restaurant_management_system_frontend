import { useState } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Moon, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "HOME", path: "/" },
  { name: "MENU", path: "/menu" },
  { name: "RESERVATIONS", path: "/reservations" },
  { name: "GALLERY", path: "/gallery" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0F1923] border-b border-slate-700 px-6 md:px-10 py-4 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4.25 shrink-0">
          <div className="bg-[#E67E22] items-center justify-center flex rounded-[14px] h-10.5 w-10.5">
            <UtensilsCrossed
              className="text-white"
              size={22}
              strokeWidth={2.2}
            />
          </div>

          <span className="font-playfair text-[#F0F4F8] text-[22px] font-bold tracking-[1.3px]">
            Versailles
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-4.25">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="font-dmsans inline-block text-[#8A9BB0] text-[14px] font-medium tracking-normal leading-5.25 hover:bg-[#1C2A38] hover:rounded-md px-2 py-1.5 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-[10px] bg-[#243447] border border-slate-600 text-[#F0F4F8] hover:text-slate-300 hover:border-slate-500 cursor-pointer transition-colors duration-200"
          >
            <Moon size={16} />
          </button>

          <button
            type="button"
            className="font-dmsans px-4 py-2 rounded-[10px] bg-[#243447] border border-slate-600 text-[#F0F4F8] text-[14px] font-medium hover:text-slate-300 hover:border-slate-500 transition-colors duration-200 cursor-pointer"
          >
            Track Order
          </button>

          <button
            type="button"
            className="font-dmsans px-4 py-2.25 rounded-[10px] bg-[#E67E22] text-white text-sm font-semibold hover:bg-[#D46B1A] transition-colors duration-200 cursor-pointer"
          >
            Order Online
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-gray-200"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0B1220] border-t border-slate-800 flex flex-col gap-5 px-6 py-6 md:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 text-sm font-medium tracking-wide hover:text-[#D46B1A] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <button className="px-4 py-2 rounded-md border border-slate-600 text-gray-200 text-sm font-medium flex-1">
                Track Order
              </button>
              <button className="px-4 py-2 rounded-md bg-[#E67E22] text-white text-sm font-semibold flex-1">
                Order Online
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
