
import React from 'react';

const SearchCustomers = () => {
  return (
    <section className="my-3 box-border flex w-full min-w-0 flex-col gap-3 rounded-[16px] border border-[#FFFFFF14] bg-[#1C2A38] p-3 sm:my-4 sm:gap-4 sm:p-5">

      {/* Heading */}
      <h2 className="text-[15px] font-semibold leading-5 text-[#3BB273] sm:text-[16px] md:text-[18px]">
        Search Customers
      </h2>

      {/* Search Fields */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3">

        <input
          type="text"
          placeholder="Search customer name"
          aria-label="Search customer name"
          className="box-border h-10 w-full min-w-0 rounded-[10px] border border-[#FFFFFF24] bg-[#243447] px-3 py-2 font-['DM_Sans'] text-[12px] leading-5 text-[#F0F4F8] outline-none placeholder:text-[#8A9BB0] focus:border-[#3BB273] sm:text-[13px] md:text-[14px]"
        />

        <input
          type="tel"
          placeholder="Search phone number"
          aria-label="Search phone number"
          className="box-border h-10 w-full min-w-0 rounded-[10px] border border-[#FFFFFF24] bg-[#243447] px-3 py-2 font-['DM_Sans'] text-[12px] leading-5 text-[#F0F4F8] outline-none placeholder:text-[#8A9BB0] focus:border-[#3BB273] sm:text-[13px] md:text-[14px]"
        />

        <input
          type="email"
          placeholder="Search email"
          aria-label="Search email"
          className="box-border h-10 w-full min-w-0 rounded-[10px] border border-[#FFFFFF24] bg-[#243447] px-3 py-2 font-['DM_Sans'] text-[12px] leading-5 text-[#F0F4F8] outline-none placeholder:text-[#8A9BB0] focus:border-[#3BB273] sm:text-[13px] md:text-[14px]"
        />

      </div>
    </section>
  );
};

export default SearchCustomers;
