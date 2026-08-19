/**
 * Reusable pill-style tab bar.
 *
 * Usage:
 *   const [activeTab, setActiveTab] = useState("Floor Map View");
 *   <Tabs
 *     tabs={["Floor Map View", "Table Details", "Add/ Edit Table"]}
 *     activeTab={activeTab}
 *     onChange={setActiveTab}
 *   />
 */
const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex items-center gap-2 bg-[#1C2A38] border border-slate-800 rounded-lg p-1.5 w-fit mb-6">
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={
              isActive
                ? "px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold transition-colors duration-200"
                : "px-4 py-2 rounded-md text-gray-400 text-sm font-medium hover:text-gray-200 transition-colors duration-200"
            }
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;    