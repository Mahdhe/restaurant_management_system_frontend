import React from 'react'

const UpcomingBirthdays = () => {
  return (
    <section className="w-[300px] h-[237px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

        <div className="w-[300px] h-[53px] rounded-t-[14px] border-[1px] p-[20px] pb-[10px] gap-[10px] flex border-[#FFFFFF14]">
            <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Upcoming Birthdays</h1>
        </div>

        <div className="w-[300px] h-[184px] py-[10px] px-[20px] gap-[10px] flex">

            <div className="w-[260px] h-[164px] py-[10px]">

                <div className="w-[260px] h-[36px] border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14]">
                    <h1 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Dilani Rathnayake </h1>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#3BB273] text-end">18 Jul</p>
                </div>

                <div className="w-[260px] h-[36px] border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14]">
                    <h1 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Chamara Wikramasinghe</h1>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#3BB273] text-end">19 Jul</p>
                </div>

                <div className="w-[260px] h-[36px] border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14]">
                    <h1 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Tharindhu Jayasuriya</h1>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#3BB273] text-end">25 Jul</p>
                </div>

                <div className="w-[260px] h-[36px] border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14]">
                    <h1 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Sanduni Perera</h1>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#3BB273] text-end">29 Jul</p>
                </div>

            </div>

        </div>
        
    </section>
  )
}

export default UpcomingBirthdays
