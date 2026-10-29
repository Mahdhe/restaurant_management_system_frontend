import { useState } from "react";
import RoleManagement1 from "./Rolesandmanagment_pages/roleandmanagement1";
import RoleManagement2 from "./Rolesandmanagment_pages/rolemanagment2";
import RoleTabs from "../../components/RolesandPermission/common/buttonrow";

export default function RolesAndPermissions() {
  const [activeTab, setActiveTab] = useState("role-management");

  const renderContent = () => {
    switch (activeTab) {
      case "role-management":
        return <RoleManagement1 />;
      case "access-control":
        return <RoleManagement2 />;
    }
  };

  return (
    <div className="w-full min-w-0">
      <section className=" flex w-full min-w-0 min-h-[61px] flex-col  md:flex-row lg:flex-row md:items-center md:justify-between gap-[16px] md:gap-[24px] p-6">
        <div className="flex w-full min-h-[61px] flex-col gap-[4px]">
          <h2 className="w-full min-h-[36px] font-dm font-[600] text-[22px] sm:text-[24px] lg:text-[28px] text-[#F0F4F8] tracking-normal leading-none">
            Roles & Permissions
          </h2>
          <p className="w-full min-h-[21px] font-dm font-[400] text-[16px] leading-none tracking-normal text-[#556070] ">
            Manage staff roles, permissions and access levels across the
            restaurant.
          </p>
        </div>

        {/* buttons  */}
        <div className="flex w-full shrink-0 items-center gap-[12px] min-h-[40px] sm:w-auto">
          <button
            type="button"
            // onClick={()=> navigate("/reservations/details")}
            className="flex flex-1 max-w-[128px] min-h-[40px] gap-[12px] bg-[#243447] justify-center items-center border border-[#FFFFFF24] px-[16px] py-[8px] 
         opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer 
         "
          >
            Export Role
          </button>

          <button
            type="button"
            // onClick={()=> navigate("/reservations/assign-table")}
            className="ml-auto flex min-h-[40px] min-w-[128px] gap-[12px] px-[16px] bg-[#E67E22] justify-center items-center border border-[#FFFFFF24] py-[8px]
         opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer whitespace-nowrap
         "
          >
            + Add Role
          </button>
        </div>
      </section>

      <RoleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>{renderContent()}</div>
    </div>
  );
}

// import RoleManagement1 from "./Rolesandmanagment_pages/roleandmanagement1";
// import RoleManagement2 from "./Rolesandmanagment_pages/rolemanagment2";

// function RoleManagementRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/roles/management1" replace />} />
//       <Route path="/roles/management1" element={<RoleManagement1 />} />

//       <Route path="/roles/management2" element={<RoleManagement2 />} />
//     </Routes>
//   );
// }

// export default RoleManagementRoutes;
