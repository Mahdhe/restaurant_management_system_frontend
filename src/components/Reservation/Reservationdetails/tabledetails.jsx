const Carditem=[
    {
        title:"GUEST",
        id:"4",
        description:"Family Seating",
        descriptioncolor:"#2980B9"
    },
 {
        title:"REQUESTED TIME",
       id:"8.30",
        description:"PM Today",
        descriptioncolor:"#F39C12"
    },
     {
        title:"TABLE",
        id:"T04",
        description:"Capacity Warning",
        descriptioncolor:"#E74C3C"
    },

];

function Detailscard({title,id,description,descriptioncolor}){
    return(
        <div className="flex flex-col min-w-0 h-[124px] border border-[#FFFFFF14] gap-[8px] bg-[#1C2A38] p-[16px] rounded-[14px]">
            <span className="text-[11px] w-fit h-[14px] font-dm font-semibold leading-none tracking-[0.08em] text-[#8A9BB0]">
                {title}
            </span>

            <span className="text-[28px] w-fit h-[36px] font-dm font-[700] leading-none tracking-[0.08em] text-[#F0F4F8]">
                {id}
            </span>
           
            <span
            style={{color:descriptioncolor}}
             className="text-[12px] w-fit h-[16px] font-dm font-[600] leading-none tracking-[0.08em]">
                {description}
            </span>
        </div>
    );
}


function Tabledetails(){
    return(
        <section className="min-w-0 h-[341px] rounded-[14px] gap-[20px] mt-[16px] border border-[#FFFFFF14] bg-[#1C2A38] p-[20px]">


{/* Name details left*/}
<div className="w-full flex flex-row min-w-0 mt-[16px] min-h-[137px]  gap-[16px]">
    <div className="flex h-[86px] w-[86px] flex-col items-center justify-center gap-[4px] rounded-[18px] border border-[#F39C1273] bg-[#F39C121F]
     text-[#F39C12] font-dm font-[700] leading-none tracking-[0.08em]">
T04
    </div>

{/* Name details right side */}
 <div className="flex min-w-0 flex-1 flex-col items-start gap-[8px]">
<span className="font-dm flex flex-col font-bold text-[28px] leading-none tracking-[0.08em] text-[#F0F4F8]">
   Fathima S. 
</span>
<span className="font-dm font-[400] text-[13px] leading-none tracking-[0.08em] text-[#556070]">
  Birthday dinner · 4 guests · 18 May, 8:30 PM </span>

<div className="flex flex-row gap-[10px]">
<span className="flex min-h-[24px] min-w-[62px] items-center justify-center rounded-full border border-[#F39C124D] bg-[#F39C121F]
text-[11px] font-semibold text-[#F39C12]">
    Pending
</span>
<span className="flex min-h-[24px] px-[9px]  items-center justify-center rounded-full border border-[#8E44AD] bg-[#8E44AD33]
text-[18px] font-semibold text-[#8E44AD]">
    VIP Note</span>
</div>
</div>
</div>


{/* Cards */}
<div className="w-full grid grid-cols-3 min-w-0 mt-[16px] min-h-[137px] gap-[12px]">
{Carditem.map((item)=>(
    <Detailscard
    key={item.title}
    title={item.title}
    id={item.id}
    description={item.description}
    descriptioncolor={item.descriptioncolor} 
    />
))}
</div>



        </section>
    );
}

export default Tabledetails;