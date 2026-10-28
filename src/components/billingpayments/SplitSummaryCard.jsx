const SplitSummaryCard = ({
  grandTotal = "LKR 5164",
  assignedTotal = "LKR 5164",
  balance = "LKR 0",
  onContinue,
}) => {
  const isBalanced = balance === "LKR 0";

  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-5">
        Split Summary
      </h2>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Grand Total</span>
          <span className="text-orange-500 text-sm font-semibold">
            {grandTotal}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Assigned Total</span>
          <span className="text-white text-sm font-semibold">
            {assignedTotal}
          </span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <span className="text-gray-400 text-sm">Balance</span>
          <span
            className={`text-sm font-semibold ${
              isBalanced ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {balance}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onContinue}
        disabled={!isBalanced}
        className={`w-full px-4 py-3 rounded-md text-sm font-semibold transition-colors duration-200 ${
          isBalanced
            ? "bg-[#E67E22] text-white hover:bg-orange-600"
            : "bg-slate-800/50 text-gray-600 cursor-not-allowed"
        }`}
      >
        Continue Payment
      </button>
    </div>
  );
};

export default SplitSummaryCard;