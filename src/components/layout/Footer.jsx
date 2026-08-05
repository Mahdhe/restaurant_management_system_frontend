

// import { Link } from "react-router-dom";

// const Footer = () => {
//   const year = 2026;

//   return (
//     <footer className="w-full bg-[#0B1220] px-6 md:px-16 pt-14 pb-6 border-t border-[#FFFFFF1A]">
      
// <div className="w-full max-w-300 mx-auto"> 
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Brand */}
//         <div>
//           <h3 className="text-white text-lg font-playfair">Versailles</h3>
//           <p className="text-gray-400 text-[11px] tracking-[0.2em] mt-1">
//             RESTAURANT &amp; CAFE
//           </p>
//           <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-xs">
//             An address for unforgettable evenings, in the heart of Colombo.
//           </p>
//         </div>

//         {/* Explore */}
//         <div>
//           <h4 className="text-orange-500 text-sm font-semibold tracking-wide mb-4">
//             EXPLORE
//           </h4>
//           <ul className="space-y-3">
//             <li>
//               <Link to="/menu" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
//                 Menu
//               </Link>
//             </li>
//             <li>
//               <Link to="/reservations" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
//                 Reservations
//               </Link>
//             </li>
//             <li>
//               <Link to="/gallery" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
//                 Gallery
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
//                 About
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h4 className="text-orange-500 text-sm font-semibold tracking-wide mb-4">
//             SUPPORT
//           </h4>
//           <ul className="space-y-3">
//             <li>
//               <Link to="/faq" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
//                 FAQ
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link to="/private-events" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
//                 Private Events
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Hours */}
//         <div>
//           <h4 className="text-orange-500 text-sm font-semibold tracking-wide mb-4">
//             HOURS
//           </h4>
//           <p className="text-gray-400 text-sm">Mon – Sun</p>
//           <p className="text-gray-400 text-sm mt-1">08 AM – 12:00 PM</p>
//         </div>
//       </div>

//       <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
//         <p className="text-gray-500 text-xs">
//           @{year} Versailles Restaurant &amp; Cafe
//         </p>
//         <p className="text-gray-500 text-xs">Colombo, Sri Lanka</p>
//       </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-orange-500 text-sm font-semibold tracking-wide mb-4">
            EXPLORE
          </h4>
          <ul className="space-y-3">
            <li>
              <Link to="/menu" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-orange-500 text-sm font-semibold tracking-wide mb-4">
            SUPPORT
          </h4>
          <ul className="space-y-3">
            <li>
              <Link to="/faq" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/private-events" className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200">
                Private Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-orange-500 text-sm font-semibold tracking-wide mb-4">
            HOURS
          </h4>
          <p className="text-gray-400 text-sm">Mon – Sun</p>
          <p className="text-gray-400 text-sm mt-1">08 AM – 12:00 PM</p>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-gray-500 text-xs">
          @{year} Versailles Restaurant &amp; Cafe
        </p>
        <p className="text-gray-500 text-xs">Colombo, Sri Lanka</p>
      </div>
    </footer>
  );
};

export default Footer;