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
        </div>
      )}
    </nav>
  );
};

export default Navbar;