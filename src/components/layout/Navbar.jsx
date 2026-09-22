import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UtensilsCrossed, Moon, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "HOME", path: "/" },
  { name: "MENU", path: "/menu" },
  { name: "RESERVATIONS", path: "/reservations" },
  { name: "GALLERY", path: "/gallery" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const HIDE_ORDER_BUTTON_ROUTES = [
  "/order-online",
  "/order-confirmation",
  "/track-order",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  const shouldHideOrderButton = HIDE_ORDER_BUTTON_ROUTES.includes(
    location.pathname,
  );

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-800 bg-[#0F1923] px-6 py-4 md:px-10 lg:px-[120px]">
      {/* Logo */}
      <Link to="/" className="flex shrink-0 items-center gap-2">
        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-[#E67E22] p-[9px]">
          <UtensilsCrossed className="text-white" size={22} strokeWidth={2.2} />
        </div>
        <span className="font-playfair text-center align-middle text-[22px] font-bold leading-[1.3] tracking-normal text-white">
          Versailles
        </span>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden items-center gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="text-[13px] font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-[#E67E22]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Right Actions */}
      <div className="hidden items-center gap-3 md:flex">
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-slate-600 text-gray-300 transition-colors duration-200 hover:border-orange-500 hover:text-[#E67E22]"
        >
          <Moon size={16} />
        </button>

        <Link
          to="/track-order"
          className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 hover:border-orange-500 hover:text-[#E67E22]"
        >
          Track Order
        </Link>

        {/* Conditionally Render Order Online Button */}
        {!shouldHideOrderButton && (
          <Link
            to="/order-online"
            className="inline-block rounded-md bg-[#E67E22] px-5 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
          >
            Order Online
          </Link>
        )}
      </div>

      {/* Mobile Toggle */}
      <button
        type="button"
        className="text-gray-200 md:hidden"
        aria-label="Toggle menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-5 border-t border-slate-800 bg-[#0B1220] px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-[#E67E22]"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3">
            <Link
              to="/track-order"
              onClick={() => setIsOpen(false)}
              className="flex-1 rounded-md border border-slate-600 py-2 text-center text-sm font-medium text-gray-200"
            >
              Track Order
            </Link>

            {/* Conditionally Render Mobile Order Online Button */}
            {!shouldHideOrderButton && (
              <Link
                to="/order-online"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-md bg-orange-500 py-2 text-center text-sm font-semibold text-white"
              >
                Order Online
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;