const TablePreviewCard = ({ tableNumber, capacity }) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h3 className="text-white text-sm font-semibold mb-4">Table Info</h3>
 
      <div className="bg-[#0B1220] rounded-lg flex flex-col items-center justify-center py-8 mb-3">
        <div className="w-20 h-20 rounded-xl border-2 border-emerald-600 bg-emerald-500/5 flex flex-col items-center justify-center">
          <span className="text-emerald-400 text-base font-bold">
            {tableNumber}
          </span>
          <span className="text-emerald-400 text-[11px] mt-0.5">
            {capacity} seats
          </span>
        </div>
      </div>
 
      <p className="text-gray-500 text-xs leading-relaxed">
        Preview shows how the table will appear on the floor map.
      </p>
    </div>
  );
};
 
export default TablePreviewCard;