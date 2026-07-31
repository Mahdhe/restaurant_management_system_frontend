import { useMemo, useState } from "react";
import heroimg from "../assets/hero1.jpg";

const menuItems = [
  {
    id: 1,
    name: "Garden Fresh Salad",
    description: "Fresh mixed greens with cucumber and tomato",
    price: 650,
    category: "Starters",
    image: "../assets/salad.jpg",
  },
  {
    id: 2,
    name: "Grilled Chiken",
    description: "Tender grilled chiken with herbs and seasoning",
    price: 1850,
    category: "Mains",
    image: "../assets/grilled-chicken.jpg",
  },
  {
    id: 3,
    name: "Wagyu Striploin",
    description: "Bone marrow butter, confit shallot",
    price: 12500,
    category: "Mains",
    image: "../assets/striploin.jpg",
  },
  {
    id: 4,
    name: "Butter-Poached Lobster",
    description: "Saffron risottto, brown butter emulsion",
    price: 1850,
    category: "Mains",
    image: "../assets/lobster.jpg",
  },
];
const categories = ["Starters", "Mains", "Desserts", "Drinks"];

export default function OrderOnlineEmpty() {
  const [orderType, setOrderType] = useState("Delivery");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Starters");
  const [cart, setCart] = useState([])

  const filteredItems = useMemo(() => {
    return 
  })

  return (
    <div className="min-h-screen">
      <main className="w-full bg-[#0F1923] h-[617px]">
        {/* Hero */}
        <section className="mx-auto max-w-285 py-18">
          <div
            className="relative min-h-[473px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${heroimg})` }}
          >
            <div className="absolute inset-0 bg-[#07131e]/70" />
            <div className="relative flex min-h-[430px] flex-col justify-center px-10 py-10">
              <p className="mb-5 text-[22px] font-semibold text-[#E67E22] leading-4.5 tracking-normal px-10">
                ORDER ONLINE
              </p>
              <h1 className="text-[56px] font-semibold text-white px-10 font-['DM_Sans'] leading-20 tracking-normal">
                Bring Versailles home
              </h1>
              <p className="mt-4 text-[24px] leading-5 font-bold text-[#F0F4F8] px-10 tracking-normal font-['Playfair_Display']">
                Order your Favorites for pickup or delivery - no account, no
                waiting on hold
              </p>
            </div>
          </div>
        </section>

        {/* Order Controls */}
        <section className="bg-[#0F1923]">
          <div className="px-5 py-2.5 bg-[#0F1923] bg-[radial-gradient(circle_at_85%_30%,rgba(56,85,120,0.18),transparent_45%)]">
            <div className="border border-slate-800 p-1.25 inline-flex rounded-full mx-22">
              {["Delivery", "Pickup"].map((type) => (
                <button
                  key={type}
                  onClick={() => setOrderType(type)}
                  className={`rounded-full text-sm px-5 py-2 transition ${orderType === type ? "bg-[#222a2e] text-[#ed850e]" : "text-slate-400 hover:text-white cursor-pointer"}`}
                >
                  {" "}
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-8.5">
            <div className="pl-5 py-6">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Menu Items"
                className="ml-22 w-[879px] h-10 border border-slate-600 rounded-[10px] bg-[#152438] px-2 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#ed850e]"
              />
            </div>

            <div className="flex flex-wrap gap-2 py-7">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full h-8 px-2.5 border font-semibold text-xs transition ${selectedCategory === category ? "border-[#a85d14] bg-[#241d18] text-[#ed850e]" : "border-slate-700 text-slate-400  hover:border-slate-500 hover:text-white"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu and cart */}
        <section className="mx-auto max-w-[1120px] px-5 py-20"></section>
      </main>
    </div>
  );
}
