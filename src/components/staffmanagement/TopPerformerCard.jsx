const TopPerformerCard = ({
  initials = "KP",
  name = "Kasun Perera",
  role = "Head Waiter — Service",
  month = "June 2025",
  attendance = "98%",
  rating = "4.9",
  ordersServed = "324",
}) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">Top Performer</h2>
        <span className="text-amber-400 text-xs font-semibold border border-amber-700 bg-amber-500/10 rounded-full px-3 py-1">
          {month}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-orange-950 border border-orange-800 flex items-center justify-center text-orange-400 text-sm font-semibold shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{name}</p>
          <p className="text-gray-500 text-xs mt-0.5">{role}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-emerald-400 text-lg font-bold">{attendance}</p>
          <p className="text-gray-500 text-[11px] mt-0.5">Attendance</p>
        </div>
        <div>
          <p className="text-amber-400 text-lg font-bold">{rating}</p>
          <p className="text-gray-500 text-[11px] mt-0.5">Customer Rating</p>
        </div>
        <div>
          <p className="text-white text-lg font-bold">{ordersServed}</p>
          <p className="text-gray-500 text-[11px] mt-0.5">Orders Served</p>
        </div>
      </div>
    </div>
  );
};

export default TopPerformerCard;