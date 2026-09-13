import StatusBadge from "../dashboard/ui/StatusBadge";

const ACTIVITY = [
  {
    id: 1,
    dotColor: "bg-emerald-500",
    text: "Kasun Perera clocked in",
    time: "08 : 02 AM",
  },
  {
    id: 2,
    dotColor: "bg-amber-500",
    text: "Nimali Silva requested leave",
    time: "09 : 15 AM",
  },
  {
    id: 3,
    dotColor: "bg-blue-500",
    text: "Amal Fernando assigned evening shift",
    time: "10 : 05 AM",
  },
  {
    id: 4,
    dotColor: "bg-red-500",
    text: "Ruwan Perera clocked out",
    time: "03 : 10 PM",
  },
  {
    id: 5,
    dotColor: "bg-slate-500",
    text: "Akila Fernando updated profile",
    time: "04 : 20 pM",
  },
];

const RecentStaffActivity = () => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-white text-base font-semibold">
            Recent Staff Activity
          </h2>
          <p className="text-gray-500 text-xs mt-0.5">Live Feed</p>
        </div>
        <StatusBadge status="Live" />
      </div>

      <div>
        {ACTIVITY.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-start gap-3 py-4 ${
              index !== ACTIVITY.length - 1 ? "border-b border-slate-800" : ""
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.dotColor}`}
            />
            <div>
              <p className="text-gray-200 text-sm">{item.text}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentStaffActivity;