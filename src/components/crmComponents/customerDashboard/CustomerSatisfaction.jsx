
import React from 'react';

const satisfactionData = [
  {
    label: 'Average Rating',
    value: '4.7 / 5',
    percentage: 94,
    color: '#27AE60',
    textColor: 'text-[#3BB273]',
  },
  {
    label: 'Review Score',
    value: '89%',
    percentage: 89,
    color: '#2980B9',
    textColor: 'text-[#2980B9]',
  },
];

const CustomerSatisfaction = () => {
  return (
    <section className="box-border flex w-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] font-['DM_Sans']">

      {/* Header */}
      <header className="flex min-h-[48px] items-center border-b border-[#FFFFFF14] px-3 py-3 sm:min-h-[53px] sm:px-5">
        <h2 className="text-[15px] font-bold leading-5 text-white sm:text-[16px] md:text-[18px]">
          Customer Satisfaction
        </h2>
      </header>

      {/* Satisfaction Metrics */}
      <div className="flex w-full flex-col gap-3 p-3 sm:gap-4 sm:p-5">
        {satisfactionData.map((item) => (
          <div key={item.label} className="flex w-full min-w-0 flex-col gap-2">

            {/* Label and Value */}
            <div className="flex min-w-0 items-center justify-between gap-3">
              <p className="min-w-0 text-[12px] leading-[18px] text-[#8A9BB0] sm:text-[13px] md:text-[14px]">
                {item.label}
              </p>

              <p className={`shrink-0 text-right text-[11px] font-semibold leading-[18px] sm:text-[12px] ${item.textColor}`}>
                {item.value}
              </p>
            </div>

            {/* Progress Bar */}
            <div
              className="h-[8px] w-full overflow-hidden rounded-full bg-[#5560704D] sm:h-[10px]"
              role="progressbar"
              aria-label={item.label}
              aria-valuenow={item.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerSatisfaction
