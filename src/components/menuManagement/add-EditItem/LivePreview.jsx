import React from 'react'

const LivePreview = () => {
  return (
    <section className="flex flex-col w-[302px] h-[415px] rounded-[14px] border-[1px] p-[20px] gap-[20px] bg-[#1C2A38] border-[#FFFFFF14] mt-4">

        <div className="w-[262px] h-[35px] border-b-[1px] py-[6px] px-[5px] gap-[10px] flex border-[#FFFFFF14]">
            <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Live Preview</h1>
        </div>

        

        <div className="w-[260px] h-[320px] rounded-[16px] bg-[#1C2A38]">
            <img src="" alt="" className="w-[260px] h-[150px] rounded-t-[16px] p-[12px] flex gap-[10px] bg-[#243447]" />
        </div>

        

    </section>
                                

  )
}

export default LivePreview
