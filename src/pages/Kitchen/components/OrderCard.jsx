export default function OrderCard({
  orderNo,
  table,
  waiter,
  status,
  statusColor,
  statusBg,
  statusBorder,
  timer,
  timeColor,
  items,
  itemsQuantity,
  extraInfo,
  buttonText,
  buttonColor,
  buttonBorder,
  buttonTextColor
}) {
  return (
    <div className="rounded-2xl border border-white/15 px-4 bg-[#1c2a38] font-dmsans pb-4">
      {/* top content */}
      <div className="flex justify-between pt-4 pb-2.5 border-b border-white/15">
        <div>
          <h2 className="font-jetbrains font-bold text-[#f0f4f8] text-[18px]">
            {orderNo}
          </h2>
          <div className="flex gap-2">
            <p className="text-[12px] text-[#556070]">{table}</p>
            <span className="text-[12px] text-[#556070]">{"•"}</span>
            <p className="text-[12px] text-[#556070]">{waiter}</p>
          </div>
        </div>

        <div>
          <span
            className={`rounded-full px-2.25 py-1 text-[11px] leading-4.5 font-semibold border ${statusBorder} ${statusBg} ${statusColor}`}
          >
            {status}
          </span>

          <h1
            className={`mt-1.5 text-[18px] text-center leading-4.5 font-bold font-jetbrains ${timeColor}`}
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
            {/* item name + quantity */}
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-bold text-white leading-4.5">
                {item}
              </p>
              <span className="text-[16px] font-bold leading-4.5 text-center items-center text-[#e67e22]">
                {itemsQuantity[index]}
              </span>
            </div>

            {/* extra info */}
            <p className="mt-0.5 text-[12px] text-[#8a9bb0] tracking-wider">
              {extraInfo[index]}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          className={`mt-6 w-full rounded-[10px] items-center text-sm font-semibold border ${buttonBorder} ${buttonTextColor} ${buttonColor} py-2 px-4`}
        >
          {buttonText}
        </button>

        <button className="mt-6 rounded-[10px] items-center text-sm font-semibold py-2 px-4 bg-[#243447] border border-white/15">View</button>
      </div>
    </div>
  );
}
