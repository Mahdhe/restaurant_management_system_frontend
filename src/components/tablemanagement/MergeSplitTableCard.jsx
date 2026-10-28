const MergeSplitTableCard = ({ tableId = "T04", nearbyTableId = "T05" }) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">
          Merge Split Table
        </h2>
        <span className="text-blue-400 text-xs font-semibold border border-blue-700 bg-blue-500/10 rounded-full px-3 py-1">
          Operational
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#243447] border border-slate-800 rounded-lg p-4">
          <h3 className="text-white text-sm font-semibold mb-2">
            Merge Tables
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Combine {tableId} with nearby {nearbyTableId} for large groups or
            family seating.
          </p>
          <button
            type="button"
            className="w-full px-4 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
          >
            Merge with {nearbyTableId}
          </button>
        </div>

        <div className="bg-[#243447] border border-slate-800 rounded-lg p-4">
          <h3 className="text-white text-sm font-semibold mb-2">
            Split Table
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Separate {tableId} order into two bills or divide a joined table
            group.
          </p>
          <button
            type="button"
            disabled
            className="w-full px-4 py-2.5 rounded-md bg-slate-800/50 border border-slate-800 text-gray-600 text-sm font-semibold cursor-not-allowed"
          >
            Split Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default MergeSplitTableCard;