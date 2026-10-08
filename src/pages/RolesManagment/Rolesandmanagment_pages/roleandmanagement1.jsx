import ButtonsRow from "../../../components/RolesandPermission/common/buttonrow";
import Kpirow from "../../../components/RolesandPermission/common/kpirow";
import Titlesection from "../../../components/RolesandPermission/common/title";
import EmployeeDirectory from "../../../components/RolesandPermission/roleandmanagment1/employee/directory";
import RoleDetails from "../../../components/RolesandPermission/roleandmanagment1/employee/roledetails";


function RoleManagement1(){
    return(
        <div className="w-full min-w-0 min-h-[1158px] bg-[#0F1923]  p-6">
            <Titlesection />
            <ButtonsRow />
            <Kpirow />

  <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[840px_1fr]">
<EmployeeDirectory />
<RoleDetails />
  </div>
        </div>
    );
}

export default RoleManagement1;