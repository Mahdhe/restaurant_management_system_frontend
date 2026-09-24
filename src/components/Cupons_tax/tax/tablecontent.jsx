
//status
const statusStyles = {
  Active: "border-[#27AE604D] bg-[#27AE601F] text-[#27AE60]",
  Inactive: "border-[#E74C3C4D] bg-[#E74C3C1F] text-[#E74C3C]",
};

function StatusBadge({ status }) {
  return (
    <div className="relative flex w-[91.5px] min-h-[24px] items-center gap-[20px] px-[9px] py-[4px]">
      <span
        className={`rounded-full border px-[16px] py-[4px] font-dm text-[11px] font-semibold leading-[18px] tracking-[0.08em] ${statusStyles[status]}`}
      >
        {status}
      </span>
    </div>
  );
}

//Toggle
function Toggle({ active = true }) {
  return (
    <button
      type="button"
      className={`relative flex h-[28px] w-[54px] shrink-0 items-center rounded-full px-[4px] transition ${
active ? "bg-[#E67E22]" : "bg-[#243447] border border-[#FFFFFF14]"
      }`}
    >
      <span
        className={`absolute left-[4px] top-[6px] h-[16px] w-[16px] rounded-full bg-white transition-transform ${
          active ? "translate-x-[30px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}


function TableContent({category,tax,service,status,toggle}){
    return(
        <div className="min-w-0 w-full  h-[62px] gap-[10px] border-[#FFFFFF14] py-[8px] border-b opacity-100">
        
        <div className="flex min-w-[740px]"> 
        <div className="min-w-[330px] min-h-[41px] p-[10px] gap-[10px]">
            <h3 className="font-dm font-medium leading-none tracking-normal text-[16px] text-[#FFFFFF]">
                   {category}
            </h3>
         
        </div>

<div className="flex min-w-[370px] justify-between min-h-[41px] gap-[10px]  p-[10px] px-12">
       
        <div className="flex min-w-[90px] shrink-0 min-h-[34px] border border-[#FFFFFF14] items-center bg-[#243447] px-[10px] py-[3px] gap-[10px] rounded-[10px]">    
        <h2 className="font-dm font-normal  tracking-normal text-[14px] leading-none text-[#FFFFFF]">
          {tax}
        </h2> </div>

        <div className="flex min-w-[90px] shrink-0 min-h-[34px] border border-[#FFFFFF14] items-center bg-[#243447] px-[10px] py-[3px] gap-[10px] rounded-[10px]"> 
        <select
        value={service}
        onChange={()=>{}}
         className="font-dm font-normal tracking-normal text-[16px] leading-none  text-[#FFFFFF] bg-[#243447] focus:outline-none">
            <option value="yes"> Yes </option>
            <option value="no"> NO </option>
          
        </select> </div>

       <StatusBadge status={status} />
      
      <div className="flex w-[91.5px] min-h-[34px] shrink-0 items-center px-[10px]">
  <Toggle active={toggle} />
</div>
     
  
         
</div>
        
        </div>
        </div>
    );

}

export default TableContent;