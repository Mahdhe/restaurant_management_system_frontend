import StatusBadge from "../dashboard/ui/StatusBadge";

const ORDER_ITEMS = [
  { id: 1, name: "Garden Fresh Salad ×1", price: "LKR 650" },
  { id: 2, name: "Garden Chicken ×2", price: "LKR 3250" },
  { id: 3, name: "Fresh Lime Juice ×2", price: "LKR 1200" },
];

const CurrentOrderCard = ({
  orderId = "ORD-4012",
  waiter = "Kasun P.",
  startedAt = "7.12 pm",
}) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">Current Order</h2>
        <StatusBadge status="Cooking" />
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between py-3 border-b border-slate-800">
          <span className="text-gray-400 text-sm">Order ID:</span>
          <span className="text-white text-sm font-medium">{orderId}</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-slate-800">
          <span className="text-gray-400 text-sm">Waiter</span>
          <span className="text-white text-sm font-medium">{waiter}</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-gray-400 text-sm">Started</span>
          <span className="text-white text-sm font-medium">{startedAt}</span>
        </div>
      </div>

      <div className="space-y-2 mb-5">
        {ORDER_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#243447] rounded-md px-4 py-3"
          >
            <span className="text-gray-200 text-sm">{item.name}</span>
            <span className="text-gray-300 text-sm">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="px-5 py-2.5 rounded-md bg-[#E67E22] text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
        >
          View Full Order
        </button>
        <button
          type="button"
          className="px-5 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-[#E67E22  ] hover:text-[#E67E22 ] transition-colors duration-200"
        >
          Request Bill
        </button>
      </div>
    </div>
  );
};

export default CurrentOrderCard;