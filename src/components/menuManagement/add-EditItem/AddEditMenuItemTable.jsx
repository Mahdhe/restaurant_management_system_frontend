import React from 'react'

const AddEditMenuItemTable = () => {
  return (
    <section className="w-[802px] h-[490px] gap-[16px] rounded-[14px] border-[1px] p-[20px] bg-[#1C2A38] border-[#FFFFFF14] flex flex-col mt-4">

      {/* Header */}
      <div className="w-[762px] h-[30px] py-[3px] flex justify-between items-center gap-[10px]">
        <h1 className="font-[DM_Sans] text-[18px] font-bold text-[#F0F4F8]">Add /Edit Menu Item</h1>
        <button className="">
          <p className="border-[1px] px-[10px] rounded-xl text-[#2980B9] bg-[#2980B91F] border-[#2980B94D] font-[DM_Sans] text-[11px] font-semibold">Item Form</p>
        </button>
      </div>

      {/* Form */}
      <div className="w-[762px] h-[404px] gap-[10px] p-[10px] flex flex-col">

        <div className="w-[762px] h-[86px] gap-[12px] py-[10px] bg-[#1C2A38] flex">

          <div className="w-[365px] h-[66px] gap-[8px] flex flex-col">
            <h4 className="font-[DM_Sans] text-[14px] text-[#8A9BB0] leading-[100%] tracking-[0%]">ITEM NAME</h4>
            <input type="text" className="w-[365px] h-[40px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24]" />
          </div>

          <div className="w-[365px] h-[66px] gap-[8px] flex flex-col">
            <h4 className="font-[DM_Sans] text-[14px] text-[#8A9BB0] leading-[100%] tracking-[0%]">CATEGORY</h4>
            <input type="text" className="w-[365px] h-[40px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24]" />
          </div>


        </div>

        <div className="w-[762px] h-[86px] gap-[12px] py-[10px] bg-[#1C2A38] flex">

          <div className="w-[365px] h-[66px] gap-[8px] flex flex-col">
            <h4 className="font-[DM_Sans] text-[14px] text-[#8A9BB0] leading-[100%] tracking-[0%]">ITEM NAME</h4>
            <input type="text" className="w-[365px] h-[40px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24]" />
          </div>

          <div className="w-[365px] h-[66px] gap-[8px] flex flex-col">
            <h4 className="font-[DM_Sans] text-[14px] text-[#8A9BB0] leading-[100%] tracking-[0%]">CATEGORY</h4>
            <input type="text" className="w-[365px] h-[40px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24]" />
          </div>


        </div>

        <div className="w-[762px] h-[86px] gap-[12px] py-[10px] bg-[#1C2A38] flex">

          <div className="w-[365px] h-[66px] gap-[8px] flex flex-col">
            <h4 className="font-[DM_Sans] text-[14px] text-[#8A9BB0] leading-[100%] tracking-[0%]">ITEM NAME</h4>
            <input type="text" className="w-[365px] h-[40px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24]" />
          </div>

          <div className="w-[365px] h-[66px] gap-[8px] flex flex-col">
            <h4 className="font-[DM_Sans] text-[14px] text-[#8A9BB0] leading-[100%] tracking-[0%]">CATEGORY</h4>
            <input type="text" className="w-[365px] h-[40px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24]" />
          </div>


        </div>

        <div className="w-[762px] h-[86px] gap-[12px] py-[10px] bg-[#1C2A38] flex">

          <div className="w-[365px] h-[66px] gap-[8px] flex flex-col">
            <h4 className="font-[DM_Sans] text-[14px] text-[#8A9BB0] leading-[100%] tracking-[0%]">DESCRIPTION</h4>
            <input type="text" className="w-[742px] h-[70px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24]" />
          </div>

          


        </div>

      </div>



    </section>
  )
}

export default AddEditMenuItemTable
