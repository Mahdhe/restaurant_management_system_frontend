export default function ProgressBar({ data }) {
  return (
    <>
      <div className="space-y-4 p-4 sm:p-5">
        {data.map((payment) => (
          <div key={payment.name} className="flex items-center gap-2 min-w-0">
            <span className="w-16 sm:w-18 shrink-0 text-[13px] sm:text-[14px] text-[#f0f4f8]">
              {payment.name}
            </span>

            <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#5560704D]">
              <div
                className={`h-full rounded-full ${payment.color}`}
                style={{ width: payment.width }}
              />
            </div>

            <span
              className={`w-6.5 shrink-0 text-right text-[11px] sm:text-[12px] font-semibold ${payment.textColor}`}
            >
              {payment.percentage}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
