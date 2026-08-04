import kitchenImage from "../../assets/images/home/kitchen-chefs.png";

const CHAPTERS = [
  {
    label: "Chapter One",
    title: "An uncompromising kitchen",
    description:
      "Every plate built around what's in season, sourced daily and finished table-side where it matters.",
  },
  {
    label: "Chapter Two",
    title: "A cellular worth the wait",
    description:
      "Over four hundred labels, curated by our resident sommelier for pairings that surprise.",
  },
  {
    label: "Chapter 03",
    title: "Service that remembers you",
    description:
      "From the first reservation to the last course, every visit is noted and honoured the next time",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#E67E22] from-0% via-[#0B1220] via-20% to-[#0B1220] px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <span className="block text-orange-500 text-sm font-bold tracking-wide uppercase mb-10">
            Why Choose Us
          </span>

          <div className="border-t border-slate-700">
            {CHAPTERS.map((chapter) => (
              <div
                key={chapter.label}
                className="border-b border-slate-700 py-6"
              >
                <span className="block text-orange-500 text-xs font-bold tracking-wide uppercase mb-2">
                  {chapter.label}
                </span>
                <h3 className="font-playfair font-bold text-white text-2xl mb-2">
                  {chapter.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  {chapter.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Image */}
        <div>
          <img
            src={kitchenImage}
            alt="Chefs at work in the kitchen"
            className="w-full h-[420px] lg:h-[540px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;