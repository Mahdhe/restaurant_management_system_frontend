

function Searchbar(){
    return(
        <div className="flex items-center min-w-0 w-full min-h-[92px] mt-[16px] rounded-[16px] p-[10px] gap-[10px] bg-[#1C2A38]">


{/* search bar */}
    <div className="flex flex-wrap items-center justify-start gap-2">
        <input type="text"
        placeholder="Search staff name, role, email..."
        className="w-full md:w-[280px] h-[40px] font-dm font-[400] text-[14px] leading-none tracking-normal text-[#556070] rounded-[10px] border border-[#FFFFFF24] bg-[#243447] py-[8px] px-[12px]" />
   

    {/* filter1 */}
    <select className="w-full md:w-[140px] h-[40px] py-[8px] px-[12px] border border-[#FFFFFF24] bg-[#243447] gap-[8px] rounded-[10px] text-[14px] text-[#F0F4F8]">
        <option value="">All Roles</option>
        <option value="Manager">Manager</option>
        <option value="Cashier">Cashier</option>
    </select>

     {/* filter2 */}
    <select className=" w-full md:w-[140px] h-[40px] py-[8px] px-[12px] border border-[#FFFFFF24] bg-[#243447] gap-[8px] rounded-[10px] text-[14px] text-[#F0F4F8]">
        <option value="">All Status</option>
        <option value="Manager">Active</option>
        <option value="Cashier">Inactive</option>
    </select>
    </div>

     </div>
     

    );
}

export default Searchbar;