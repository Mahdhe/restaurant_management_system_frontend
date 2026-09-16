export default function InventoryHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
      <div className="min-w-0">
        <h1 className="text-[28px] sm:text-[25px] md:text-[28px] font-bold text-[#f0f4f8]">
          Inventory & Stock Management
        </h1>

        <p className="text-[13px] sm:text-[14px] md:text-[16px] text-[#556070]">
          Track ingredients, stock levels, suppliers, reorder alerts and usage
          history
        </p>
      </div>

      <div className="flex flex-wrap sm:gap-3 gap-2 shrink-0">
        <button className="px-3 sm:px-4 rounded-[10px] py-2 bg-[#243447] border border-white/10 font-medium sm:text-[14px] text-[12px] text-[#f0f4f8] whitespace-nowrap">
          Export Stock
        </button>

        <button className="px-3 sm:px-4 py-2 rounded-[10px] text-[#f0f4f8] bg-[#e67e22] font-semibold sm:text-[14px] text-[12px] whitespace-nowrap">
          + Add Stock Item
        </button>
      </div>
    </div>
  );
}
