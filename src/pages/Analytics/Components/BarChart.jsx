export default function BarChart({ data, labels }) {
  return (
    <>
      {/* chart */}
      <div className="w-full min-w-0 overflow-hidden px-3 sm:px-4 py-4 sm:py-5">
        <div className="relative h-60 sm:h-68 min-w-0">
          {/* Y axis */}
          <div className="absolute left-0 top-0 bottom-7 flex flex-col justify-between">
            {labels.map((label) => (
              <span
                key={label}
                className="text-[11px] sm:text-[14px] text-[#8a9bb0]"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="absolute left-10 sm:left-14 right-0 top-0 bottom-7 min-w-0">
            {/* horizontal lines */}
            <div className="absolute inset-2 sm:inset-3 flex flex-col justify-between">
              {[1, 2, 3, 4, 5].map((line) => (
                <div key={line} className="border-t border-white/10" />
              ))}
            </div>

            {/* bars */}
            <div className="absolute inset-2 sm:inset-3 flex items-end justify-between px-1 sm:px-2 min-w-0">
              {data.map((item) => {
                const height = `2%`;

                return (
                  <div
                    key={item.X}
                    className="flex h-full min-w-0 flex-1 items-end justify-center"
                  >
                    <div
                      style={{ height }}
                      className={`w-8 sm:w-13.75 max-w-[70%] rounded-t-sm ${item.barColor}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* x axis */}
          <div className="absolute bottom-0 left-16 sm:left-22 right-5 sm:right-10 flex justify-between px-1 sm:px-2 min-w-0">
            {data.map((item) => (
              <span
                key={item.X}
                className="text-[10px] sm:text-[12px] font-semibold text-[#f0f4f8] whitespace-nowrap"
              >
                {item.X}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
