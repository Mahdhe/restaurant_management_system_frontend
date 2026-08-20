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
        Path:"/reservation/assign-table"
    },

    {
         name:"Status Tracking",
        Path:"/reservations/status-tracking"
    }
];

function ButtonsRow() {
    return(
        <nav className="mt-[16px] flex min-h-[60px] w-full max-w-[591px] gap-[10px]
        overflow-auto rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] p-[10px]">
            {buttons.map((button)=>(
                <NavLink
                key={button.Path}
                to={button.Path}
                className={({isActive}) =>
                    `flex h-[40px] min-h-[40px] shrink-0 cursor-pointer
                    items-center justify-center rounded-[10px] font-dm text-[14px] font-semibold transition-colors
                    ${
                        isActive
                 ? "gap-[8px] bg-[#E67E22] px-[16px] py-[8px] text-[#F0F4F8]"
                 : "gap-[10px] bg-transparent px-[10px] py-[10px] text-[#8A9BB0]"
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
