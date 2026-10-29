import { BriefcaseBusiness } from "lucide-react";

const sales = [
  {
    date: "8 June 2025",
    orders: 140,
    revenue: "LKR 142,000",
    avgBill: " LKR 3,200",
    status: "Good",
    statusClass: "bg-[#27AE601F] text-[#27AE60] border-[#27AE604d]",
  },
  {
    date: "9 June 2025",
    orders: 165,
    revenue: "LKR 184,000",
    avgBill: " LKR 3,450",
    status: "Excellent",
    statusClass: "bg-[#2980B91F] text-[#2980B9] border-[#2980B94d]",
  },
  {
    date: "10 June 2025",
    orders: 151,
    revenue: "LKR 170,000",
    avgBill: " LKR 3,320",
    status: "Good",
    statusClass: "bg-[#27AE601F] text-[#27AE60] border-[#27AE604d]",
  },
  {
    date: "11 June 2025",
    orders: 190,
    revenue: "LKR 224,000",
    avgBill: " LKR 3,600",
    status: "Peak",
    statusClass: "bg-[#F39C121F] text-[#F39C12] border-[#F39C124d]",
  },
];

export default function DailySalesBreakdown() {
  return (
    <div className="rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden p-5 font-dmsans">
      {/* header */}
      <div className="flex items-center justify-between pb-3.5">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#E67E220F] text-[#e67e22]">
            <BriefcaseBusiness size={18} />
          </div>

          <div>
            <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
              Daily Sales Breakdown
            </h2>

            <p className="text-[12px] text-[#8a9bb0]">Last 4 days detail</p>
          </div>
        </div>

        <button className="rounded-[10px] border border-white/15 bg-[#243447] px-4 py-2 text-[14px] text-[#f0f4f8]">
          Export
        </button>
      </div>

      {/* table */}
      <div className="py-2.5 overflow-x-auto mt-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#243447] text-[11px] uppercase text-[#8a9bb0]">
              <th className="rounded-l-[14px] p-4 text-center font-medium">
                Date
              </th>

              <th className="p-4 text-center font-medium">Orders</th>

              <th className="p-4 text-center font-medium">Revenue</th>

              <th className="p-4 text-center font-medium">Avg Bill</th>

              <th className="rounded-r-[14px] p-4 text-center font-medium">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {sales.map((sale) => (
              <tr key={sale.date} className="border-b border-white/15">
                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {sale.date}
                </td>

                <td className="px-4 py-5 text-[14px] text-center text-[#f0f4f8]">
                  {sale.orders}
                </td>

                <td className="px-4 py-5 text-[14px] text-center text-[#f0f4f8]">
                  {sale.revenue}
                </td>

                <td className="px-4 py-5 text-[14px] text-center text-[#f0f4f8]">
                  {sale.avgBill}
                </td>

                <td className="px-4 py-5 text-center">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-medium ${sale.statusClass}`}
                  >
                    {sale.status}
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
