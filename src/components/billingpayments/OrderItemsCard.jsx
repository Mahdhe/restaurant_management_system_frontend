const ORDER_ITEMS = [
  {
    id: 1,
    icon: "🥗",
    name: "Garden Fresh Salad",
    detail: "Qty 1 · Unit LKR 650",
    price: "LKR 650",
  },
  {
    id: 2,
    icon: "🍗",
    name: "Grilled Chicken",
    detail: "Qty 2 · Unit LKR 1,850 · Extra sauce",
    price: "LKR 1200",
  },
  {
    id: 3,
    icon: "🥤",
    name: "Fresh Lime Juice",
    detail: "Qty 2 · Unit LKR 320",
    price: "LKR 1050",
  },
];

const OrderItemsCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">Order Items</h2>
        <button
          type="button"
          className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
        >
          Edit Items
        </button>
      </div>

      <div className="mb-5">
        {ORDER_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-start justify-between gap-3 py-4 ${
              index !== ORDER_ITEMS.length - 1
                ? "border-b border-slate-800"
                : ""
            }`}
          >
            <div className="flex items-start gap-3 min-w-0">
              <span className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-base shrink-0">
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="text-white text-sm font-medium truncate">
                  {item.name}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
              </div>
            </div>
            <span className="text-white text-sm font-medium shrink-0">
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {/* Totals breakdown */}
      <div className="bg-[#243447] border border-slate-800 rounded-xl p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
          <span className="text-gray-400 text-sm">Display Currency</span>
          <select className="bg-[#243447] border border-slate-700 rounded-md px-9 py-2 text-white text-sm focus:outline-none focus:border-[#E67E22] w-full sm:w-auto ">
            <option>LKR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Subtotal</span>
            <span className="text-gray-200 text-sm">LKR 4,990</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Coupon Discount</span>
            <span className="text-gray-200 text-sm">-LKR 500</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Tax (10%)</span>
            <span className="text-gray-200 text-sm">LKR 499</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Service Charge (5%)</span>
            <span className="text-gray-200 text-sm">LKR 250</span>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
          <span className="text-white text-base font-semibold">
            Grand Total
          </span>
          <span className="text-[#E67E22] text-xl font-bold">LKR 5,739</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItemsCard;