
import React from 'react';

const customerData = [
  {
    title: 'New Customers',
    description: '214 customers this month',
    percentage: '22%',
    progress: 19,
    color: '#E67E22',
    badgeBg: 'bg-[#27AE601F]',
    badgeBorder: 'border-[#27AE604D]',
    badgeText: 'text-[#27AE60]',
  },
  {
    title: 'Returning Customers',
    description: '2,368 customers',
    percentage: '68%',
    progress: 55,
    color: '#27AE60',
    badgeBg: 'bg-[#27AE601F]',
    badgeBorder: 'border-[#27AE604D]',
    badgeText: 'text-[#27AE60]',
  },
  {
    title: 'VIP Customers',
    description: '92 members',
    percentage: '12%',
    progress: 12,
    color: '#2980B9',
    badgeBg: 'bg-[#2980B91F]',
    badgeBorder: 'border-[#2980B94D]',
    badgeText: 'text-[#2980B9]',
  },
  {
    title: 'Walk-in-Customers',
    description: '808 customers',
    percentage: '23%',
    progress: 23,
    color: '#E67E22',
    badgeBg: 'bg-[#E67E220F]',
    badgeBorder: 'border-[#E67E224D]',
    badgeText: 'text-[#E67E22]',
  },
];

const CustomerOverview = () => {
  return (
    <section className="w-full min-w-0 overflow-hidden rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] font-['DM_Sans']">

      {/* Header */}
      <header className="flex min-w-0 items-center justify-between gap-3 border-b border-[#FFFFFF14] px-4 py-4 sm:px-5 sm:py-[18px]">
        <h2 className="min-w-0 text-[16px] font-bold leading-6 text-white sm:text-[18px]">
          Customer Overview
        </h2>

        <span className="inline-flex shrink-0 items-center rounded-full border border-[#2980B94D] bg-[#2980B91F] px-3 py-1 text-[12px] font-semibold leading-4 text-[#2980B9]">
          Live
        </span>
      </header>

      {/* Customer Metrics */}
      <div className="flex flex-col divide-y divide-[#FFFFFF0D] px-4 sm:px-5">
        {customerData.map((customer) => (
          <article
            key={customer.title}
            className="flex min-w-0 flex-col gap-3 py-4 sm:gap-3 sm:py-[18px]"
          >
            {/* Metric Title and Value */}
            <div className="flex min-w-0 items-center justify-between gap-3">
              <h3 className="min-w-0 break-words text-[14px] font-semibold leading-5 text-[#3BB273] sm:text-[14px]">
                {customer.title}
              </h3>

              <span
                className={`inline-flex shrink-0 items-center justify-center rounded-full border px-2.5 py-1 text-[12px] font-semibold leading-4 sm:text-[11px] ${customer.badgeBg} ${customer.badgeBorder} ${customer.badgeText}`}
              >
                {customer.percentage}
              </span>
            </div>

            {/* Description */}
            <p className="text-[13px] leading-5 text-[#8A9BB0] sm:text-[13px]">
              {customer.description}
            </p>

            {/* Responsive Progress Bar */}
            <div
              className="h-[8px] w-full overflow-hidden rounded-full bg-[#5560704D]"
              role="progressbar"
              aria-label={`${customer.title} progress`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={customer.progress}
            >
              <div
                className="h-full rounded-full transition-[width] duration-300"
                style={{
                  width: `${customer.progress}%`,
                  backgroundColor: customer.color,
                }}
              />
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default CustomerOverview
