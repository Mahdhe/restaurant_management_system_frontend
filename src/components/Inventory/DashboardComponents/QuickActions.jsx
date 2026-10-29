const Buttons = [
  {
    id: "add",
    label: "+ Add Stock Item",
    buttonColor: "bg-[#e67e22]",
    borderColor: "border-none",
    textColor: "text-[#f0f4f8]",
  },
  {
    id: "create",
    label: "Create purchase Order",
    buttonColor: "bg-[#243447]",
    borderColor: "border-white/15",
    textColor: "text-[#f0f4f8]",
  },
  {
    id: "update",
    label: "Update Stock Count",
    buttonColor: "bg-[#243447]",
    borderColor: "border-white/15",
    textColor: "text-[#f0f4f8]",
  },
  {
    id: "view",
    label: "View Critical Alerts",
    buttonColor: "bg-[#e74c3c1a]",
    borderColor: "border-[#e74c3c]",
    textColor: "text-[#e74c3c]",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-[14px] border border-white/15 bg-[#1c2a38] w-full min-w-0">
      {/* header */}
      <div className="border-b border-white/15 px-4 sm:px-5 pt-4 sm:pt-5 pb-2.5">
        <h2 className="text-[16px] sm:text-[18px] font-bold text-[#f0f4f8]">
          Quick Actions
        </h2>
      </div>

      {/* buttons */}
      <div className="space-y-2 py-2 px-4 sm:px-5">
        {Buttons.map((button) => (
          <button
            key={button.id}
            className={`h-9 w-full rounded-[10px] text-[13px] sm:text-[14px] font-semibold border ${button.borderColor} ${button.buttonColor} ${button.textColor}`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </section>
  );
}
