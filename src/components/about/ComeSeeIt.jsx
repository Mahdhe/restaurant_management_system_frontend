const ComeSeeIt = () => {
  return (
    <section className="w-full bg-[#0F1923] px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto rounded-2xl border border-orange-600 bg-[radial-gradient(ellipse_at_center,_#16202f_0%,_#0B1220_70%)] px-6 py-16 md:py-20 text-center">
        <h2 className="font-playfair font-bold text-white text-[32px] sm:text-[44px] leading-tight mb-4">
          Come see it
          <br />
          for yourself.
        </h2>
        <p className="text-gray-400 text-base mb-8 max-w-lg mx-auto">
          The best way to understand Versailles is to sit down at one our
          tables.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="px-6 py-3 rounded-md bg-[#E67E22] text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
          >
            Reserve a Table
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-[#E67E22] hover:text-[#E67E22] transition-colors duration-200"
          >
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComeSeeIt;