import { Quote, Star } from "lucide-react";

const SIDE_TESTIMONIALS = [
  {
    id: 1,
    initials: "RK",
    quote: "Booked the Chef's Table on a whim – best decision of the trip.",
    name: "Ravi K.",
    tag: "Tasting Journey",
  },
  {
    id: 2,
    initials: "NS",
    quote: "The Cellar Room made my father's 70th feel exactly as it should.",
    name: "Nadia S.",
    tag: "Private Dining",
  },
  {
    id: 3,
    initials: "RK",
    quote: "Reservation was effortless and the sommelier's pairing was spot on.",
    name: "Jerome P.",
    tag: "Weekend Dinner",
  },
];

const Guestbook = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#E67E22] from-0% via-[#0B1220] via-20% to-[#0B1220] px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <span className="block text-orange-500 text-sm font-bold tracking-wide uppercase mb-10">
          Guestbook
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - main quote */}
          <div className="lg:border-r lg:border-slate-700 lg:pr-16">
            <Quote className="text-slate-700 mb-4" size={40} fill="currentColor" />
            <p className="font-playfair italic text-white text-xl sm:text-2xl leading-relaxed mb-8">
              The most thoughtfully composed evening we've had in years – every
              course felt considered, every pairing deliberate, and nothing
              rushed.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-orange-950 border border-orange-800 flex items-center justify-center text-orange-400 text-sm font-semibold shrink-0">
                AF
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  Amara Fernando
                </p>
                <p className="text-gray-400 text-xs mb-1">
                  Guest, Anniversary Dinner
                </p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - list of mini testimonials */}
          <div>
            {SIDE_TESTIMONIALS.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-start gap-4 py-5 ${
                  index !== SIDE_TESTIMONIALS.length - 1
                    ? "border-b border-slate-700"
                    : ""
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-orange-950 border border-orange-800 flex items-center justify-center text-orange-400 text-sm font-semibold shrink-0">
                  {item.initials}
                </div>
                <div>
                  <p className="text-white text-sm italic leading-relaxed mb-2">
                    "{item.quote}"
                  </p>
                  <p className="text-sm">
                    <span className="text-orange-500 font-semibold">
                      {item.name}
                    </span>{" "}
                    <span className="text-gray-400">{item.tag}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;