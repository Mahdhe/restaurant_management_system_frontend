function Confirm(){
    return(
        <div className="w-full h-[182px] rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] p-[20px] mt-[16px] gap-[16px]">

<div className="flex w-full min-h-[38px] pt-[3px] pb-[3px] gap-[10px]">
    <h1 className="font-dm  h-[18px] font-bold leading-[18px] tracking-normal text-[#FFFFFF]">
   Confirm Assignment
    </h1>
    </div>

<div className="w-full gap-[8px]  flex flex-col">
<button className="w-full min-h-[40px] items-center justify-center rounded-[10px] py-[8px] px-[16px] bg-[#E67E22]
font-dm font-semibold text-[14px] leading-none tracking-normal text-[#F0F4F8]">
    Confirm T04 Assignment
</button>

<button className="w-full min-h-[40px] items-center justify-center rounded-[10px] py-[8px] px-[16px] bg-[#243447]
font-dm font-semibold text-[14px] leading-none tracking-normal text-[#F0F4F8]">
    Choose Another Table
</button>
</div>
</div>
    );
}

export default Confirm;




