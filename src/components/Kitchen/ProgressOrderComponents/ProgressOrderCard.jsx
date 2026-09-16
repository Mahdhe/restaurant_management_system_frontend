export default function ProgressOrderCard({
  orderNo,
  table,
  waiter,
  status,
  statusColor,
  statusBg,
  StatusBorder,
  timer,
  timeColor,
  items,
  itemsStatus,
  itemText,
  itemBorder,
  itemBg,
  extraInfo,
  b1Text,
  b1Color,
  b1Border,
  b1TextColor,
  b2Text,
  b2Color,
  b2Border,
  b2TextColor,
}) {
  return (
    <div className="rounded-2xl border border-white/15 px-3 sm:px-4 bg-[#1c2a38] font-dmsans pb-4 min-w-0">
      {/* top content */}
      <div className="flex justify-between gap-2 pt-4 pb-2.5 border-b border-white/15 ">
        <div className="min-w-0">
          <h2 className="font-jetbrains font-bold text-[#f0f4f8] text-[16px] sm:text-[18px] truncate">
            {orderNo}
          </h2>

          <div className="flex gap-2 min-w-0">
            <p className="text-[11px] sm:text-[12px] text-[#556070] truncate">
              {table}
            </p>

            <p className="text-[11px] sm:text-[12px] text-[#556070] truncate">
              {waiter}
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <span
            className={`rounded-full px-2 py-1 text-[10px] sm:text-[11px] leading-4.5 font-semibold border ${StatusBorder} ${statusBg} ${statusColor}`}
          >
            {status}
          </span>

          <h1
            className={`mt-1.5 text-[16px] sm:text-[18px] text-center leading-4.5 font-bold font-jetbrains ${timeColor}`}
          >
            {timer}
          </h1>
        </div>
      </div>

      {/* items */}
      <div className="mt-5 space-y-6">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="border-b border-white/15 pb-1"
          >
            {/* items + status */}
            <div className="flex items-center justify-between gap-2">
              <p className="text-[14px] sm:text-[16px] font-bold text-white leading-4.5 min-w-0">
                {item}
              </p>

              <span
                className={`rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] leading-4.5 font-semibold border ${itemText[index]} ${itemBorder[index]} ${itemBg[index]} shrink-0`}
              >
                {itemsStatus[index]}
              </span>
            </div>

            {/* extra info */}
            <p className="mt-0.5 text-[11px] sm:text-[12px] text-[#8a9bb0] tracking-wider">
              {extraInfo[index]}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          className={`mt-6 w-full rounded-[10px] items-center text-xs sm:text-sm font-semibold border ${b1Border} ${b1TextColor} ${b1Color} py-2 px-2 sm:px-4`}
        >
          {b1Text}
        </button>

        <button
          className={`mt-6 w-full rounded-[10px] items-center text-xs sm:text-sm font-semibold border ${b2Border} ${b2TextColor} ${b2Color} py-2 px-2 sm:px-4`}
        >
          {b2Text}
        </button>
      </div>
    </div>
  );
}
