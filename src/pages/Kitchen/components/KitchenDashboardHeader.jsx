import { HeaderActions } from "../../../data/KitchenData/ActionButtons";

export default function KitchenDashboardHeader({ activeTab }) {
  const actions = HeaderActions[activeTab];

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
      <div className="min-w-0">
        <h1 className="text-[22px] sm:text-[25px] md:text-[28px] font-bold text-[#f0f4f8]">
          Kitchen Display System
        </h1>

        <p className="text-[13px] sm:text-[14px] md:text-[16px] text-[#556070]">
          Monitor kitchen orders, cooking progress, preparation times, and queue
          status.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 shrink-0">
        {actions.map((action) => (
          <button
            key={action.label}
            className={
              action.type === "primary"
                ? "px-3 sm:px-4 rounded-[10px] py-2 bg-[#e67e22] text-[#f0f4f8] text-[12px] sm:text-[14px] font-semibold whitespace-nowrap"
                : "px-3 sm:px-4 rounded-[10px] py-2 bg-[#243447] border border-white/10 font-medium text-[12px] sm:text-[14px] text-[#f0f4f8] whitespace-nowrap"
            }
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
