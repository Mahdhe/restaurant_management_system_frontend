export default function InventoryHeader() {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h1 className="text-[28px] font-bold text-[#f0f4f8]">
          Inventory & Stock Management
        </h1>

        <p className="text-[16px] text-[#556070]">
          Track ingredients, stock levels, suppliers, reorder alerts and usage
          history
        </p>
      </div>

      <div className="flex gap-3">
        <button className="px-4 rounded-[10px] py-2 bg-[#243447] border border-white/10 font-medium text-[14px] text-[#f0f4f8]">
          Export Stock
        </button>

        <button className="px-4 py-2 rounded-[10px] text-[#f0f4f8] bg-[#e67e22] font-semibold text-[14px]">
          + Add Stock Item
        </button>
      </div>
    </div>
  );
}
