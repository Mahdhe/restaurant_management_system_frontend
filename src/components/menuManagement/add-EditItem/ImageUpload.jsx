import React from 'react'

const ImageUpload = () => {
    return (
        <section className="w-[810px] h-[285px] gap-[10px] flex flex-col rounded-[14px] border-[1px] p-[20px] bg-[#1C2A38] border-[#FFFFFF14]" >
            {/* Header */}
            <div className="w-[762px] h-[30px] py-[3px] flex justify-between items-center gap-[10px]">
                <h1 className="font-[DM_Sans] text-[18px] font-bold text-[#F0F4F8]">Image Upload</h1>
                <button className="">
                    <p className="border-[1px] px-[10px] rounded-xl text-[#2980B9] bg-[#2980B91F] border-[#2980B94D] font-[DM_Sans] text-[11px] font-semibold">Required</p>
                </button>
            </div>

            <div className="w-[770px] h-[153px] gap-[8px] flex flex-col rounded-[12px] border-[1px] border-dashed py-[20px] px-[102px] bg-[#0F1923] border-[#FFFFFF24]">
                <div className="w-[50px] h-[50px]">
                    <div class="absolute w-[8.35px] h-[8.35px] top-[30.42px] left-[391.23px] rounded-full bg-gradient-to-br from-[#FDFDFD] to-[#B3E0FF]"></div>
                    <div class="absolute w-[46.55000305175781] h-[25.011821746826172] top-[44.99px] left-[361.73px] rounded-full bg-gradient-to-br from-[#B3E0FF] to-[#8CD0FF]"></div>
                    <div class="absolute w-[50px] h-[50px] top-[20px] left-[360px] rounded-full bg-gradient-to-br from-[#0FAFFF] to-[#367AF2]"></div>
                </div>

                <div className="text-center">
                    <p className="font-[DM_Sans] text-[13px] font-semibold font-[600] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">Upload food image</p>
                </div>

                <div className="text-center">
                    <p className="font-[DM_Sans] text-[12px] font-semibold leading-[100%] tracking-[0.8%] text-[#556070]">Recommended 800×600 JPG / PNG</p>
                </div>

            </div>

            <div className="w-[770px] h-[40px] gap-[12px] flex justify-end">
                <button className="bg-[#243447] border-[1px] border-[#FFFFFF24] px-4 rounded-xl text-[#F0F4F8] font-[DM_Sans] text-[14px] font-bold">Cancel</button>
                <button className="bg-[#E67E22] border-[1px] border-[#FFFFFF24] px-4 rounded-xl text-[#F0F4F8] font-[DM_Sans] text-[14px] font-semibold">Save menu</button>

            </div>


        </section>
    )
}

export default ImageUpload
