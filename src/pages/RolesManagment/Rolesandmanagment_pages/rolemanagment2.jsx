import ButtonsRow from "../../../components/RolesandPermission/common/buttonrow";
import Kpirow from "../../../components/RolesandPermission/roleandmanagment2/kpirow";
import Titlesection from "../../../components/RolesandPermission/common/title";
import Searchbar from "../../../components/RolesandPermission/roleandmanagment2/searchbar";
import Employee from "../../../components/RolesandPermission/roleandmanagment2/employeecard";


function RoleManagement2(){
    return(
        <div className="w-full min-w-0 min-h-[1158px] bg-[#0F1923]  p-6">
            <Titlesection />
            <ButtonsRow />
           <Kpirow />
            
              <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[850px_1fr]">
                <div className="flex flex-col gap-[20px] min-w-0">
                 <Searchbar />
                <Employee />   
                </div>
                
              </div>
        </div>
    );
}

export default RoleManagement2;