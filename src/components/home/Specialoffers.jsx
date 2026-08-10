import { ArrowRight } from "lucide-react";
import tastingImg from "../../assets/images/home/tasting-journey.jpg";
import lunchImg from "../../assets/images/home/long-lunch.jpg";
import cellarImg from "../../assets/images/home/cellar-room.jpg";

const OFFERS = [
  {
    id: 1,
    image: tastingImg,
    title: "The Tasting Journey",
    description: "Seven courses, wine pairing included, Thursday – Saturday",
    price: "LKR 18,500",
    ctaLabel: "Reserve",
    ctaType: "reserve",
  },
  {
    id: 2,
    image: lunchImg,
    title: "The Long Lunch",
    description: "Three Courses, seated by 2 PM, Tuesday–Friday",
    price: "LKR 5,500",
    ctaLabel: "Reserve",
    ctaType: "reserve",
  },
  {
    id: 3,
    image: cellarImg,
    title: "The Cellar Room",
    description: "Private dining for up to twelve guests.",
    price: "LKR 120,500",
    ctaLabel: "Enquire",
    ctaType: "enquire",
  },
];

const SpecialOffers = () => {
  return (
    <section className="w-full bg-[#1A2535] px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <span className="block text-orange-500 text-sm font-bold tracking-wide uppercase mb-3">
          Special Offers
        </span>
        <h2 className="font-playfair font-bold text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-tight mb-3">
          Seasonal Invitations
        </h2>
        <p className="text-gray-400 text-base mb-12 max-w-xl">
          A short list of what's on this season – each held for a limited
          seating
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="rounded-xl overflow-hidden border border-slate-800"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-[340px] object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair font-bold text-white text-2xl mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {offer.description}
                </p>
                <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
                  <span className="text-orange-500 text-lg font-semibold">
                    {offer.price}
                  </span>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-white text-sm font-semibold tracking-wide uppercase hover:text-orange-500 transition-colors duration-200"
                  >
                    {offer.ctaLabel}
                    {offer.ctaType === "enquire" && <ArrowRight size={15} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;