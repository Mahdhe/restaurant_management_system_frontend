const tabs = [
  {
    id: "salesReport",
    label: "Sales Report",
  },
  {
    id: "peakHours",
    label: "Peak Hours",
  },
  {
    id: "popularItems",
    label: "Popular Item",
  },
  {
    id: "tableOccupancy",
    label: "Table Occupancy",
  },
  {
    id: "cancellation",
    label: "Cancellation",
  },
  {
    id: "inventoryUsage",
    label: "Inventory Usage",
  },
];

export default function AnalyticsTabs({ activeTab, setActiveTab }) {
  return (
    <div className="bg-[#1c2c38] rounded-[14px] border border-white/10 p-1.5 sm:p-2 w-full sm:w-185 flex flex-wrap sm:flex-nowrap">
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
