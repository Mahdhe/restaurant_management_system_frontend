import { Bell, Search, Settings } from "lucide-react";

export default function Header({ user, page }) {
  return (
    <header className="sticky top-0 z-50 min-h-15 w-full border-b border-slate-800 bg-[#1a2535] font-dmsans">
      <div className="flex min-h-15 items-center justify-between gap-3 px-4 sm:px-6 lg:px-11">
        {/* Left - Page Information */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] sm:text-[12px] lg:text-[13px] text-[#556070]">
            {page.category}
          </p>

          <h1 className="truncate text-[16px] sm:text-[17px] lg:text-[19px] font-bold leading-6 text-[#f0f4f8]">
            {page.title}
          </h1>
        </div>

        {/* Right - Header Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Search - Tablet/Desktop */}
          <div className="hidden sm:flex h-10 w-44 md:w-56 lg:w-70 items-center gap-3 rounded-[10px] border border-[#3a4d62] px-3 py-2">
            <Search
              size={17}
              strokeWidth={2}
              className="shrink-0 text-[#556070]"
            />

            <input
              type="text"
              placeholder="Search Orders, tables..."
              className="min-w-0 w-full bg-transparent text-[13px] outline-none text-[#f0f4f8] placeholder:text-[#556070]"
            />
          </div>

          {/* Search Icon - Mobile */}
          <button
            type="button"
            className="grid h-9 w-9 sm:hidden shrink-0 place-items-center rounded-[10px] border border-[#3a4d62] bg-[#243447] text-[#8a9bb0]"
          >
            <Search size={17} />
          </button>

          {/* Notification */}
          <button
            type="button"
            className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-[10px] border border-[#3a4d62] bg-[#243447] text-[#e67e22] transition-colors hover:bg-[#2d4055]"
          >
            <Bell size={17} className="sm:h-4.5 sm:w-4.5" />
          </button>

          {/* Settings - Tablet/Desktop */}
          <button
            type="button"
            className="hidden sm:grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-[#3a4d62] bg-[#243447] text-[#8a9bb0] transition-colors hover:bg-[#2d4055]"
          >
            <Settings size={18} />
          </button>

          {/* User Avatar */}
          <button
            type="button"
            className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full bg-[#e67e22] text-[11px] sm:text-xs font-semibold text-white"
          >
            {user.initials}
          </button>
        </div>
      </div>
    </header>
  );
}
