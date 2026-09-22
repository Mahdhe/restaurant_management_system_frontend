function TableContent({title,value }) {
    return(
        <div className="min-w-0 h-[59px] flex flex-col gap-[8px]">
            <span className="font-dm font-semibold text-[13px] leading-[14px] tracking-[0.08em] text-[#8A9BB0]">
                {title}
            </span>

            <div className="min-w-0 min-h-[34px] border border-[#FFFFFF14] rounded-[10px] bg-[#243447] px-[10px] py-[3px]">

            <span className="font-dm font-medium text-[14px] text-[#FFFFFF]">
                {value}
            </span>
             </div>
        </div>
    );
}

export default TableContent;