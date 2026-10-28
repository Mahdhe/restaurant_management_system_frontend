
import React from 'react';

const activities = [
  {
    initials: 'JS',
    name: 'John Silva',
    activity: 'New Reservation',
    time: '08:20 AM',
  },
  {
    initials: 'NF',
    name: 'Nimali Fernando',
    activity: 'Completed Payment',
    time: '08:45 AM',
  },
  {
    initials: 'AP',
    name: 'Akila Perera',
    activity: 'Earned Loyalty Points',
    time: '09:15 AM',
  },
  {
    initials: 'KS',
    name: 'Kasun Silva',
    activity: 'Visited Restaurant',
    time: '12:00 PM',
  },
];

const RecentCustomerActivity = () => {
  return (
    <section className="box-border w-full min-w-0 overflow-hidden rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] font-['DM_Sans']">

      {/* Header */}
      <header className="flex min-h-[48px] items-center border-b border-[#FFFFFF14] px-3 py-3 sm:min-h-[53px] sm:px-5">
        <h2 className="text-[15px] font-bold leading-5 text-white sm:text-[16px] md:text-[18px]">
          Recent Customer Activity
        </h2>
      </header>

      {/* Activity List */}
      <div className="w-full px-3 sm:px-5">
        {activities.map((item, index) => (
          <div
            key={item.name}
            className={`flex min-h-[68px] w-full items-center justify-between gap-3 py-3 sm:min-h-[74px] sm:gap-4 ${
              index !== activities.length - 1
                ? 'border-b border-[#FFFFFF14]'
                : ''
            }`}
          >
            {/* Customer details */}
            <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#E67E220F]">
                <span className="text-[11px] font-bold leading-4 text-[#E67E22] sm:text-[12px] md:text-[14px]">
                  {item.initials}
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <h3 className="truncate text-[12px] font-medium leading-[18px] text-[#3BB273] sm:text-[13px] md:text-[14px]">
                  {item.name}
                </h3>

                <p className="truncate text-[10px] leading-[15px] text-[#8A9BB0] sm:text-[11px] md:text-[12px]">
                  {item.activity}
                </p>
              </div>
            </div>

            {/* Timestamp */}
            <p className="shrink-0 whitespace-nowrap text-right text-[10px] leading-4 text-[#8A9BB0] sm:text-[11px] md:text-[12px]">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentCustomerActivity
