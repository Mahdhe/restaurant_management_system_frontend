import { Clock } from "lucide-react";
import saladImg from "../../assets/images/home/garden-fresh-salad.jpg";
import chickenImg from "../../assets/images/home/grilled-chicken.jpg";
import pastaImg from "../../assets/images/home/creamy-pasta-chicken.jpg";

const DISHES = [
  {
    id: 1,
    name: "Garden Fresh Salad",
    description: "Fresh mixed greens with cucumber and tomato",
    price: "LKR 650",
    time: "5 min",
    image: saladImg,
  },
  {
    id: 2,
    name: "Grilled Chicken",
    description: "Tender grilled chicken with herbs and seasoning",
    price: "LKR 1,850",
    time: "18 min",
    image: chickenImg,
  },
  {
    id: 3,
    name: "Creamy Pasta with Chicken",
    description: "Cheese cream pasta with grilled chicken.",
    price: "LKR 980",
    time: "10 min",
    image: pastaImg,
  },
];

const FeaturedMenu = () => {
  return (
    <section className="w-full bg-[#1A2535] pt-[72px] pr-[24px] pb-[72px] pl-[24px] md:pr-[120px] md:pl-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-[56px] gap-6">
          <div>
            <span className="block text-orange-500 text-sm font-bold tracking-wide uppercase mb-3">
              Featured Menu
            </span>
            <h2 className="font-playfair font-bold text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-tight">
              Chef selected favorites.
            </h2>
          </div>

          <button
            type="button"
            className="self-start sm:self-auto px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200 whitespace-nowrap"
          >
            View Full Menu
          </button>
        </div>

        {/* Dish cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISHES.map((dish) => (
            <div key={dish.id} className="rounded-xl overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-[210px] object-cover"
              />
              <div className="pt-4">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
                  <span className="text-orange-500 text-lg font-bold">
                    {dish.price}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock size={13} />
                    {dish.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;