import { useMemo, useState } from "react";
import heroimg from "../assets/hero1.jpg";
import saladImg from "../assets/salad.jpg";
import chickenImg from "../assets/grilled-chicken.jpg";
import striploinImg from "../assets/striploin.jpg";
import lobsterImg from "../assets/lobster.jpg";
import { Plus } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Garden Fresh Salad",
    description: "Fresh mixed greens with cucumber and tomato",
    price: 650,
    category: "Starters",
    image: saladImg,
  },
  {
    id: 2,
    name: "Grilled Chicken",
    description: "Tender grilled chicken with herbs and seasoning",
    price: 1850,
    category: "Starters",
    image: chickenImg,
  },
  {
    id: 3,
    name: "Wagyu Striploin",
    description: "Bone marrow butter, confit shallot",
    price: 12500,
    category: "Starters",
    image: striploinImg,
  },
  {
    id: 4,
    name: "Butter-Poached Lobster",
    description: "Saffron risotto, brown butter emulsion",
    price: 1850,
    category: "Starters",
    image: lobsterImg,
  },
];
const categories = ["Starters", "Mains", "Desserts", "Drinks"];

function formatPrice(price) {
  return `LKR ${price.toLocaleString()}`;
}

export default function OrderOnline() {
  const [orderType, setOrderType] = useState("Delivery");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Starters");
  const [cart, setCart] = useState([]);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = item.category === selectedCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const exiting = currentCart.find((cartItem) => cartItem.id === item.id);

      if (exiting) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const orderTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const total = orderTotal + (orderType === "Delivery" ? 500 : 0);

  return (
    <div className="min-h-screen font-dmsans">
      <main className="w-full bg-[#0F1923] min-h-screen">
        {/* Hero */}
        <section className="mx-auto max-w-280 py-18">
          <div
            className="relative min-h-[473px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${heroimg})` }}
          >
            <div className="absolute inset-0 bg-[#07131e]/70" />
            <div className="relative flex min-h-107 flex-col justify-center px-10 py-10">
              <p className=" mb-5 text-[22px] font-semibold text-[#E67E22] leading-3 tracking-normal px-10">
                ORDER ONLINE
              </p>
              <h1 className="font-playfair text-[56px] font-semibold text-white px-10 leading-20 tracking-normal">
                Bring Versailles home
              </h1>
              <p className="font-playfair mt-4 text-[24px] leading-5 font-bold text-[#F0F4F8] px-10 tracking-relaxed">
                Order your Favorites for pickup or delivery - no account, no
                waiting on hold
              </p>
            </div>
          </div>
        </section>

        {/* Order Controls */}
        <section className="bg-[#0F1923]">
          <div className="py-2.5 bg-[radial-gradient(circle_at_85%_30%,rgba(56,85,120,0.18),transparent_45%)]">
            <div className="mx-auto max-w-280">
              <div className="border border-slate-800 p-1.25 inline-flex rounded-full">
                {["Delivery", "Pickup"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`rounded-full text-sm px-5 py-2 transition ${orderType === type ? "bg-[#222a2e] text-[#E67E22]" : "text-slate-400 hover:text-white cursor-pointer"}`}
                  >
                    {" "}
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-280 flex gap-5 xl:px-0">
            <div className="py-6">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Menu Items"
                className="w-205 h-10 border border-slate-600 rounded-[10px] bg-[#152438] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#E67E22]"
              />
            </div>

            <div className="flex flex-wrap gap-2 py-7">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full h-8 px-2.5 border font-semibold text-xs transition cursor-pointer ${selectedCategory === category ? "border-[#E67E22] bg-[#241d18] text-[#E67E22]" : "border-slate-700 text-slate-400  hover:border-slate-500 hover:text-white"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu and cart */}
        <section className="mx-auto px-5 py-18 bg-[#0F1923]">
          <div className="flex items-start mx-auto max-w-280 gap-10 xl:px-0">
            <div className="grid grid-cols-2 gap-5 w-2/3 self-start">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <article
                    key={item.id}
                    className="overflow-hidden border border-slate-700/60 rounded-xl bg-[#1C2A38] shadow-lg"
                  >
                    <img
                      src={item.image}
                      className="h-48 object-cover w-full"
                      alt={item.name}
                    />

                    <div className="py-3 px-5">
                      <h2 className="font-playfair text-[16px] text-[#F0F4F8] font-semibold leading-4.5">
                        {item.name}
                      </h2>
                      <p className="mt-1 w-52 text-[#8A9BB0] text-[12px] leading-4.5 tracking-[0.008em] font-normal">
                        {item.description}
                      </p>

                      <div className="mt-3 flex items-center justify-between border-t border-slate-600/40 pt-2.5">
                        <span className="text-[#E67E22] font-playfair text-[24px] font-bold leading-4.5">
                          {formatPrice(item.price)}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          aria-label={`Add ${item.name} to order`}
                          className="grid rounded-full h-9.5 w-9.5 place-items-center border border-[#E67E221F] bg-[#E67E220F] text-2xl text-[#ed850e] leading-none transition hover:bg-[#E67E221F] cursor-pointer"
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full border border-dashed border-slate-700 rounded-xl py-16 text-center text-slate-400">
                  No menu items found
                </div>
              )}
            </div>

            {/* Cart */}
            <aside
              className={`w-137.5 rounded-xl h-fit py-10 px-7.5 lg:sticky lg:top-6 ${cart.length > 0 ? "bg-[#0F1923] border border-[#F39C1266]" : "bg-[#1C2A38]"}`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-[24px] text-white font-bold">Your Order</h2>
              </div>

              {cart.length === 0 ? (
                <p className="py-8.5 text-[13px] text-center text-white">
                  Your cart is empty - add a dish to begin.
                </p>
              ) : (
                <div className="my-6 space-y-4 ">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="pb-2 border-b border-slate-600/50"
                    >
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="font-playfair font-semibold text-[#F0F4F8] text-[14px] tracking-wider">
                            {item.name}
                          </p>
                          <p className="mt-1 text-[#F0F4F8B3] text-[11px] font-lighter">
                            {formatPrice(item.price)}
                          </p>
                        </div>

                        <div className="flex h-8 items-center ">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 text-white"
                          >
                            -
                          </button>
                          <span className="px-2 text-[14px] text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="text-[#F0F4F8B3] border-b border-slate-600/50 pb-2 pt-5">
                    <div className="flex justify-between">
                      <span className=" text-[13px]">Subtotal</span>
                      <span className=" text-[13px]">
                        {formatPrice(orderTotal)}
                      </span>
                    </div>

                    <div className="flex justify-between pt-4">
                      <span className=" text-[13px]">Delivery Fee</span>
                      <span className=" text-[13px]">
                        {formatPrice(orderType === "Delivery" ? 500 : 0)}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between pt-2 text-[#F0F4F8]">
                    <span className="text-[16px] pt-1 font-semibold">
                      Total
                    </span>
                    <span className="text-[#E67E22] font-playfair font-bold text-[24px]">
                      {formatPrice(total)}
                    </span>
                  </div>

                  {/* form */}
                  <div className="space-y-3">
                    <div className="flex-col gap-1 flex">
                      <label className="text-[14px] text-[#F0F4F8]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="border border-slate-600 rounded-[10px] text-slate-200 px-3 py-2 placeholder:text-[#8A9BB0] placeholder:text-[14px] outline-none focus:border-[#E67E2266]"
                      />
                    </div>
                    <div className="flex-col gap-1 flex">
                      <label className="text-[14px] text-[#F0F4F8]">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="+94 77 123 4567"
                        className="border border-slate-600 rounded-[10px] text-slate-200 px-3 py-2 placeholder:text-[#8A9BB0] placeholder:text-[14px] outline-none focus:border-[#E67E2266]"
                      />
                    </div>
                    <div className="flex-col gap-1 flex">
                      <label className="text-[14px] text-[#F0F4F8]">
                        Delivery Address
                      </label>
                      <input
                        type="text"
                        placeholder="Street, City"
                        className="border border-slate-600 rounded-[10px] text-slate-200 px-3 py-2 placeholder:text-[#8A9BB0] placeholder:text-[14px] outline-none focus:border-[#E67E2266]"
                      />
                    </div>
                    <div className="flex-col gap-1 flex">
                      <label className="text-[14px] text-[#F0F4F8]">
                        Order Notes(Optional)
                      </label>
                      <textarea
                        name="orderNotes"
                        id=""
                        cols="30"
                        rows="3"
                        className="border border-slate-600 rounded-[10px] text-slate-200 px-3 py-2 placeholder:text-[#8A9BB0] placeholder:text-[14px] outline-none focus:border-[#E67E2266]"
                        placeholder="Allergies, Special Requests..."
                      ></textarea>{" "}
                    </div>
                  </div>
                </div>
              )}

              <button
                disabled={cart.length === 0}
                onClick={() =>
                  alert(
                    cart.length
                      ? `$(orderType) order placed successfully!`
                      : "Add items before placing an order.",
                  )
                }
                className={`w-full rounded-[10px] py-2.5 px-4.5 text-[14px] transition font-semibold cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${cart.length > 0 ? "bg-[#E67E22] text-slate-50" : "bg-[#243447] text-slate-50 border border-slate-300"}`}
              >
                PLACE ORDER
              </button>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
