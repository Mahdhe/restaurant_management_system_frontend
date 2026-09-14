import { Calendar } from "lucide-react";
import StatusBadge from "../dashboard/ui/StatusBadge";

const ATTENDANCE_LOG = [
  {
    id: 1,
    initials: "KP",
    name: "Kasun Perera",
    role: "Head Waiter",
    clockIn: "08:02 AM",
    breakTime: "12:00–12:30",
    duration: "6h 28m",
    lateMin: "0",
    lateColor: "text-emerald-400",
    status: "Present",
  },
  {
    id: 2,
    initials: "NS",
    name: "Nimali Silva",
    role: "Cashier",
    clockIn: "-",
    breakTime: "-",
    duration: "-",
    lateMin: "-",
    lateColor: "text-gray-500",
    status: "On Leave",
  },
  {
    id: 3,
    initials: "AF",
    name: "Amal Virath",
    role: "Sous Chef",
    clockIn: "8:30 AM",
    breakTime: "13:00–13:30",
    duration: "6h 30m",
    lateMin: "18",
    lateColor: "text-amber-400",
    status: "Late",
  },
  {
    id: 4,
    initials: "RP",
    name: "Ruwan Perera",
    role: "Waiter",
    clockIn: "08:35 AM",
    breakTime: "12:30–13:00",
    duration: "6h 20m",
    lateMin: "35",
    lateColor: "text-red-400",
    status: "Late",
  },
];

const TodaysAttendanceLogCard = ({ date = "June 23, 2025" }) => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-white text-base font-semibold">
            Today's Attendance Log
          </h2>
          <p className="text-gray-500 text-xs mt-0.5">{date}</p>
        </div>
        <div className="relative">
          <input
            type="date"
            className="bg-[#0B1220] border border-slate-700 rounded-md pl-3 pr-8 py-2 text-white text-xs focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-[#0B1220]">
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5 rounded-l-md">
                Employee
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Clock In
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Break
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Duration
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Late Min.
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5 rounded-r-md">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {ATTENDANCE_LOG.map((emp, index) => (
              <tr
                key={emp.id}
                className={
                  index !== ATTENDANCE_LOG.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }
              >
                <td className="px-2.5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-orange-950 border border-orange-800 flex items-center justify-center text-orange-400 text-[10px] font-semibold shrink-0">
                      {emp.initials}
                    </span>
                    <div>
                      <p className="text-white text-xs font-medium">
                        {emp.name}
                      </p>
                      <p className="text-gray-500 text-[11px]">{emp.role}</p>
                    </div>
                  </div>
                </td>
                <td className="px-2.5 py-3 text-gray-300 text-xs">
                  {emp.clockIn}
                </td>
                <td className="px-2.5 py-3 text-gray-300 text-xs">
                  {emp.breakTime}
                </td>
                <td className="px-2.5 py-3 text-gray-300 text-xs">
                  {emp.duration}
                </td>
                <td className={`px-2.5 py-3 text-xs font-medium ${emp.lateColor}`}>
                  {emp.lateMin}
                </td>
                <td className="px-2.5 py-3">
                  <StatusBadge status={emp.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodaysAttendanceLogCard;