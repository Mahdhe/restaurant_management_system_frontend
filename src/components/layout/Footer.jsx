import { Link } from "react-router-dom";

const Footer = () => {
  const year = 2026;

  return (
    <footer className="w-full bg-[#0B1220] px-6 md:px-16 pt-14 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-playfair">Versailles</h3>
          <p className="text-gray-400 text-[11px] tracking-[0.2em] mt-1">
            RESTAURANT &amp; CAFE
          </p>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-xs">
            An address for unforgettable evenings, in the heart of Colombo.
          </p>
          <p className="text-white text-xs">Colombo, Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
