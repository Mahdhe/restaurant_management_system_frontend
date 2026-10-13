import Commonbutton from "../../Reservation/Common/button";
import Customerdetail from "./customerdetails";
import {Pencil,Clock,Ban, SquarePen,Plus} from "lucide-react";

function CustomAccess(){
    return(
        <div className="flex flex-col min-w-0 h-auto mt-0 lg:mt-[16px] gap-[20px]">

           {/* Custom Access  */}
            <div className="flex flex-col min-w-0 h-auto rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] overflow-hidden" >
             
             <div className="flex min-w-0 min-h-[96px] h-auto md:h-[96px] rounded-t-[14px] p-[20px] border border-[#FFFFFF14] gap-[10px] items-center"> 

             <div className="flex w-[48px] h-[48px] bg-[#2980B91F] items-center shrink-0 justify-center rounded-full font-dm font-bold leading-[14px] tracking-[1.12px] text-center text-[#2980B9]">
                  SA
      
                </div>

                <div className="flex flex-col flex-1 min-w-0 items-start">
        <span className="font-dm font-[600] text-[14px] leading-[24px] tracking-[1.12px]  text-[#FFFFFF]">
         Custom Access
        </span>

        <span className="whitespace-pre-line font-dm font-[600] text-[12px] leading-[18px] tracking-[1.12px] text-[#8A9BB0]">
         Kasun Perera — <br />
      Manager
        </span>
       </div>

        <button
  type="button"
  className="ml-auto relative flex h-[28px] w-[54px] items-center rounded-full bg-[#27AE60] px-[4px] shrink-0"
>
  <span className="absolute right-[4px] h-[16px] w-[16px] rounded-full bg-white" />
</button>
</div>


    <div className="flex flex-col min-w-0 p-[20px] gap-[30px]">
        <Customerdetail Title="ORDERS" 
        items={[
            "View Orders","Edit Orders","Delete  Orders"
            
            
        ]}
       />

        <Customerdetail Title="KITCHEN" 
        items={[
            "View KDS","Update Status"
            
            
        ]}
        />

        <Customerdetail Title="BILLING" 
        items={[
            "Issue Bills","Refund Payment"
            
            
        ]}
        />
        
        <Customerdetail Title="INVENTORY" 
        items={[
            "Edit Stock","Manage Suppliers"
            
            
        ]}
        />

        <Customerdetail Title="REPORTS" 
        items={[
            "Analytics"
            
            
        ]}
        />

        <Customerdetail Title="SETTINGS" 
        items={[
            "System Settings"
            ]}
            showLastBorder={true}
        />


</div>

   <div className="flex flex-col min-w-0  p-[20px] gap-[20px]">
    <Commonbutton className="min-w-0 bg-[#E67E22] text-[#F0F4F8]">
        Save Access Settings
    </Commonbutton>
     
  
     <Commonbutton className="min-w-0 bg-[#E74C3C1F] text-[#E74C3C]" >
   Reset to Role Default
     </Commonbutton>

 </div>
        </div>


    <div className="w-full flex flex-col min-w-0 min-h-[503px] bg-[#1C2A38] rounded-[14px] border border-[#FFFFFF14]">
   <div className="flex min-h-[53px] w-full rounded-t-[14px] border border-[#FFFFFF14] pt-[20px] pb-[10px] gap-[10px] px-[20px] justify-between items-center">
     <span className="font-dm font-bold text-[18px] leading-none tracking-normal text-[#FFFFFF]">
    Recent Activity
     </span>

     <span className="font-dm font-bold text-[14px] leading-none  align-middle tracking-[0.08em] text-[#E67E22]">
    View All
       </span>
   </div>

   <div className="flex-1 min-w-0 p-[20px]">
   <div className="flex  flex-col min-w-0 py-[10px]">

        {/* box1 */} 
        <div className="flex min-w-0 shrink-0 items-start min-h-[78px] h-auto border-b border-[#FFFFFF14] gap-[10px] py-[10px]">
                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#2980B91F]">
        <Pencil className="h-[14px] w-[14px] text-[#2980B9]" />
      </div>

      {/* Name + Time */}
      <div className="flex flex-1  min-w-0 flex-col gap-[4px]">

        {/* Name */}
        <p className="text-[14px] leading-[22px] text-[#FFFFFF] tracking-[0.04em]">
          Kasun updated {" "}
          <span className="font-bold">Manager</span>
          <br />
          permissions
        </p>

        {/* Time + Clock icon */}
        <div className="flex items-center gap-[5px]">
          <Clock className="h-[12px] w-[12px] shrink-0 text-[#60758A]" />

          <span className="text-[12px] tracking-[1px] text-[#8A9BB0]">
            2 mins ago
          </span>
        </div>
           </div>
           </div>

     <div className="flex shrink-0 min-w-0 items-start min-h-[78px] h-auto border-b border-[#FFFFFF14] py-[10px] gap-[10px]">
        
                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#E74C3C1F]">
        <Ban className="h-[14px] w-[14px] text-[#E74C3C] "/>
      </div>

      {/* Name + Time */}
      <div className="flex min-w-0 flex-1 flex-col gap-[4px]">

        {/* Name */}
        <p className="text-[14px] leading-[22px] text-[#F0F4F8]">
          Admin disabled{" "}
          <span className="font-bold">Waiter</span> {""}
          access
          <br />
          to Reports
        </p>

        {/* Time + Clock icon */}
        <div className="flex items-center gap-[5px]">
          <Clock className="h-[12px] w-[12px] shrink-0 text-[#60758A]" />

          <span className="text-[12px] tracking-[1px] text-[#8A9BB0]">
            18 mins ago
          </span>
        </div>
           </div>
           </div>


         <div className="flex min-w-0 shrink-0 items-start min-h-[78px] h-auto border-b border-[#FFFFFF14] py-[10px] gap-[10px]">
       
                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#E67E220F]">
        <SquarePen className="h-[14px] w-[14px] text-[#F39C12]" />
      </div>

      {/* Name + Time */}
      <div className="flex min-w-0 flex-col flex-1 gap-[4px]">

        {/* Name */}
        <p className="text-[14px] leading-[22px] text-[#F0F4F8]">
         
          <span className="font-bold">Cashier</span> {""}
          role permissions
          <br />
         modified
        </p>

        {/* Time + Clock icon */}
         <div className="flex items-center gap-[5px]">
          <Clock className="h-[12px] w-[12px] shrink-0 text-[#60758A]" />

          <span className="text-[12px] tracking-[1px] text-[#8A9BB0]">
           1 hour ago
          </span>
        </div>
           </div>
           </div>

            

<div className="flex min-w-0 shrink-0 items-start min-h-[78px] h-auto border-b border-[#FFFFFF14] py-[10px] gap-[10px]">
          
                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#3BB2731F]">
        <Plus className="h-[14px] w-[14px] text-[#3BB273]" />
      </div>

      {/* Name + Time */}
      <div className="flex min-w-0 flex-col flex-1  gap-[4px]">

        {/* Name */}
        <p className="text-[14px] leading-[22px] text-[#F0F4F8]">
          New role{" "}
          <span className="font-bold">Inventory Staff</span>
          <br />
         created
        </p>

        {/* Time + Clock icon */}
        <div className="flex items-center gap-[5px]">
          <Clock className="h-[12px] w-[12px] shrink-0 text-[#60758A]" />

          <span className="text-[12px] tracking-[1px] text-[#8A9BB0]">
          3 hours ago
          </span>
        </div>
           </div>
           </div>


           <div className="flex min-w-0 shrink-0 items-start min-h-[78px]  h-auto border-b border-[#FFFFFF14] py-[10px] gap-[10px]">
          
                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#E74C3C1F]">
       </div>

      {/* Name + Time */}
      <div className="flex min-w-0 flex-col flex-1 gap-[4px]">

        {/* Name */}
        <p className="text-[14px] leading-[22px] text-[#F0F4F8]">
          Security alert: multiple failed{" "}
         <br />
          logins on {""}
          <span className="font-bold">Super Admin</span>
        </p>

        {/* Time + Clock icon */}
        <div className="flex items-center gap-[5px]">
          <Clock className="h-[12px] w-[12px] shrink-0 text-[#60758A]" />

          <span className="text-[12px] tracking-[1px] text-[#8A9BB0]">
           Yesterday, 11:42 PM
          </span>
        </div>
           </div>
           </div>
        </div>
    </div>
   </div>
    </div>
        
       
    );
}

export default CustomAccess;