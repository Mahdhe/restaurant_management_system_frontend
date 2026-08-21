export default function ExportReports() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden pb-3">
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">
          Export Reports
        </h2>
      </div>

      <div className="space-y-2 p-5">
        <button className="w-full rounded-[10px] border border-[#e74c3c33] bg-[#e74c3c1a] py-2 text-[14px] font-semibold text-[#e74c3c]">
          Export PDF
        </button>

        <button className="w-full rounded-[10px] border border-[#27ae6033] bg-[#27ae601a] py-2 text-[14px] font-semibold text-[#27ae60]">
          Export Excel
        </button>

        <button className="w-full rounded-[10px] border border-white/10 bg-[#243447] py-2 text-[14px] font-semibold text-[#f0f4f8]">
          Print Report
        </button>
      </div>
    </div>
  );
}
