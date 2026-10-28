const RefundSummaryCard = ({
  originalPayment = "LKR 5,164",
  refundAmount = "LKR 1,290",
  method = "Cash",
  requiresApproval = true,
  onConfirm,
}) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-5">
        Refund Summary
      </h2>

      <div className="mb-6">
        <div className="flex items-center justify-between py-3 border-b border-slate-800">
          <span className="text-gray-400 text-sm">Original Payment</span>
          <span className="text-white text-sm font-semibold">
            {originalPayment}
          </span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-slate-800">
          <span className="text-gray-400 text-sm">Refund Amount</span>
          <span className="text-red-400 text-sm font-semibold">
            {refundAmount}
          </span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-slate-800">
          <span className="text-gray-400 text-sm">Method</span>
          <span className="text-white text-sm font-medium">{method}</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-gray-400 text-sm">Requires Approval</span>
          <span
            className={`text-sm font-semibold ${
              requiresApproval ? "text-amber-400" : "text-emerald-400"
            }`}
          >
            {requiresApproval ? "Yes" : "No"}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onConfirm}
        className="w-full px-4 py-2.5 rounded-md bg-red-500/10 border border-red-700 text-red-400 text-sm font-semibold hover:bg-red-500/20 transition-colors duration-200"
      >
        Confirm Refund
      </button>
    </div>
  );
};

export default RefundSummaryCard;