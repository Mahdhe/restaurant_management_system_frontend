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
    <div className="bg-[#1c2a38] rounded-[14px] border border-white/10 w-111 p-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-[10px] text-sm font-medium ${activeTab === tab.id ? "bg-[#e67e22] text-[#f0f4f8]" : "text-slate-400 hover:text-[#f0f4f8]"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
