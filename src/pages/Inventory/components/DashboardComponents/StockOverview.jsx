import { stockItems } from "../../../../data/StockOverview";

export default function StockOverview() {
  return (
    <section className="rounded-[14px] border border-white/15 bg-[#1c2a38] p-5">
      {/* header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">Stock Overview</h2>

        <span className="rounded-full border border-[#2980b94d] bg-[#2980b91a] px-2.25 py-0.5 text-[11px] font-semibold text-[#2980b9]">
          Live
        </span>
      </div>

      {/* stock items */}
      <div className="space-y-4">
        {stockItems.map((item) => (
          <div
            key={item.name}
            className="rounded-[14px] border border-white/15 bg-[#243447] p-4"
          >
            {/* top row */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[13px] font-semibold text-[#3bb273]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[13px] text-[#556070]">
                  {item.category} • {item.quantity}
                </p>
              </div>

              {/* status */}
              <span
                className={`rounded-full border px-2.25 py-0.5 text-[11px] items-center font-semibold ${item.statusColor} ${item.statusBg} ${item.statusBorder}`}
              >
                {item.status}
              </span>
            </div>

            {/* progress bar */}
            <div className="mt-2.5 h-2 w-34.5 overflow-hidden rounded-full bg-[#556070]">
              <div
                className={`h-full rounded-full ${item.progressColor}`}
                style={{ width: item.progress }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
