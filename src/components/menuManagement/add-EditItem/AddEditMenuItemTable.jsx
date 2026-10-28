import React from 'react'

const AddEditMenuItemTable = () => {
  return (
    <section className="w-[802px] max-w-full min-w-0 h-[490px] max-sm:h-auto gap-[16px] rounded-[14px] border-[1px] p-[20px] max-sm:p-[14px] bg-[#1C2A38] border-[#FFFFFF14] flex flex-col mt-4 box-border">

      {/* Header */}
      <div className="w-[762px] max-w-full h-[30px] shrink-0 py-[3px] flex justify-between items-center gap-[10px] box-border">
        <h1 className="min-w-0 truncate font-[DM_Sans] text-[18px] max-sm:text-[16px] leading-[100%] font-bold text-[#F0F4F8]">Add / Edit Menu Item</h1>
        <button type="button" className="shrink-0 flex items-center">
          <p className="border-[1px] px-[10px] rounded-xl whitespace-nowrap text-[#2980B9] bg-[#2980B91F] border-[#2980B94D] font-[DM_Sans] text-[11px] leading-[18px] font-semibold">Item Form</p>
        </button>
      </div>

      {/* Form */}
      <div className="w-[762px] max-w-full h-[404px] max-sm:h-auto shrink-0 gap-[10px] p-[10px] max-sm:p-0 flex flex-col box-border">

        {/* row 1: name + category */}
        <div className="w-[762px] max-w-full h-[86px] max-sm:h-auto shrink-0 gap-[12px] py-[10px] bg-[#1C2A38] flex max-sm:flex-col box-border">

          <div className="w-[365px] max-sm:w-full min-w-0 h-[66px] max-sm:h-auto gap-[8px] flex flex-col">
            <label htmlFor="item-name" className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">ITEM NAME</label>
            <input id="item-name" type="text" placeholder="Strawberry cheese cake" className="text-[#F0F4F8] font-[DM_Sans] text-[14px] max-sm:text-[16px] w-[365px] max-w-full max-sm:w-full min-w-0 h-[40px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24] placeholder:text-[#556070] outline-none focus:border-[#E67E224D] box-border" />
          </div>

          <div className="w-[365px] max-sm:w-full min-w-0 h-[66px] max-sm:h-auto gap-[8px] flex flex-col">
            <div className="w-[262px] h-[59px] gap-[8px] contents">
              <label htmlFor="category" className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">CATEGORY</label>
              <select id="category" className="w-[365px] max-w-full max-sm:w-full min-w-0 h-[40px] rounded-[10px] border-[1px] py-[3px] px-[12px] bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8] font-[DM_Sans] text-[14px] max-sm:text-[16px] outline-none focus:border-[#E67E224D] [&>option]:bg-[#243447] box-border">
                <option value="desserts">Desserts</option>
                <option value="desserts-2">Desserts</option>
              </select>
            </div>
          </div>

        </div>

        {/* row 2: price + prep time */}
        <div className="w-[762px] max-w-full h-[86px] max-sm:h-auto shrink-0 gap-[12px] py-[10px] bg-[#1C2A38] flex max-sm:flex-col box-border">

          <div className="w-[365px] max-sm:w-full min-w-0 h-[66px] max-sm:h-auto gap-[8px] flex flex-col">
            <label htmlFor="price" className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">PRICE</label>
            <input id="price" type="text" inputMode="decimal" placeholder="LKR 836" className="text-[#F0F4F8] font-[DM_Sans] text-[14px] max-sm:text-[16px] w-[365px] max-w-full max-sm:w-full min-w-0 h-[40px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24] placeholder:text-[#556070] outline-none focus:border-[#E67E224D] box-border" />
          </div>

          <div className="w-[365px] max-sm:w-full min-w-0 h-[66px] max-sm:h-auto gap-[8px] flex flex-col">
            <label htmlFor="prep-time" className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">PREP TIME</label>
            <input id="prep-time" type="text" placeholder="e.g. 15 min" className="text-[#F0F4F8] font-[DM_Sans] text-[14px] max-sm:text-[16px] w-[365px] max-w-full max-sm:w-full min-w-0 h-[40px] gap-[8px] flex rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24] placeholder:text-[#556070] outline-none focus:border-[#E67E224D] box-border" />
          </div>

        </div>

        {/* row 3: status + dietary tags */}
        <div className="w-[762px] max-w-full h-[86px] max-sm:h-auto shrink-0 gap-[12px] py-[10px] bg-[#1C2A38] flex max-sm:flex-col box-border">

          <div className="w-[365px] max-sm:w-full min-w-0 h-[66px] max-sm:h-auto gap-[8px] flex flex-col">
            <div className="w-[262px] h-[59px] gap-[8px] contents">
              <label htmlFor="status" className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">STATUS</label>
              <select id="status" className="w-[365px] max-w-full max-sm:w-full min-w-0 h-[40px] rounded-[10px] border-[1px] py-[3px] px-[12px] bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8] font-[DM_Sans] text-[14px] max-sm:text-[16px] outline-none focus:border-[#E67E224D] [&>option]:bg-[#243447] box-border">
                <option value="active">Available</option>
                <option value="inactive">Unavailable</option>
              </select>
            </div>
          </div>

          <div className="w-[365px] max-sm:w-full min-w-0 h-[66px] max-sm:h-auto gap-[8px] flex flex-col">
            <div className="w-[262px] h-[59px] gap-[8px] contents">
              <label htmlFor="dietary-tags" className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">DIETARY TAGS</label>
              <select id="dietary-tags" className="w-[365px] max-w-full max-sm:w-full min-w-0 h-[40px] rounded-[10px] border-[1px] py-[3px] px-[12px] bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8] font-[DM_Sans] text-[14px] max-sm:text-[16px] outline-none focus:border-[#E67E224D] [&>option]:bg-[#243447] box-border">
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-Vegetarian</option>
              </select>
            </div>
          </div>

        </div>

        {/* row 4: description */}
        <div className="w-[762px] max-w-full h-[100px] max-sm:h-auto shrink-0 gap-[12px] py-[10px] bg-[#1C2A38] flex box-border">

          <div className="w-[365px] max-sm:w-full grow min-w-0 h-[100px] max-sm:h-auto gap-[8px] flex flex-col">
            <label htmlFor="description" className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">DESCRIPTION</label>
            <textarea id="description" placeholder="Creamy cheesecake topped with fresh strawberry glaze." className="text-[#F0F4F8] font-[DM_Sans] text-[14px] max-sm:text-[16px] w-[742px] max-w-full min-w-0 h-[90px] gap-[8px] flex resize-none rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24] placeholder:text-[#556070] outline-none focus:border-[#E67E224D] box-border"></textarea>
          </div>

        </div>

      </div>

    </section>
  )
}

export default AddEditMenuItemTable