import { Search } from "lucide-react";

const SearchInput = ({ placeholder = "Search...", value, onChange }) => {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#101B2C] border border-slate-800 rounded-md pl-9 pr-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-200"
      />
    </div>
  );
};

export default SearchInput;