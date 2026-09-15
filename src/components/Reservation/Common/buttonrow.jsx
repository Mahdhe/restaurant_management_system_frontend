

import { NavLink } from "react-router-dom";

const buttons =[
    {
        name:"Dashboard",
        Path:"/dashboard"
    },

    {
         name:"Reservation List",
        Path:"/reservations/list"
    },

    {
         name:"Details",
        Path:"/reservations/details"
    },

    {
         name:"Assign Table",
        Path:"/reservations/assign-table"
    },

    {
         name:"Status Tracking",
        Path:"/reservations/status-tracking"
    }
];

function ButtonsRow() {
    return(
     <nav className="mt-[16px] flex  w-fit min-h-[60px] min-w-0 max-w-full  gap-[10px] overflow-x-auto
         rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] p-[10px]">
            {buttons.map((button)=>(
                <NavLink
                key={button.Path}
                to={button.Path}
                className={({isActive}) =>
                    `flex h-[40px] min-h-[40px] shrink-0 cursor-pointer whitespace-nowrap
                    items-center justify-center rounded-[10px] font-dm text-[14px] font-semibold transition-colors
                     px-[16px] py-[8px]
                    ${
                        isActive
                 ? " bg-[#E67E22]  text-[#F0F4F8]"
                 : " bg-transparent  text-[#8A9BB0]"
             }`
          }
        >
          {button.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default ButtonsRow;
