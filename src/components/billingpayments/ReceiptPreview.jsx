const RECEIPT_ITEMS = [
  { id: 1, name: "Garden Fresh Salad ×1", amount: "650" },
  { id: 2, name: "Grilled Chicken ×2", amount: "3,700" },
  { id: 3, name: "Fresh Lime Juice ×2", amount: "640" },
  { id: 4, name: "Coupon", amount: "-500" },
  { id: 5, name: "Tax + Service", amount: "674" },
];

const ReceiptPreview = ({
  receiptNumber = "RCT-2024-0412",
  date = "20 May",
  time = "8:05 PM",
  total = "LKR 5,164",
}) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-6 sm:p-10 flex justify-center">
      <div className="w-full max-w-sm bg-[#FAF7F0] rounded-lg px-6 py-8 font-jetbrains text-[#1A1A1A]">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold tracking-wide">Restaurant MS</h2>
          <p className="text-xs mt-1">Colombo, Sri Lanka</p>
          <p className="text-xs mt-1">Receipt #{receiptNumber}</p>
          <p className="text-xs mt-1">
            {date} · {time}
          </p>
        </div>

        {/* Line items */}
        <div className="mb-4">
          {RECEIPT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-dashed border-gray-300 py-2 text-sm"
            >
              <span>{item.name}</span>
              <span>{item.amount}</span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-4 mb-4">
          <span className="text-base font-bold">TOTAL</span>
          <span className="text-lg font-bold">{total}</span>
        </div>

        <p className="text-center text-xs">Thank you. Visit again!</p>
      </div>
    </div>
  );
};

export default ReceiptPreview;