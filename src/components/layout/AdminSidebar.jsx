import {
  Bell,
  CalendarDays,
  ChartNoAxesCombined,
  ChefHat,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  Package,
  Settings,
  ShieldCheck,
  TableProperties,
  TicketPercent,
  UserRound,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";

const menuGroups = [
  {
    title: "MAIN",
    items: [{ label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    title: "OPERATIONS",
    items: [
      { label: "Table Management", icon: TableProperties },
      { label: "Reservations", icon: CalendarDays, badge: "12" },
      { label: "Oder Management", icon: ClipboardList },
      { label: "Kitchen Display", icon: ChefHat, badge: "8" },
    ],
  },
  {
    title: "FINANCE",
    items: [
      { label: "Billing & Payments", icon: CreditCard },
      { label: "Coupons & Tax", icon: TicketPercent },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      { label: "Menu Management", icon: UtensilsCrossed },
      { label: "Inventory & Stock", icon: Package },
      { label: "Staff Management", icon: UsersRound },
      { label: "Roles & Permissions", icon: ShieldCheck },
    ],
  },
  {
    title: "CRM",
    items: [
      { label: "Customers", icon: UserRound },
      { label: "Notifications", icon: Bell, badge: "7" },
    ],
  },
  {
    title: "INSIGHTS",
    items: [{ label: "Reports & Analytics", icon: ChartNoAxesCombined }],
  },
  {
    title: "SYSTEM",
    items: [{ label: "Authentication & Security", icon: Settings }],
  },
];

export default function AdminSidebar({ user, activeItem, onNavigate }) {
  return (
    <aside className="flex min-h-screen w-60 text-slate-400 flex-col bg-[#1a2535] font-dmsans">
      <div className="border-b px-9 py-3 border-slate-700">
        {/* logo */}
        <div className="flex gap-3 items-center">
          <div className="grid h-8 w-8 text-white bg-[#e67e22] rounded-md place-items-center">
            <UtensilsCrossed size={20} strokeWidth={3} />
          </div>

          <div>
            <h2 className="text-white text-[15px] font-bold">Restaurant MS</h2>
            <p className="text-[#556070] text-[10px] mt-0.5 font-medium tracking-wide">
              ADMIN PANEL
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-2.5">
        {menuGroups.map((group) => (
          <div key={group.title} className="mb-7 last:mb-0">
            <p className="text-[10px] mb-3 text-[#556070] font-medium px-5">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    href="#"
                    key={item.label}
                    onClick={(event) => {
                      event.preventDefault();
                      onNavigate(item.label);
                    }}
                    className={`flex h-9 items-center px-3 gap-3 rounded-lg text-[13px] font-medium transition-colors ${
                      activeItem === item.label
                        ? "bg-[#e67e221a] text-[#e67e22]"
                        : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-100"
                    }`}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className={item.active ? "text-[#e67e22]" : ""}
                    />

                    <span className="flex-1">{item.label}</span>

                    {item.badge && (
                      <span className="grid h-4.5 min-w-4.5 rounded-full place-items-center px-1 bg-[#e67e22] text-[10px] font-semibold text-white">
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-2.5">
        <div className="flex gap-3 items-center rounded-[10px] bg-[#243447] text-xs font-bold text-orange-500">
          <div className="text-xs text-[#e67e22] font-bold">
            <span className="m-2 p-3 rounded-full bg-[#1c2a38]">
              {user.initials}
            </span>
          </div>

          <div className="py-2">
            <h4 className="text-[13px] text-slate-100 font-semibold">
              {user.name}
            </h4>
            <p className="text-[11px] text-slate-500">{user.roleLabel}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
