const PaymentSummaryCard = ({
  grandTotal = "LKR 5,164",
  paid = "LKR 6,000",
  change = "LKR 836",
}) => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-5">
        Payment Summary
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <span className="text-gray-400 text-sm">Grand Total</span>
          <span className="text-white text-sm font-medium">{grandTotal}</span>
        </div>
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <span className="text-gray-400 text-sm">Paid</span>
          <span className="text-white text-sm font-medium">{paid}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white text-sm font-semibold">Change</span>
          <span className="text-orange-500 text-base font-bold">
            {change}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummaryCard;