
import React from 'react'

const CRM_header = () => {
  return (
    <section className="w-full max-w-[1200px] min-w-0 px-[10px] box-border">

      <div className="flex w-full min-w-0 items-center gap-6 max-[1439px]:flex-col max-[1439px]:items-stretch max-[1439px]:gap-4">

        {/* Title + description */}
        <div className="flex flex-col flex-1 min-w-0 gap-[6px]">

          <h1 className="w-full min-w-0 font-[DM_Sans] font-bold text-[28px] max-sm:text-[20px] leading-[1.2] tracking-normal text-[#F0F4F8]">
            Customers Management
          </h1>

          <p className="w-full min-w-0 font-[DM_Sans] text-[16px] max-sm:text-[13px] leading-[1.5] tracking-normal text-[#556070]">
            Manage customer information, reservations, loyalty points, visit
            history and order history from one centralized dashboard
          </p>

        </div>

        {/* Action buttons */}
        <div className="flex shrink-0 items-center justify-end gap-3 max-[1439px]:w-full max-[1439px]:justify-start max-sm:flex-wrap">

          <button
            type="button"
            className="h-[40px] w-[170px] shrink-0 rounded-[10px] border border-[#FFFFFF24] px-4 bg-[#243447] flex justify-center items-center box-border transition hover:bg-[#2D4157]"
          >
            <span className="whitespace-nowrap text-center font-[DM_Sans] font-bold text-[14px] max-sm:text-[12px] leading-[18px] text-[#F0F4F8]">
              Export Customers
            </span>
          </button>

          <button
            type="button"
            className="h-[40px] w-[150px] shrink-0 rounded-[10px] border border-[#FFFFFF24] px-3 bg-[#E67E22] flex justify-center items-center box-border transition hover:brightness-110"
          >
            <span className="whitespace-nowrap text-center font-[DM_Sans] font-bold text-[14px] max-sm:text-[12px] leading-[18px] text-[#F0F4F8]">
              + Add Customer
            </span>
          </button>

        </div>

      </div>

    </section>
  )
}

export default CRM_header
