
import React from 'react';

const statistics = [
  {
    label: 'Total Visits',
    value: '18,240',
    valueColor: 'text-[#3BB273]',
  },
  {
    label: 'Average Spend',
    value: 'LKR 3,650',
    valueColor: 'text-[#3BB273]',
  },
  {
    label: 'Total Revenue',
    value: 'LKR 12.4M',
    valueColor: 'text-[#3BB273]',
  },
  {
    label: 'VIP Members',
    value: '92',
    valueColor: 'text-[#E67E22]',
  },
];

const CustomerStatistics = () => {
  return (
    <section className="box-border flex w-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] font-['DM_Sans']">

      {/* Header */}
      <header className="flex min-h-[48px] items-center border-b border-[#FFFFFF14] px-3 py-3 sm:min-h-[53px] sm:px-5">
        <h2 className="text-[15px] font-bold leading-5 text-white sm:text-[16px] md:text-[18px]">
          Customer Statistics
        </h2>
      </header>

      {/* Statistics */}
      <div className="flex w-full flex-col px-3 py-2 sm:px-5 sm:py-3">
        {statistics.map((item, index) => (
          <div
            key={item.label}
            className={`flex min-h-[36px] w-full items-center justify-between gap-3 py-2 ${
              index !== statistics.length - 1
                ? 'border-b border-[#FFFFFF14]'
                : ''
            }`}
          >
            <p className="min-w-0 text-[11px] leading-4 text-[#8A9BB0] sm:text-[12px] md:text-[13px]">
              {item.label}
            </p>

            <p
              className={`shrink-0 text-right text-[11px] font-semibold leading-4 sm:text-[12px] md:text-[13px] ${item.valueColor}`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerStatistics
