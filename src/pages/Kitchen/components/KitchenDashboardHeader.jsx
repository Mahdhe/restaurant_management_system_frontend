export default function KitchenDashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h1 className="text-[28px] font-bold text-[#f0f4f8]">
          Kitchen Display System
        </h1>

        <p className="text-[16px] text-[#556070]">
          Monitor kitchen orders, cooking progress, preparation times, and queue
          status.
        </p>
      </div>

      <div className="flex gap-3">
        <button className="px-4 rounded-[10px] py-2 bg-[#243447] border border-white/10 font-medium text-[14px] text-[#f0f4f8] hover:bg-slate-700">
          Print Queue
        </button>

        <button className="px-4 rounded-[10px] py-2 bg-[#e67e22] text-[#f0f4f8] text-[14px] font-semibold">
          Start Next Order
        </button>
      </div>
    </div>
  );
}
