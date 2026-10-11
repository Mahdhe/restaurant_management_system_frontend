import React from 'react'

const AddEditCategory = () => {
    return (
        <section className="w-[302px] h-[425px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

            {/* Header */}
            <div className="w-[302px] h-[53px] rounded-t-[14px] border-[1px] p-[20px] pb-[10px] gap-[10px] flex border-[#FFFFFF14]">
                <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Add / Edit Category</h1>
            </div>

            {/* Content */}
            <div className="w-[302px] h-[372px] p-[20px] gap-[16px] flex flex-col">
                <div className="w-[262px] h-[276px] gap-[12px] flex flex-col">

                    <div className="w-[262px] h-[59px] gap-[8px] flex flex-col">
                        <h3 className="font-[DM_Sans] font-medium text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">CATEGORY NAME</h3>
                        <div className="w-[262px] h-[34px] rounded-[10px] border-[1px] py-[3px] px-[10px] gap-[10px] flex bg-[#243447] border-[#FFFFFF14]">
                            <p className="font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF] flex justify-start items-center">Desserts</p>
                        </div>
                    </div>

                    <div className="w-[262px] h-[59px] gap-[8px] flex flex-col">
                        <h3 className="font-[DM_Sans] font-medium text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">ICON</h3>
                        <div className="w-[262px] h-[34px] rounded-[10px] border-[1px] py-[3px] px-[10px] gap-[10px] flex bg-[#243447] border-[#FFFFFF14]">
                            <p className="font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-[#E74C3C80] flex justify-start items-center">D</p>
                        </div>
                    </div>

                    <div className="w-[262px] h-[59px] gap-[8px] flex flex-col">
                        <h3 className="font-[DM_Sans] font-medium text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">DISPLAY ORDER</h3>
                        <div className="w-[262px] h-[34px] rounded-[10px] border-[1px] py-[3px] px-[10px] gap-[10px] flex bg-[#243447] border-[#FFFFFF14]">
                            <p className="font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF] flex justify-start items-center">04</p>
                        </div>
                    </div>

                    {/* <label for="country">Choose a country:</label>

                    <select id="country">
                        <option value="lk">Sri Lanka</option>
                        <option value="in">India</option>
                        <option value="uk">United Kingdom</option>
                        <option value="us">United States</option>
                    </select> */}

                    <div className="w-[262px] h-[59px] gap-[8px] flex flex-col">
                        <label htmlFor="status" className="font-[DM_Sans] font-medium text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">STATUS</label>
                        <select id="status" className="w-[262px] h-[34px] rounded-[10px] border-[1px] py-[3px] px-[10px] bg-[#243447] border-[#FFFFFF14] text-white">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                </div>

                <button className="w-[262px] h-[40px] rounded-[10px] py-[8px] px-[16px] gap-[12px] flex items-center justify-center bg-[#E67E22]">
                    <p className="font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Save Category</p>
                </button>
            </div>

        </section>

    )
}

export default AddEditCategory
