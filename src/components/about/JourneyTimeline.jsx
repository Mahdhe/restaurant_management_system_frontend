const MILESTONES = [
  {
    year: "2010",
    title: "Versailles Open",
    description: "Fourteen tables, one dining room, Colombo",
    side: "left",
  },
  {
    year: "2015",
    title: "The Cellular Room",
    description: "Our Private dining room and reserve cellar are uveild",
    side: "right",
  },
  {
    year: "2019",
    title: "Regional Recognition",
    description: "Named among the island's finest dinid destinations.",
    side: "left",
  },
  {
    year: "2024",
    title: "The Tasting journey",
    description: "Our seven-course chef's table experience launches",
    side: "right",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0F1923] via-[#0F1923] via-85% to-[#E67E22] to-100% px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="block text-[#E67E22] text-sm font-bold tracking-wide uppercase mb-3">
          Milestone
        </span>
        <h2 className="font-playfair font-bold text-white text-[32px] sm:text-[40px] leading-tight">
          Our journey so far.
        </h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-orange-700/60" />

        {MILESTONES.map((item, index) => (
          <div
            key={item.year}
            className="relative grid grid-cols-[1fr_32px_1fr] items-center mb-16 last:mb-0"
          >
            {/* Left side content */}
            <div className="text-right pr-8">
              {item.side === "left" && (
                <>
                  <span className="block font-playfair text-[#E67E22] text-lg font-bold mb-1">
                    {item.year}
                  </span>
                  <h3 className="font-playfair font-bold text-white text-xl mb-1">
                    {item.title}
                  </h3> 
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </>
              )}
            </div>

            {/* Dot */}
            <div className="flex justify-center">
              <div className="w-3 h-3 rounded-full bg-[#E67E22] z-10" />
            </div>

            {/* Right side content */}
            <div className="text-left pl-8">
              {item.side === "right" && (
                <>
                  <span className="block font-playfair text-[#E67E22] text-lg font-bold mb-1">
                    {item.year}
                  </span>
                  <h3 className="font-playfair font-bold text-white text-xl mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneyTimeline;