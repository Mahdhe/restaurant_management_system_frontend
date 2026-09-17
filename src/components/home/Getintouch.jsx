const GetInTouch = () => {
  return (
    <section className="w-full bg-[#0B1220] px-6 md:px-16 lg:px-[120px] py-16">
      <div className="max-w-7xl mx-auto rounded-2xl border border-orange-600 bg-[radial-gradient(ellipse_at_center,_#16202f_0%,_#0B1220_70%)] px-6 py-16 md:py-20 text-center">
        <span className="block text-orange-500 text-sm font-bold tracking-wide uppercase mb-4">
          Get In Touch
        </span>
        <h2 className="font-playfair font-bold text-white text-[32px] sm:text-[44px] leading-tight mb-4">
          We'd love to
          <br />
          host you.
        </h2>
        <p className="text-gray-400 text-base mb-8">
          No. 24, Dehiwala, Colombo 11 . Open Mon–sun, 8AM – 12PM
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="px-6 py-3 rounded-md bg-orange-500 text-white text-sm font-bold tracking-wide uppercase hover:bg-orange-600 transition-colors duration-200"
          >
            Reserve a Table
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-bold tracking-wide uppercase hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;