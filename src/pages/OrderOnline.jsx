import { useMemo, useState } from "react";
import heroimg from "../assets/hero1.jpg";
import saladImg from "../assets/salad.jpg";
import chickenImg from "../assets/grilled-chicken.jpg";
import striploinImg from "../assets/striploin.jpg";
import lobsterImg from "../assets/lobster.jpg";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
        <section className="mx-auto max-w-280 px-4 py-10 sm:px-5 sm:py-14 lg:px-0 lg:py-18">
          <div
            className="relative min-h-105 overflow-hidden bg-cover bg-center sm:min-h-118.25"
            style={{ backgroundImage: `url(${heroimg})` }}
          >
            <div className="absolute inset-0 bg-[#07131e]/70" />

            <div className="relative flex min-h-105 flex-col justify-center px-5 py-10 sm:min-h-107 sm:px-10">
              <p className="mb-5 px-0 text-[18px] font-semibold leading-3 tracking-normal text-[#E67E22] sm:px-10 sm:text-[22px]">
                ORDER ONLINE
              </p>

              <h1 className="px-0 font-playfair text-[38px] font-semibold leading-12 tracking-normal text-white sm:px-10 sm:text-[48px] sm:leading-16 lg:text-[56px] lg:leading-20">
                Bring Versailles home
              </h1>

              <p className="mt-4 px-0 font-playfair text-[17px] font-bold leading-6 tracking-normal text-[#F0F4F8] sm:px-10 sm:text-[20px] sm:leading-7 lg:text-[24px] lg:leading-5">
                Order your Favorites for pickup or delivery - no account, no
                waiting on hold
              </p>
            </div>
          </div>
        </section>

        {/* Order Controls */}
        <section className="bg-[#0F1923]">
          <div className="bg-[radial-gradient(circle_at_85%_30%,rgba(56,85,120,0.18),transparent_45%)] py-2.5">
            <div className="mx-auto max-w-280 px-4 sm:px-5 lg:px-0">
              <div className="inline-flex rounded-full border border-slate-800 p-1.25">
                {["Delivery", "Pickup"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`rounded-full px-4 py-2 text-sm transition sm:px-5 ${
                      orderType === type
                        ? "bg-[#222a2e] text-[#E67E22]"
                        : "cursor-pointer text-slate-400 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search + Categories */}
          <div className="mx-auto flex max-w-280 flex-col gap-3 px-4 sm:px-5 lg:flex-row lg:items-center lg:gap-5 lg:px-0">
            <div className="py-4 lg:py-6">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Menu Items"
                className="h-10 w-full rounded-[10px] border border-slate-600 bg-[#152438] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#E67E22] sm:w-full lg:w-205"
              />
            </div>

            <div className="flex flex-wrap gap-2 pb-5 lg:py-7">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`h-8 cursor-pointer rounded-full border px-2.5 text-xs font-semibold transition ${
                    selectedCategory === category
                      ? "border-[#E67E22] bg-[#241d18] text-[#E67E22]"
                      : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu and cart */}
        <section className="mx-auto bg-[#0F1923] px-4 py-10 sm:px-5 sm:py-14 lg:py-18">
          <div className="mx-auto flex max-w-280 flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 lg:px-0">
            {/* Menu */}
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:w-2/3">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <article
                    key={item.id}
                    className="overflow-hidden rounded-xl border border-slate-700/60 bg-[#1C2A38] shadow-lg"
                  >
                    <img
                      src={item.image}
                      className="h-48 w-full object-cover"
                      alt={item.name}
                    />

                    <div className="px-4 py-3 sm:px-5">
                      <h2 className="font-playfair text-[16px] font-semibold leading-4.5 text-[#F0F4F8]">
                        {item.name}
                      </h2>

                      <p className="mt-1 w-full text-[12px] font-normal leading-4.5 tracking-[0.008em] text-[#8A9BB0]">
                        {item.description}
                      </p>

                      <div className="mt-3 flex items-center justify-between border-t border-slate-600/40 pt-2.5">
                        <span className="font-playfair text-[18px] font-bold leading-5 text-[#E67E22] sm:text-[24px]">
                          {formatPrice(item.price)}
                        </span>

                        <button
                          onClick={() => addToCart(item)}
                          aria-label={`Add ${item.name} to order`}
                          className="grid h-9.5 w-9.5 shrink-0 cursor-pointer place-items-center rounded-full border border-[#E67E221F] bg-[#E67E220F] text-2xl leading-none text-[#ed850e] transition hover:bg-[#E67E221F]"
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full rounded-xl border border-dashed border-slate-700 py-16 text-center text-slate-400">
                  No menu items found
                </div>
              )}
            </div>

            {/* Cart */}
            <aside
              className={`h-fit w-full rounded-xl px-5 py-8 sm:px-7.5 sm:py-10 lg:w-137.5 lg:sticky lg:top-6 ${
                cart.length > 0
                  ? "border border-[#F39C1266] bg-[#0F1923]"
                  : "bg-[#1C2A38]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-[24px] font-bold text-white">Your Order</h2>
              </div>

              {cart.length === 0 ? (
                <p className="py-8.5 text-center text-[13px] text-white">
                  Your cart is empty - add a dish to begin.
                </p>
              ) : (
                <div className="my-6 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-slate-600/50 pb-2"
                    >
                      <div className="flex justify-between gap-4">
                        <div className="min-w-0">
                          <p className="truncate font-playfair text-[14px] font-semibold tracking-wider text-[#F0F4F8]">
                            {item.name}
                          </p>

                          <p className="mt-1 text-[11px] text-[#F0F4F8B3]">
                            {formatPrice(item.price)}
                          </p>
                        </div>

                        <div className="flex h-8 shrink-0 items-center">
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

                  <div className="border-b border-slate-600/50 pb-2 pt-5 text-[#F0F4F8B3]">
                    <div className="flex justify-between">
                      <span className="text-[13px]">Subtotal</span>

                      <span className="text-[13px]">
                        {formatPrice(orderTotal)}
                      </span>
                    </div>

                    <div className="flex justify-between pt-4">
                      <span className="text-[13px]">Delivery Fee</span>

                      <span className="text-[13px]">
                        {formatPrice(orderType === "Delivery" ? 500 : 0)}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between pt-2 text-[#F0F4F8]">
                    <span className="pt-1 text-[16px] font-semibold">
                      Total
                    </span>

                    <span className="font-playfair text-[20px] font-bold text-[#E67E22] sm:text-[24px]">
                      {formatPrice(total)}
                    </span>
                  </div>

                  {/* Form */}
                  <div className="space-y-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-[14px] text-[#F0F4F8]">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-[10px] border border-slate-600 px-3 py-2 text-slate-200 outline-none placeholder:text-[14px] placeholder:text-[#8A9BB0] focus:border-[#E67E2266]"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[14px] text-[#F0F4F8]">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        placeholder="+94 77 123 4567"
                        className="w-full rounded-[10px] border border-slate-600 px-3 py-2 text-slate-200 outline-none placeholder:text-[14px] placeholder:text-[#8A9BB0] focus:border-[#E67E2266]"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[14px] text-[#F0F4F8]">
                        Delivery Address
                      </label>

                      <input
                        type="text"
                        placeholder="Street, City"
                        className="w-full rounded-[10px] border border-slate-600 px-3 py-2 text-slate-200 outline-none placeholder:text-[14px] placeholder:text-[#8A9BB0] focus:border-[#E67E2266]"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[14px] text-[#F0F4F8]">
                        Order Notes(Optional)
                      </label>

                      <textarea
                        name="orderNotes"
                        rows="3"
                        className="w-full rounded-[10px] border border-slate-600 px-3 py-2 text-slate-200 outline-none placeholder:text-[14px] placeholder:text-[#8A9BB0] focus:border-[#E67E2266]"
                        placeholder="Allergies, Special Requests..."
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                disabled={cart.length === 0}
                onClick={() => {
                  if (cart.length > 0) {
                    navigate("/order-confirmation");
                  } else {
                    alert("Add items before placing an order.");
                  }
                }}
                className={`w-full cursor-pointer rounded-[10px] px-4.5 py-2.5 text-[14px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
                  cart.length > 0
                    ? "bg-[#E67E22] text-slate-50"
                    : "border border-slate-300 bg-[#243447] text-slate-50"
                }`}
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
