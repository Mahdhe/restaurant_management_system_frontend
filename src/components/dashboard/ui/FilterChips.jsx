const FilterChips = ({ filters, activeFilter, onChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 bg-[#1C2A38] border border-slate-800 rounded-lg p-3 mb-6">
      {filters.map((filter) => {
        const isActive = filter === activeFilter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={
              isActive
                ? "px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500 text-orange-500 text-sm font-medium transition-colors duration-200"
                : "px-4 py-1.5 rounded-full bg-transparent border border-slate-700 text-gray-400 text-sm font-medium hover:border-slate-500 hover:text-gray-200 transition-colors duration-200"
            }
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;