import philosophyImage from "../../assets/images/about/philosophy-dining.jpg";

const PRINCIPLES = [
  {
    label: "Provenance",
    title: "What's in season, and nothing else",
    description:
      "Our menu is rewritten as ingredients change hands, not the other way around.",
  },
  {
    label: "Craft",
    title: "Technique in service of flavour.",
    description:
      "Every plate is built to be understood in one bite, and remembered long after.",
  },
  {
    label: "Hospitality",
    title: "Attention, never intrusion.",
    description:
      "Our service is measured by what you never had to ask for.",
  },
];

const OurPhilosophy = () => {
  return (
    <section className="w-full bg-[#0F1923] px-6 md:px-10 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Image */}
        <img
          src={philosophyImage}
          alt="Guests being served at Versailles"
          className="w-full h-[420px] lg:h-[520px] object-cover rounded-xl"
        />

        {/* Right column - Principles list */}
        <div>
          <span className="block text-[#E67E22] text-sm font-bold tracking-wide uppercase mb-10">
            Our Philosophy
          </span>

          <div className="border-t border-slate-700">
            {PRINCIPLES.map((item) => (
              <div key={item.label} className="border-b border-slate-700 py-6">
                <span className="block text-[#E67E22] text-xs font-bold tracking-wide uppercase mb-2">
                  {item.label}
                </span>
                <h3 className="font-playfair font-bold text-white text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;