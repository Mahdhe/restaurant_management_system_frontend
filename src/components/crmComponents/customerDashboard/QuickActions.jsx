
import React from 'react';

const actions = [
  {
    label: '+ Add Customers',
    primary: true,
  },
  {
    label: 'Create Reservation',
    primary: false,
  },
  {
    label: 'Add Loyalty Points',
    primary: false,
  },
  {
    label: 'Export Data',
    primary: false,
  },
];

const QuickActions = () => {
  return (
    <section className="box-border flex w-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] font-['DM_Sans']">

      {/* Header */}
      <header className="flex min-h-[48px] items-center border-b border-[#FFFFFF14] px-3 py-3 sm:min-h-[53px] sm:px-5">
        <h2 className="text-[15px] font-bold leading-5 text-white sm:text-[16px] md:text-[18px]">
          Quick Actions
        </h2>
      </header>

      {/* Action Buttons */}
      <div className="flex w-full flex-col gap-2.5 p-3 sm:gap-3 sm:p-5">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            className={`flex min-h-[40px] w-full items-center justify-center rounded-[10px] px-3 py-2 transition-colors duration-200 sm:min-h-[42px] sm:px-4 ${
              action.primary
                ? 'bg-[#E67E22] hover:bg-[#D97016]'
                : 'border border-[#FFFFFF24] bg-[#243447] hover:bg-[#2B3D52]'
            }`}
          >
            <span className="text-[12px] font-semibold leading-5 text-[#F0F4F8] sm:text-[13px] md:text-[14px]">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions
