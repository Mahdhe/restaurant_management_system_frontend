
import React from 'react';

const birthdays = [
  { name: 'Dilani Rathnayake', date: '18 Jul' },
  { name: 'Chamara Wikramasinghe', date: '19 Jul' },
  { name: 'Tharindhu Jayasuriya', date: '25 Jul' },
  { name: 'Sanduni Perera', date: '29 Jul' },
];

const UpcomingBirthdays = () => {
  return (
    <section className="box-border flex w-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] font-['DM_Sans']">

      {/* Header */}
      <header className="flex min-h-[48px] items-center border-b border-[#FFFFFF14] px-3 py-3 sm:min-h-[53px] sm:px-5">
        <h2 className="text-[15px] font-bold leading-5 text-white sm:text-[16px] md:text-[18px]">
          Upcoming Birthdays
        </h2>
      </header>

      {/* Birthday List */}
      <div className="flex w-full flex-col px-3 py-2 sm:px-5 sm:py-3">
        {birthdays.map((birthday, index) => (
          <div
            key={birthday.name}
            className={`flex min-h-[36px] w-full items-center justify-between gap-2 py-2 ${
              index !== birthdays.length - 1
                ? 'border-b border-[#FFFFFF14]'
                : ''
            }`}
          >
            <p className="min-w-0 flex-1 truncate text-[11px] leading-4 text-[#8A9BB0] sm:text-[12px] md:text-[13px]">
              {birthday.name}
            </p>

            <p className="shrink-0 whitespace-nowrap text-right text-[11px] font-semibold leading-4 text-[#3BB273] sm:text-[12px] md:text-[13px]">
              {birthday.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingBirthdays
