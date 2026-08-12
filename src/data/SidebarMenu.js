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

export const menuGroups = [
  {
    title: "MAIN",
    items: [{ label: "Dashboard", icon: LayoutDashboard, roles: ["admin"] }],
  },
  {
    title: "OPERATIONS",
    items: [
      {
        label: "Table Management",
        icon: TableProperties,
        roles: ["admin", "waiter", "manager"],
      },
      {
        label: "Reservations",
        icon: CalendarDays,
        badge: "12",
        roles: ["admin", "waiter", "manager"],
      },
      {
        label: "Oder Management",
        icon: ClipboardList,
        roles: ["admin", "waiter", "manager"],
      },
      {
        label: "Kitchen Display",
        icon: ChefHat,
        badge: "8",
        roles: ["admin", "kitchen"],
      },
    ],
  },
  {
    title: "FINANCE",
    items: [
      {
        label: "Billing & Payments",
        icon: CreditCard,
        roles: ["admin", "cashier", "manager"],
      },
      {
        label: "Coupons & Tax",
        icon: TicketPercent,
        roles: ["admin", "manager"],
      },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      {
        label: "Menu Management",
        icon: UtensilsCrossed,
        roles: ["admin", "manager"],
      },
      {
        label: "Inventory & Stock",
        icon: Package,
        roles: ["admin", "manager", "kitchen"],
      },
      {
        label: "Staff Management",
        icon: UsersRound,
        roles: ["admin", "manager"],
      },
      { label: "Roles & Permissions", icon: ShieldCheck, roles: ["admin"] },
    ],
  },
  {
    title: "CRM",
    items: [
      {
        label: "Customers",
        icon: UserRound,
        roles: ["admin", "manager", "cashier"],
      },
      {
        label: "Notifications",
        icon: Bell,
        badge: "7",
        roles: ["admin", "manager", "cashier", "waiter", "kitchen"],
      },
    ],
  },
  {
    title: "INSIGHTS",
    items: [
      {
        label: "Reports & Analytics",
        icon: ChartNoAxesCombined,
        roles: ["admin", "manager"],
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { label: "Authentication & Security", icon: Settings, roles: ["admin"] },
    ],
  },
];
