import { Star } from "lucide-react";
import heroImage from "../../assets/images/home/hero-background.jpg";

const Hero = () => {
  return (
    <section className="w-full bg-[#0B1220] px-6 md:px-16 pt-6 pb-12 md:pt-8 md:pb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column - Text content */}
        <div className="relative">
          {/* Orange glow behind heading */}
          <div className="absolute -top-4 -left-10 w-[520px] h-[520px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Badge */}
          <span className="relative inline-block bg-orange-500/10 text-orange-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            Modern Restaurant Experience
          </span>

          {/* Heading */}
          <h1 className="relative font-playfair font-extrabold text-white text-[42px] sm:text-[56px] lg:text-[82px] leading-[1.05] lg:leading-[80px] tracking-[0.008em] mb-6">
            Fine dining,
            <br />
            fast
            <br />
            reservations,
            <br />
            and online
            <br />
            ordering.
          </h1>

          {/* Description */}
          <p className="relative text-gray-400 text-base leading-relaxed max-w-md mb-8">
            Discover signature dishes, reserve your table in seconds, or
            place an online order with SMS confirmation and live order
            tracking.
          </p>

          {/* Buttons */}
          <div className="relative flex flex-wrap items-center gap-3 mb-10">
            <button
              type="button"
              className="px-6 py-3 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Reserve a Table
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
            >
              Order Online
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-md text-gray-300 text-sm font-semibold border border-transparent hover:text-orange-500 transition-colors duration-200"
            >
              View Menu
            </button>
          </div>

          {/* Stats */}
          <div className="relative grid grid-cols-3 gap-4 max-w-lg">
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-4">
              <p className="text-white text-2xl font-bold flex items-center gap-1">
                4.8 <Star size={18} className="fill-orange-500 text-orange-500" />
              </p>
              <p className="text-gray-400 text-xs mt-1">Guest rating</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-4">
              <p className="text-white text-2xl font-bold">15 min</p>
              <p className="text-gray-400 text-xs mt-1">Avg prep time</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-4">
              <p className="text-white text-2xl font-bold">24</p>
              <p className="text-gray-400 text-xs mt-1">Available tables</p>
            </div>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="relative">
          <div className="relative mt-8">
          <div className="rounded-2xl border border-slate-800 p-3 bg-slate-900/40">
            <img
              src={heroImage}
              alt="Restaurant interior"
              className="w-full h-[420px] object-cover rounded-xl"
            />
          </div>
          </div>

          {/* Floating card */}
          <div className="absolute bottom-8 left-[-30px] bg-[#0F1B2E] border border-slate-700 rounded-xl px-5 py-4 max-w-[240px] shadow-xl">
            <span className="inline-block bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold px-3 py-1 rounded-full mb-3">
              Open Today
            </span>
            <p className="text-white text-base font-semibold mb-1">
              Reserve for tonight
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mb-3">
              Tables available from 6:30 PM onwards
            </p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-orange-500 text-orange-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// import { Star } from "lucide-react";
// import heroImage from "../../assets/images/home/hero-background.jpg";

// const Hero = () => {
//   return (
//     /* Changed py-16 md:py-24 -> pt-6 pb-12 md:pt-8 md:pb-16 to fix the navbar gap and height */
//     <section className="w-full bg-[#0B1220] px-6 md:px-16 pt-6 pb-12 md:pt-8 md:pb-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* Left column - Text content */}
//         <div className="relative">
//           {/* Orange glow behind heading */}
//           <div className="absolute -top-10 -left-10 w-[420px] h-[420px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />

//           {/* Badge */}
//           <span className="relative inline-block bg-orange-500/10 text-orange-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
//             Modern Restaurant Experience
//           </span>

//           {/* Heading */}
//           <h1 className="relative font-playfair font-extrabold text-white text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.05] lg:leading-[76px] tracking-[0.008em] mb-6">
//             Fine dining,
//             <br />
//             fast
//             <br />
//             reservations,
//             <br />
//             and online
//             <br />
//             ordering.
//           </h1>

//           {/* Description */}
//           <p className="relative text-gray-400 text-base leading-relaxed max-w-md mb-8">
//             Discover signature dishes, reserve your table in seconds, or
//             place an online order with SMS confirmation and live order
//             tracking.
//           </p>

//           {/* Buttons */}
//           <div className="relative flex flex-wrap items-center gap-3 mb-10">
//             <button
//               type="button"
//               className="px-6 py-3 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
//             >
//               Reserve a Table
//             </button>
//             <button
//               type="button"
//               className="px-6 py-3 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
//             >
//               Order Online
//             </button>
//             <button
//               type="button"
//               className="px-6 py-3 rounded-md text-gray-300 text-sm font-semibold border border-transparent hover:text-orange-500 transition-colors duration-200"
//             >
//               View Menu
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="relative grid grid-cols-3 gap-4 max-w-lg">
//             <div className="bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-4">
//               <p className="text-white text-2xl font-bold flex items-center gap-1">
//                 4.8 <Star size={18} className="fill-orange-500 text-orange-500" />
//               </p>
//               <p className="text-gray-400 text-xs mt-1">Guest rating</p>
//             </div>
//             <div className="bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-4">
//               <p className="text-white text-2xl font-bold">15 min</p>
//               <p className="text-gray-400 text-xs mt-1">Avg prep time</p>
//             </div>
//             <div className="bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-4">
//               <p className="text-white text-2xl font-bold">24</p>
//               <p className="text-gray-400 text-xs mt-1">Available tables</p>
//             </div>
//           </div>
//         </div>

//         {/* Right column - Image */}
//         <div className="relative">
//           <div className="rounded-2xl border border-slate-800 p-3 bg-slate-900/40">
//             <img
//               src={heroImage}
//               alt="Restaurant interior"
//               className="w-full h-[420px] object-cover rounded-xl"
//             />
//           </div>

//           {/* Floating card - Changed bottom-8 left-8 to -left-6 -bottom-6 z-10 */}
//           <div className="absolute -left-7 -bottom-[16px] z-10 bg-[#0F1B2E] border border-slate-700 rounded-xl px-5 py-4 max-w-[240px] shadow-2xl">
//             <span className="inline-block bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold px-3 py-1 rounded-full mb-3">
//               Open Today
//             </span>
//             <p className="text-white text-base font-semibold mb-1">
//               Reserve for tonight
//             </p>
//             <p className="text-gray-400 text-xs leading-relaxed mb-3">
//               Tables available from 6:30 PM onwards
//             </p>
//             <div className="flex gap-0.5">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   size={14}
//                   className="fill-orange-500 text-orange-500"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;
