import { HeaderActions } from "../../../data/HeaderActions";

export default function KitchenDashboardHeader({ activeTab }) {
  const actions = HeaderActions[activeTab];

  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h1 className="text-[28px] font-bold text-[#f0f4f8]">
          Kitchen Display System
        </h1>

        <p className="text-[16px] text-[#556070]">
          Monitor kitchen orders, cooking progress, preparation times, and queue
          status.
        </p>
      </div>

      <div className="flex gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className={
              action.type === "primary"
                ? "px-4 rounded-[10px] py-2 bg-[#e67e22] text-[#f0f4f8] text-[14px] font-semibold "
                : "px-4 rounded-[10px] py-2 bg-[#243447] border border-white/10 font-medium text-[14px] text-[#f0f4f8]"
            }
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
