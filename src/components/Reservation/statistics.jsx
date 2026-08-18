
const pendingApprovals =[
    {
        name:"Fathima S.",
        details:"8:30 PM · 4 guests · Birthday dinner"
    },
     {
       name:"Fathima S.",
        details:"8:30 PM · 4 guests · Birthday dinner"
    }
];

function Quickbutton({name,isPrimary=false,customtextColor=""}) {
    return(
        <button 
        type="button"
        className={`flex w-full min-h-[40px] items-center justify-center gap-[8px]  rounded-[10px] px-[16px] py-[8px]
        font-dm text-[14px] font-semibold"
        ${
            isPrimary
            ? "bg-[#E67E22] text-white"
            : `border border-[#FFFFFF24]  ${
            customtextColor || "text-white"
        }`
    }
    `}

>
            {name}
        </button>
    );
}


function Statistics(){
    return(
<section className="
  mt-[16px] flex w-full min-w-0 flex-col
  items-start gap-[16px]
  lg:flex-row
">
    <div className="flex w-full  flex-col min-w-0  flex-1 lg:min-h-[510px] rounded-[14px] border border-[#FFFFFF14] p-[20px] gap-[20px] bg-[#1C2A38]">
   
    <div className="w-full flex justify-between  min-h-[29px] px-[5px] py-[3px]  gap-[10px]">
<h3 className="font-dm font-[700] leading-none tracking-normal text-[18px] text-[#F0F4F8]">
    Today’s Reservation Flow
</h3>

<p className="shrink-0 text-right font-dm font-semibold text-[13px] text-[#556070] leading-none tracking-normal">
    Hourly View
</p>
    </div>

{/* graph */}
<div className="w-full max-w-[750px] min-h-[287px] rounded-[14px] border border-[#FFFFFF14] bg-[#243447] flex flex-col pt-[20px] pb-[30px] sm:px-[30px] sm:pt-[25px] sm:pb-[35px] md:px-[50px] md:pb-[45px]">
<div className="w-full flex flex-row max-w-[592px] min-h-[149px] gap-[8px] sm:gap-[16px] justify-between items-end shrink-0">
  <div className="w-full max-w-[50px] h-[149px] min-w-0 rounded-t-[8px] bg-[#F39C12]" /> 

  <div className="w-full max-w-[50px] h-[124px] min-w-0  rounded-t-[8px] bg-[#27AE60]" /> 

 <div className="w-full max-w-[50px] h-[138px] min-w-0  rounded-t-[8px] bg-[#2980B9]" /> 

  <div className="w-full max-w-[50px] h-[112px] min-w-0  rounded-t-[8px] bg-[#F39C12]" /> 

    <div className="w-full max-w-[50px] min-w-0  h-[149px] rounded-t-[8px] bg-[#27AE60]" /> 

</div>

<div className="flex flex-row justify-between w-full max-w-[598px] min-h-[37px] px-[10px] items-center mt-[16px]">
<div className="flex flex-col font-dm font-semibold h-[17px] text-[13px] tracking-normal leading-none text-white">
    5 pm
</div>

<div className="flex font-dm font-semibold h-[17px] text-[13px] tracking-normal leading-none text-white">
6 pm
</div>

<div className="flex flex-col font-dm font-semibold h-[17px] text-[13px] tracking-normal leading-none text-white">
    7 pm
</div>

<div className="flex flex-col font-dm font-semibold h-[17px] text-[13px] tracking-normal leading-none text-white">
    8 pm
</div>

<div className="flex flex-col font-dm font-semibold h-[17px] text-[13px] tracking-normal leading-none text-white">
    9 pm
</div>
</div>
 </div>
 </div>



    {/* right side */}
    <div className="w-full lg:w-[424px] lg:shrink-0 flex flex-col min-w-0 min-h-[705px]">
       
       {/* Right top box */}
        <div className="w-full min-h-[264px] max-w-[434px] rounded-[14px] gap-[16px] p-[20px] bg-[#1C2A38]">
        <div className="flex flex-row justify-between w-full max-w-[384px] min-h-[30px] py-[3px] gap-[10px]">
            <h3 className="font-dm font-bold text-[18px] tracking-normal leading-none text-[#F0F4F8]">
                Pending Approvals
            </h3>
           <div className="flex flex-col w-full items-center max-w-[71px] border border-[#F39C124D] py-[4px] px-[9px] rounded-[999px] bg-[#F39C121F]">

           <h4 className="font-dm font-semibold text-[11px] tracking-[0.08em] leading-[18px] text-[#F39C12] whitespace-nowrap">
           6 Pending </h4>
            </div> 
        </div>
    
    <div className="mt-[16px] flex w-full flex-col gap-[12px]">
        {pendingApprovals.map((approval,index)=>(
            <div 
            key={index}
            className="flex w-full min-h-[81px] items-center justify-between gap-[8px] rounded-[12px] border border-[#FFFFFF14] bg-[#243447] px-[10px] py-[12px]">

                <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
                    <h4 className="font-dm text-[14px] font-semibold leading-none text-[#F0F4F8]">
                        {approval.name}
                    </h4>

                    <p className="font-dm text-[13px] font-[400] leading-none text-[#8A9BB0]">
                        {approval.details}</p>
                </div>

                <button type="button" 
                className={`flex h-[40px] w-[79px] items-center justify-center gap-[8px] rounded-[10px]  px-[16px] py-[8px]
                font-dm text-[13px] font-semibold text-[#F0F4F8]
                ${
                    index===0
                    ? "bg-[#E67E22]"
                    : "bg-[#243447] border border-[#FFFFFF24]"
                }
            `}
            >
                Review 
                </button>
            </div>
        ))}
    </div>
        </div>


{/* bottom box */}
     <div className="w-full flex flex-col mt-[16px] min-h-[231px] rounded-[14px] border bg-[#1C2A38] min-w-0 border-[#FFFFFF14] gap-[10px] p-[16px] sm:p-[20px]">
        <div className="flex flex-col w-full min-h-[191px] max-w-[384px] rounded-[14px] gap-[12px]">


       <div className="flex w-full min-h-[42px] items-center justify-center">
        <h3 className="font-dm font-[700] text-[#FFFFFF] leading-none tracking-normal text-[18px]">
            Quick Actions
        </h3>
       </div>

       <div className="w-full flex flex-col min-h-[136px] gap-[8px]">
        <Quickbutton 
        name="Create Reservation"
        isPrimary
        />

        <Quickbutton 
        name="Transfer Table"
        />

        <Quickbutton 
        name="View Conflicts"
        customtextColor="text-[#556070]"
        />

       </div>
       </div>
       
        </div>   
    </div>
 </section>
    );
}

export default Statistics;

