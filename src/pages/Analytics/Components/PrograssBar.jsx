export default function ProgressBar({ data }) {
  return (
    <>
      <div className="space-y-4 p-5">
        {data.map((payment) => (
          <div key={payment.name} className="flex items-center gap-2">
            <span className="w-18 text-[14px] text-[#f0f4f8]">
              {payment.name}
            </span>

            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#5560704D]">
              <div
                className={`h-full rounded-full ${payment.color}`}
                style={{ width: payment.width }}
              />
            </div>

            <span
              className={`w-6.5 text-right text-[12px] font-semibold ${payment.textColor}`}
            >
              {payment.percentage}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
