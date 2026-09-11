const tabs = [
  {
    id: "queue",
    label: "Kitchen Queue",
  },
  {
    id: "progress",
    label: "In-Progress Orders",
  },
  {
    id: "completed",
    label: "Completed Archive",
  },
];

export default function KitchenTabs({ activeTab, setActiveTab }) {
  return (
    <div className="bg-[#1c2a38] rounded-[14px] border border-white/10 w-full sm:w-111 p-1.5 sm:p-2 flex flex-wrap sm:flex-nowrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-2 sm:px-4 py-2 rounded-[10px] text-xs sm:text-sm font-medium flex-1 sm:flex-none whitespace-nowrap ${
            activeTab === tab.id
              ? "bg-[#e67e22] text-[#f0f4f8]"
              : "text-slate-400 hover:text-[#f0f4f8]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
