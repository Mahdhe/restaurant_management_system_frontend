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
    <nav className="w-full bg-[#0B1220] px-6 md:px-10 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <UtensilsCrossed className="text-orange-500" size={22} strokeWidth={2.2} />
        <span className="text-white text-xl font-semibold tracking-wide">
          Versailles
        </span>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="text-gray-200 text-[13px] font-medium tracking-wide hover:text-orange-500 transition-colors duration-200"
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
          className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-600 text-gray-300 hover:text-orange-500 hover:border-orange-500 transition-colors duration-200"
        >
          <Moon size={16} />
        </button>

        <button
          type="button"
          className="px-4 py-2 rounded-md border border-slate-600 text-gray-200 text-sm font-medium hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
        >
          Track Order
        </button>

        <button
          type="button"
          className="px-5 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
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
              className="text-gray-200 text-sm font-medium tracking-wide hover:text-orange-500 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3">
            <button className="px-4 py-2 rounded-md border border-slate-600 text-gray-200 text-sm font-medium flex-1">
              Track Order
            </button>
            <button className="px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold flex-1">
              Order Online
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;