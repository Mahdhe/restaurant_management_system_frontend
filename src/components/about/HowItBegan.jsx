import founderDishImage from "../../assets/images/about/founder-dish.jpg";

const HowItBegan = () => {
  return (
    <section className="w-full bg-[#0F1923] px-6 md:px-10 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column - Text content */}
        <div className="relative">
          <div className="absolute -top-16 -left-16 w-[420px] h-[420px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
          <span className="block text-[#E67E22] text-sm font-bold tracking-wide uppercase mb-4">
            How It Began
          </span>
          <h2 className="font-playfair font-bold text-white text-[32px] sm:text-[40px] leading-tight mb-6">
            A single room, one idea.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            Versailles opened in 2010 with fourteen tables and a simple
            belief — that a meal, done properly, is one of the few remaining
            rituals worth slowing down for.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            What began as a single dining room in the heart of Colombo has
            grown into a home for the city's most memorable evenings,
            without ever losing the intimacy it started with.
          </p>
          <div className="border-t border-orange-600 w-10 mb-6" />
          <p className="font-playfair italic text-[#E67E22] text-xl">
            The Founder
          </p>
        </div>

        {/* Right column - Image with overlay card */}
        <div className="relative rounded-2xl border border-orange-600 p-3">
          <img
            src={founderDishImage}
            alt="Signature dish at Versailles"
            className="w-full h-[420px] lg:h-[460px] object-cover rounded-xl"
          />
          <div className="absolute bottom-17 -left-17 bg-[#0F1B2E]/95 border border-slate-700 rounded-lg px-6 py-4">
            <p className="text-center font-playfair text-[#E67E22] text-3xl font-bold ">16</p>
            <p className="text-gray-400 text-xs tracking-wide uppercase mt-1">
              Years of Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItBegan;