const tabs = [
  {
    id: "dashboard",
    label: "Inventory Dashboard",
  },
  {
    id: "Stock-list",
    label: "Ingredients Stock List",
  },
  {
    id: "add-edit-stock",
    label: "Add/Edit Stock",
  },
  {
    id: "stockAlert",
    label: "Low Stock Alert",
  },
  {
    id: "supplier",
    label: "Supplier Management",
  },
  {
    id: "stock-track",
    label: "Stock Usage Tracking",
  },
];

export default function InventoryTabs({ activeTab, setActiveTab }) {
  return (
    <div className="bg-[#1c2c38] rounded-[14px] border border-white/10 p-1.5 sm:p-2 w-full sm:w-234 flex flex-wrap sm:flex-nowrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-2 sm:px-4 py-2 rounded-[10px] text-xs sm:text-sm font-medium flex-1 sm:flex-none whitespace-nowrap ${activeTab === tab.id ? "bg-[#e67e22] text-[#f0f4f8]" : "text-slate-400 hover:text-[#f0f4f8]"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
