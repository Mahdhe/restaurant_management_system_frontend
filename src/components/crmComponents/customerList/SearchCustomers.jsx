import React from 'react'

const SearchCustomers = () => {
  return (
    <section className="w-[1132px] h-[133px] rounded-[16px] py-[10px] px-[20px] gap-[10px] flex flex-col bg-[#1C2A38] my-4">

      <h1 className="font-[DM_Sans] font-semibold text-[18px] leading-[100%] tracking-[0%] text-[#3BB273]">Search Customers</h1>

      <div className="w-[1112px] h-[60px] py-[10px] gap-[8px] flex bg-[#1C2A38]">

        <div className="w-[362.6666564941406px] h-[40px] gap-[8px] flex items-center">
          <input type="text" placeholder='Search Customer name' className="w-[362.6666564941406px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] gap-[8px] flex bg-[#243447] border-[#FFFFFF24] text-[#556070] text-[14px] text-[DM_Sans]" />
        </div>

        <div className="w-[362.6666564941406px] h-[40px] gap-[8px] flex items-center">
          <input type="text" placeholder='Search phone number' className="w-[362.6666564941406px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] gap-[8px] flex bg-[#243447] border-[#FFFFFF24] text-[#556070] text-[14px] text-[DM_Sans]" />
        </div>

        <div className="w-[362.6666564941406px] h-[40px] gap-[8px] flex items-center">
          <input type="text" placeholder='Search email' className="w-[362.6666564941406px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] gap-[8px] flex bg-[#243447] border-[#FFFFFF24] text-[#556070] text-[14px] text-[DM_Sans]" />
        </div>

      </div>

    </section>
  )
}

export default SearchCustomers
