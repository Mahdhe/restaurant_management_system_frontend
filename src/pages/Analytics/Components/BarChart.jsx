export default function BarChart({ data, labels }) {
  return (
    <>
      {/* chart */}
      <div className="px-4 py-5">
        <div className="relative h-68">
          {/* Y axis */}
          <div className="absolute left-0 top-0 bottom-7 flex flex-col justify-between">
            {labels.map((label) => (
              <span key={label} className="text-[14px] text-[#8a9bb0]">
                {label}
              </span>
            ))}
          </div>

          <div className="absolute left-14 right-0 top-0 bottom-7">
            {/* horizontal lines */}
            <div className="absolute inset-3 flex flex-col justify-between">
              {[1, 2, 3, 4, 5].map((line) => (
                <div key={line} className="border-t border-white/10" />
              ))}
            </div>

            {/* bars */}
            <div className="absolute inset-3 flex items-end justify-between px-2">
              {data.map((item) => {
                const height = `2%`;

                return (
                  <div
                    key={item.X}
                    className="flex h-full flex-1 items-end justify-center"
                  >
                    <div
                      style={{ height }}
                      className={`w-13.75 max-w-[70%] rounded-t-sm ${item.barColor}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* x axis */}
          <div className="absolute bottom-0 left-22 right-10 flex justify-between px-2">
            {data.map((item) => (
              <span
                key={item.X}
                className="text-[12px] font-semibold text-[#f0f4f8]"
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
