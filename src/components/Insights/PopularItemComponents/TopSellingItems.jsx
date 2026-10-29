import { Trophy } from "lucide-react";

const topSellings = [
  {
    rank: 1,
    name: "Chiken Kottu",
    orders: 126,
  },
  {
    rank: 2,
    name: "Fried Rice (Veg)",
    orders: 98,
  },
  {
    rank: 3,
    name: "Grilled Chiken",
    orders: 94,
  },
  {
    rank: 4,
    name: "Fresh Lime Juice",
    orders: 79,
  },
  {
    rank: 5,
    name: "Chococlate Lava Cake",
    orders: 64,
  },
  {
    rank: 6,
    name: "Devilled Prawns",
    orders: 55,
  },
];

const maxOrders = 126;

export default function TopSellingItems() {
  return (
    <div className="mt-4 w-full min-w-0 rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden pb-3">
      {/* header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 pt-4 sm:pt-5 pb-4">
        <div className="min-w-0">
          <h2 className="text-[14px] text-[#f0f4f8] font-semibold">
            Top Selling Items
          </h2>

          <p className="text-[12px] text-[#8a9bb0]">
            This week - by order count
          </p>
        </div>

        <span className="w-fit rounded-full border border-[#E67E224D] bg-[#E67E220F] px-2.25 py-1 text-[11px] font-semibold text-[#e67e22] whitespace-nowrap">
          488 orders total
        </span>
      </div>

      {/* items */}
      <div className="px-4 sm:px-6">
        {topSellings.map((item, index) => {
          const width = `${(item.orders / maxOrders) * 100}%`;

          return (
            <div
              key={item.rank}
              className={`py-4 ${index !== topSellings.length - 1 ? "border-b border-white/15" : ""}`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {/* rank */}
                <div
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-sm bg-[#E67E220F] text-[14px] font-extrabold ${item.rank === 1 ? "text-[#e67e22]" : "text-[#e67e22]"}`}
                >
                  {item.rank === 1 ? <Trophy size={16} /> : item.rank}
                </div>

                {/* name + progress */}
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-[13px] sm:text-[14px] font-semibold text-[#f0f4f8]">
                    {item.name}
                  </p>

                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#5560704D]">
                    <div
                      className="h-full rounded-full bg-[#E67E2299]"
                      style={{ width }}
                    />
                  </div>
                </div>

                {/* orders */}
                <div className="w-12 shrink-0 text-center">
                  <p
                    className={`block text-[13px] font-extrabold ${item.rank === 1 ? "text-[#e67e22]" : "text-[#f0f4f8]"}`}
                  >
                    {item.orders}
                  </p>

                  <p className="text-[13px] text-[#8a9bb0]">orders</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
