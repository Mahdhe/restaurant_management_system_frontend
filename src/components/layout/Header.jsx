import { Bell, Search, Settings } from "lucide-react";

export default function Header({ user, page }) {
  return (
    <header className="sticky top-0 z-50 flex items-center h-15 justify-between border-b border-slate-800 bg-[#1a2535] px-11 font-dmsans ">
      <div>
        <p className="text-[13px] text-[#556070]">{page.category}</p>
        <h1 className="text-[19px] text-[#f0f4f8] font-bold leading-6">
          {page.title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex w-70 h-10 rounded-[10px] gap-3 border border-[#3a4d62] px-3 py-2">
          <Search size={17} strokeWidth={2} className="text-[#556070] pt-1"/>
          <input
            type="text"
            placeholder="Search Orders, tables..."
            className="w-full text-[14px] outline-none bg-transparent placeholder:text-[#556070] text-[#556070]"
          />
        </div>

        <button
          type="button"
          className="grid h-10 w-10 rounded-[10px] place-items-center border border-[#3a4d62] bg-[#243447] text-[#e67e22] transition"
        >
          <Bell size={18} />
        </button>

        <button
          type="button"
          className="grid h-10 w-10 rounded-[10px] place-items-center border border-[#3a4d62] bg-[#243447] text-[#8a9bb0] transition"
        >
          <Settings size={18} />
        </button>

        <button
          className="grid h-10 w-10 rounded-full place-items-center bg-[#e67e22] text-xs text-white transition font-semibold"
          type="button"
        >
          {user.initials}
        </button>
      </div>
    </header>
  );
}
