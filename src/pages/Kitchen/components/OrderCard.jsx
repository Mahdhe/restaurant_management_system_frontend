export default function OrderCard({
  orderNo,
  table,
  waiter,
  status,
  statusColor,
  statusBg,
  timer,
  timerColor,
  items,
  extraInfo,
  buttonText,
  buttonColor,
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-[#1c2b3a] p-5">
      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold text-white">{orderNo}</h2>
          <p className="text-sm text-slate-400">{table}</p>
          <p className="text-sm text-slate-500">{waiter}</p>
        </div>

        <span
          className={`rounded-full px-3 text-xs font-medium ${statusBg} ${statusColor}`}
        >
          {status}
        </span>
      </div>

      <h1 className={`mt-5 text-4xl font-bold ${timerColor}`}>{timer}</h1>

      <div className="mt-5 space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg bg-[#243447] text-sm text-slate-300"
          >
            {item}
            <span>{extraInfo}</span>
          </div>
        ))}
      </div>

      <button
        className={`mt-6 w-full rounded-lg text-sm font-semibold text-white ${buttonColor}`}
      >
        {buttonText}
      </button>
    </div>
  );
}
