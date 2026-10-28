const TAX_ROWS = [
  { label: "Food Tax", value: "10%" },
  { label: "Service", value: "5%" },
];

const TaxPreviewCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">Tax Preview</h2>

      <div className="mb-5">
        {TAX_ROWS.map((row, index) => (
          <div
            key={row.label}
            className={`flex items-center justify-between py-3 ${
              index !== TAX_ROWS.length - 1 ? "border-b border-slate-800" : ""
            }`}
          >
            <span className="text-gray-400 text-sm">{row.label}</span>
            <span className="text-white text-sm font-medium">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="w-full px-4 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
      >
        Configure Tax
      </button>
    </div>
  );
};

export default TaxPreviewCard;