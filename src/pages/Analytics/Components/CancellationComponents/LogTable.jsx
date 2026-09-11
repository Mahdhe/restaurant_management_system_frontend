import { Briefcase } from "lucide-react";
import { logs } from "../../../../data/AnalyticsData/TableData";

export default function LogTable() {
  return (
    <div className="min-w-0 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hiddenp p-5">
      {/* header */}
      <div className="flex items-center justify-between pb-3.5">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#e67e220f] text-[#e67e22]">
            <Briefcase size={18} />
          </div>

          <div>
            <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
              Cancellation Log
            </h2>

            <p className="text-[12px] text-[#8a9bb0]">
              Cancelled orders with reason and refund status
            </p>
          </div>
        </div>

        <button className="px-4 py-2 rounded-[10px] text-[#f0f4f8] bg-[#243447] font-semibold border border-white/15 text-[14px]">
          Export
        </button>
      </div>

      <div className=" py-2.5 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#243447] text-[11px] text-[#8a9bb0] uppercase">
              <th className="font-medium text-center p-4 rounded-l-[14px]">
                Order Id
              </th>

              <th className="p-4 font-medium text-center">Table</th>

              <th className="p-4 font-medium text-center">Reason</th>

              <th className="p-4 font-medium text-center">Amount</th>

              <th className="p-4 font-medium text-center">Refund</th>

              <th className="p-4 font-medium text-center">Time</th>

              <th className="p-4 font-medium text-center rounded-r-[14px]">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr key={log.orderNo} className="border-b border-white/15">
                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {log.orderNo}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#8A9BB0] text-center">
                  {log.table}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#8A9BB0] text-center">
                  {log.reason}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {log.amount}
                </td>

                <td className="px-4 py-5 text-center">
                  <span
                    className={`inline-flex rounded-full py-0.5 px-2.5 font-medium text-[10px] border ${log.refundClass}`}
                  >
                    {log.refund}
                  </span>
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#8A9BB0] text-center">
                  {log.time}
                </td>

                <td className="px-4 py-5 text-center">
                  <span
                    className={`inline-flex rounded-full py-0.5 px-2.5 font-medium text-[10px] border ${log.statusClass}`}
                  >
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
