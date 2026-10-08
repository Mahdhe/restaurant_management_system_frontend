import DirectoryTable from "../../common/directorytable";

function EmployeeDirectory(){
    return(
        
            <div className="flex flex-col w-full min-w-0 mt-[16px]  min-h-[818px] rounded-[16px] bg-[#1C2A38] border border-[#FFFFFF14] p-[20px]">
                
        <div
         className=" flex w-full min-w-0 min-h-[65px] py-[12px] flex-col  md:flex-row lg:flex-row md:items-center md:justify-between gap-[16px] md:gap-[24px]">
        
            <div className="flex w-full min-h-[41px] py-[6px] gap-[4px] flex-col">
                <h2 className="w-full min-h-[23px] font-dm font-[600] text-[18px] sm:text-[24px] lg:text-[28px] text-[#FFFFFF] tracking-normal leading-none">
                 Employee Directory
                </h2>
                <p className="w-full min-h-[16px] font-dm font-[400] text-[12px] leading-none tracking-normal text-[#8A9BB0] ">
                    58 total employees
                </p>
            </div>


        <div className="flex w-full shrink-0 items-center gap-[12px] min-h-[40px] sm:w-auto">
        <button
        type="button"

         className="flex flex-1 max-w-[67px] min-h-[40px] gap-[12px] bg-[#243447] justify-center items-center border border-[#FFFFFF24] px-[16px] py-[8px] 
         opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer 
         ">
        Filter
        </button>
      

        
        <button
        type="button"
       
         className="ml-auto flex min-h-[40px] min-w-[77px] gap-[12px] px-[16px] justify-center items-center border border-[#FFFFFF24] py-[8px] bg-[#243447]
         opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer whitespace-nowrap
         ">
          Export
        </button>
        </div>
      
            </div>
  
        <div className="flex flex-col  w-full min-w-0 pb-[10px] min-h-[684px]  overflow-x-auto">
         <table className="min-w-[770px] table-fixed  border-collapse">
            <thead>
              <tr className="h-[46px] bg-[#243447] text-[#8A9BB0]">
                <th className="font-dm px-0 text-left pl-0 w-[190px] text-[11px] font-semibold leading-[100%] tracking-[0.008em]">
                    ROLE NAME
                </th>
                <th className="w-[120px] p-0 text-left font-dm text-[11px] font-semibold leading-[100%] tracking-[0.008em]">
                DESCRIPTION
                </th>
                <th className=" w-[80px] p-0 text-left font-dm text-[11px] font-semibold leading-[100%] tracking-[0.008em]">
                 USERS
                </th>
                <th className=" w-[100px] p-0 text-left font-dm text-[11px] font-semibold leading-[100%] tracking-[0.008em]">
                 CREATED
                </th>
                 <th className=" w-[73px] p-0 text-left font-dm text-[11px] font-semibold leading-[100%] tracking-[0.008em]">
                STATUS
                 </th>
                  <th className=" w-[207px] p-0 text-left font-dm text-[11px] font-semibold leading-[100%] tracking-[0.008em]">
                ACTIONS
                 </th>

              </tr>
            </thead>

            <tbody>
              {/* Table rows would go here */}
    
<DirectoryTable
  name="Super Admin"
  job="Full System access"
  nameicon={{ text: "SA", bg: "#8E44AD1F", border: "#8E44AD4D", color: "#8E44AD" }}
  users={{
    text: "3 users",
    bg: "#8E44AD1F",
    border: "#8E44AD4D",
    color: "#8E44AD",
  }}
  date="Jan 1, 2024"  
  description="Unrestricted access to all modules"
  status="Active"
  button1="Edit"
  button2="View"
  button3="Deactivate"
/>

<DirectoryTable
  name="Manager"
  job="Operations oversight"
  nameicon={{ text: "MG", bg: "#2980B91F", border: "#2980B91F", color: "#2980B9" }}
  users={{
    text: "6 users",
    bg: "#2980B91F",
    border: "#2980B94D",
    color: "#2980B9",
  }}
  date="Jan 5, 2024"  
  description="Manage staff, orders, reports"
  status="Active"
  button1="Edit"
  button2="View"
  button3="Deactivate"
/>

<DirectoryTable
  name="Cashier"
  job="Billing & Payments"
  nameicon={{ text: "AF", bg: "#F39C121F", border: "#F39C124D", color: "#F39C12" }} 
  users={{
    text: "8 users",
    bg: "#F39C121F",
    border: "#F39C124D",
    color: "#F39C12",
  }}
  date="Jan 8, 2024"  
  description="Handle billing,
  issue receipts"
  status="Active"
  button1="Edit"
  button2="View"
  button3="Deactivate"
/>

<DirectoryTable
  name="Waiter"
  job="Floor service"
  nameicon={{ text: "WT", bg: "#27AE601F", border: "#27AE601F", color: "#27AE60" }}
  users={{
    text: "9 users",
    bg: "#5560701F",
    border: "#5560704D",
    color: "#556070",
  }}
  date="Jan 10, 2024"  
  description="Table orders, 
  customer 
 service"
  status="Active"
  button1="Edit"
  button2="View"
  button3="Deactivate"
/>

<DirectoryTable
  name="Chef"
  job="Kitchen Head"
  nameicon={{ text: "CH", bg: "#8E44AD1F", border: "#8E44AD4D", color: "#8E44AD" }}
  users={{
    text: "5 users",
     bg: "#F39C121F",
    border: "#F39C124D",
    color: "#F39C12",
  }}
  date="Jan 12, 2024"  
  description="Kitchen 
operations, 
menu input"
  status="Active"
  button1="Edit"
  button2="View"
  button3="Deactivate"
/>

<DirectoryTable
  name="Kitchen Staff"
  job="Prep & Support"
  nameicon={{ text: "KS", bg: "#E74C3C1F", border: "#E74C3C4D", color: "#E74C3C" }}
  users={{
    text: "9 users",
     bg: "#5560701F",
    border: "#5560704D",
    color: "#556070",
  }}
  date="Feb 1, 2024"  
  description="Assist chef, 
kitchen prep"
  status="Active"
  button1="Edit"
  button2="View"
  button3="Deactivate"
/>

<DirectoryTable
  name="Inventory Staff"
  job="Stock Controller"
  nameicon={{ text: "IS", bg: "#2980B91F", border: "#2980B91F", color: "#2980B9" }} 
  users={{
   text: "3 users",
    bg: "#2980B91F",
    border: "#2980B94D",
    color: "#2980B9",
  }}
  date="Mar 3, 2024"  
  description="Manage stock, suppliers, 
orders"
  status="Inactive"
  button1="Edit"
  button2="View"
  button3="Deactivate"
/>
            </tbody>
          </table>
        </div>
      </div>
    );


}

export default EmployeeDirectory;
