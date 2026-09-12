import { useState } from "react";
import { Check } from "lucide-react";
import FormField from "../dashboard/ui/FormField";
import StatusBadge from "../dashboard/ui/StatusBadge";

const REFUND_ITEMS = [
  { id: 1, name: "Garden Fresh Salad ×1", price: "LKR 650" },
  { id: 2, name: "Garden Chicken ×2", price: "LKR 3250" },
  { id: 3, name: "Fresh Lime Juice ×2", price: "LKR 1200" },
];

const RefundItemsCard = ({ onSelectionChange }) => {
  const [selectedIds, setSelectedIds] = useState([1, 3]);
  const [refundReason, setRefundReason] = useState("Customer complaint");
  const [internalNote, setInternalNote] = useState(
    "Customer requested refund for salad and juice."
  );

  const toggleItem = (id) => {
    const updated = selectedIds.includes(id)
      ? selectedIds.filter((itemId) => itemId !== id)
      : [...selectedIds, id];
    setSelectedIds(updated);
    onSelectionChange?.(updated);
  };

  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">
          Select Refund Items
        </h2>
        <StatusBadge status="Refund Flow" />
      </div>

      <div className="space-y-3 mb-5">
        {REFUND_ITEMS.map((item) => {
          const isSelected = selectedIds.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              className={`w-full flex items-center justify-between gap-3 rounded-lg border px-4 py-3 transition-colors duration-200 ${
                isSelected
                  ? "border-orange-500 bg-orange-500/5"
                  : "border-slate-700 bg-[#0B1220] hover:border-slate-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-5 h-5 rounded flex items-center justify-center border shrink-0 ${
                    isSelected
                      ? "bg-orange-500 border-orange-500"
                      : "border-slate-600"
                  }`}
                >
                  {isSelected && <Check size={13} className="text-white" />}
                </span>
                <span className="text-gray-200 text-sm">{item.name}</span>
              </div>
              <span className="text-white text-sm font-medium">
                {item.price}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mb-5">
        <FormField
          label="Refund Reason"
          as="select"
          options={[
            "Customer complaint",
            "Wrong order",
            "Food quality issue",
            "Duplicate charge",
            "Other",
          ]}
          value={refundReason}
          onChange={setRefundReason}
        />
      </div>

      <FormField
        label="Internal Note"
        as="textarea"
        rows={3}
        value={internalNote}
        onChange={setInternalNote}
      />
    </div>
  );
};

export default RefundItemsCard;