import React from 'react'

const AddEditCategory = () => {
    return (
        <section className="w-[302px] max-w-full min-w-0 h-[425px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14] flex flex-col overflow-hidden box-border">

            {/* Header */}
            <div className="w-[302px] max-w-full h-[53px] shrink-0 rounded-t-[14px] border-b-[1px] p-[20px] max-sm:px-[14px] pb-[10px] gap-[10px] flex items-center border-[#FFFFFF14] box-border">
                <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[22px] tracking-[0%] text-[#FFFFFF]">Add / Edit Category</h1>
            </div>

            {/* Content */}
            <div className="w-[302px] max-w-full min-w-0 h-[372px] min-h-0 p-[20px] max-sm:p-[14px] gap-[16px] flex flex-col box-border">
                <div className="w-[262px] max-w-full h-[276px] shrink-0 gap-[12px] flex flex-col">

                    <div className="w-[262px] max-w-full h-[59px] shrink-0 gap-[8px] flex flex-col">
                        <h3 className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">CATEGORY NAME</h3>
                        <div className="w-[262px] max-w-full h-[34px] rounded-[10px] border-[1px] py-[3px] px-[10px] gap-[10px] flex items-center bg-[#243447] border-[#FFFFFF14] box-border">
                            <p className="min-w-0 truncate font-[DM_Sans] text-[14px] leading-[18px] tracking-[0%] text-[#FFFFFF]">Desserts</p>
                        </div>
                    </div>

                    <div className="w-[262px] max-w-full h-[59px] shrink-0 gap-[8px] flex flex-col">
                        <h3 className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">ICON</h3>
                        <div className="w-[262px] max-w-full h-[34px] rounded-[10px] border-[1px] py-[3px] px-[10px] gap-[10px] flex items-center bg-[#243447] border-[#FFFFFF14] box-border">
                            <p className="min-w-0 truncate font-[DM_Sans] text-[14px] leading-[18px] tracking-[0%] text-[#E74C3C80]">D</p>
                        </div>
                    </div>

                    <div className="w-[262px] max-w-full h-[59px] shrink-0 gap-[8px] flex flex-col">
                        <h3 className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">DISPLAY ORDER</h3>
                        <div className="w-[262px] max-w-full h-[34px] rounded-[10px] border-[1px] py-[3px] px-[10px] gap-[10px] flex items-center bg-[#243447] border-[#FFFFFF14] box-border">
                            <p className="min-w-0 truncate font-[DM_Sans] text-[14px] leading-[18px] tracking-[0%] text-[#FFFFFF]">04</p>
                        </div>
                    </div>

                    <div className="w-[262px] max-w-full h-[59px] shrink-0 gap-[8px] flex flex-col">
                        <label htmlFor="status" className="font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">STATUS</label>
                        <select id="status" className="w-[262px] max-w-full min-w-0 h-[34px] rounded-[10px] border-[1px] py-[3px] px-[10px] bg-[#243447] border-[#FFFFFF14] text-white font-[DM_Sans] text-[14px] outline-none focus:border-[#E67E224D] [&>option]:bg-[#243447] box-border">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                </div>

                <button type="button" className="w-[262px] max-w-full h-[40px] shrink-0 rounded-[10px] py-[8px] px-[16px] gap-[12px] flex items-center justify-center bg-[#E67E22] box-border transition hover:brightness-110">
                    <p className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#FFFFFF]">Save Category</p>
                </button>
            </div>

        </section>

    )
}

export default AddEditCategory