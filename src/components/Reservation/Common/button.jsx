function Commonbutton({children,className,onClick,type="button"}){
    return(
        <button type={type} onClick={onClick} 
        className={`w-full min-h-[40px] items-center justify-center rounded-[10px] py-[8px] px-[16px] 
        font-dm font-semibold text-[14px] leading-none tracking-normal  gap-[8px] ${className}`}>
            {children}

            </button>
    );
}

export default Commonbutton;