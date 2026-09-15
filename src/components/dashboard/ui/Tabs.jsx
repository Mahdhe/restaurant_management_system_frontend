import React from 'react';

const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="w-full max-w-full overflow-x-auto mb-6 no-scrollbar">
      <div className="inline-flex items-center gap-2 bg-[#1C2A38] border border-slate-800 rounded-lg p-1.5 min-w-max">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onChange(tab)}
              className={
                isActive
                  ? "px-4 py-2 rounded-md bg-[#E67E22] text-white text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
                  : "px-4 py-2 rounded-md text-gray-400 text-sm font-medium hover:text-gray-200 transition-colors duration-200 whitespace-nowrap"
              }
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;