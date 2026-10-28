
import React, { useState } from 'react';

const filters = [
  'All Customers',
  'VIP',
  'Frequent',
  'New',
  'Inactive',
  'Walk-In',
  'Reservation',
];

const FilterButtons = () => {
  const [activeFilter, setActiveFilter] = useState('All Customers');

  return (
    <div className="flex w-full min-w-0 flex-wrap items-center gap-2 font-['DM_Sans']">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={isActive}
            className={`inline-flex min-h-[32px] shrink-0 items-center justify-center rounded-full border px-3 py-1.5 transition-colors duration-200 ${
              isActive
                ? 'border-[#E67E224D] bg-[#E67E2214] text-[#E67E22]'
                : 'border-[#FFFFFF14] bg-[#243447] text-[#8A9BB0] hover:border-[#E67E224D] hover:bg-[#E67E2214] hover:text-[#E67E22]'
            }`}
          >
            <span className="whitespace-nowrap text-[11px] font-medium leading-4 sm:text-[12px]">
              {filter}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons
