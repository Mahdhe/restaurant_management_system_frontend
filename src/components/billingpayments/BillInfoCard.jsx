import StatusBadge from "../dashboard/ui/StatusBadge";

const BILL_INFO_ROWS = [
  { label: "Order ID", value: "ORD-0412" },
  { label: "Table", value: "Table 04 - Section A" },
  { label: "Waiter", value: "Kasun Perera" },
  { label: "Guests", value: "3 Pax" },
];

const BillInfoCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">Bill Info</h2>
        <StatusBadge status="Unpaid" />
      </div>

      <div>
        {BILL_INFO_ROWS.map((row, index) => (
          <div
            key={row.label}
            className={`flex items-center justify-between py-3 ${
              index !== BILL_INFO_ROWS.length - 1
                ? "border-b border-slate-800"
                : ""
            }`}
          >
            <span className="text-gray-400 text-sm">{row.label}</span>
            <span className="text-white text-sm font-medium text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillInfoCard;