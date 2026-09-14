import StatusBadge from "../dashboard/ui/StatusBadge";

const LEAVE_REQUESTS = [
  {
    id: 1,
    initials: "KP",
    name: "Kasun Perera",
    leaveType: "Annual",
    start: "24 Jun",
    end: "25 Jun",
    days: "2",
    status: "Approved",
    showActions: true,
  },
  {
    id: 2,
    initials: "NS",
    name: "Nimali Silva",
    leaveType: "Sick",
    start: "26 Jun",
    end: "26 Jun",
    days: "1",
    status: "Pending",
    showActions: true,
  },
  {
    id: 3,
    initials: "AF",
    name: "Amal Virath",
    leaveType: "Medical",
    start: "27 Jun",
    end: "29 Jun",
    days: "3",
    status: "Pending",
    showActions: true,
  },
  {
    id: 4,
    initials: "RP",
    name: "Ruwan Perera",
    leaveType: "Annual",
    start: "01 Jul",
    end: "02 Jul",
    days: "2",
    status: "Pending",
    showActions: false,
  },
];

const LeaveRequestsCard = ({ onApprove, onReject, onView }) => {
  const pendingCount = LEAVE_REQUESTS.filter(
    (r) => r.status === "Pending"
  ).length;

  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">
          Leave Requests
        </h2>
        <span className="text-amber-400 text-xs font-semibold border border-amber-700 bg-amber-500/10 rounded-full px-3 py-1">
          {pendingCount} Pending
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse">
          <thead>
            <tr className="bg-[#0B1220]">
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5 rounded-l-md">
                Employee
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Leave Type
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Start
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                End
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Days
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Status
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5 rounded-r-md">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {LEAVE_REQUESTS.map((req, index) => (
              <tr
                key={req.id}
                className={
                  index !== LEAVE_REQUESTS.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }
              >
                <td className="px-2.5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-orange-950 border border-orange-800 flex items-center justify-center text-orange-400 text-[10px] font-semibold shrink-0">
                      {req.initials}
                    </span>
                    <span className="text-white text-xs font-medium whitespace-nowrap">
                      {req.name}
                    </span>
                  </div>
                </td>
                <td className="px-2.5 py-3 text-gray-300 text-xs">
                  {req.leaveType}
                </td>
                <td className="px-2.5 py-3 text-gray-300 text-xs whitespace-nowrap">
                  {req.start}
                </td>
                <td className="px-2.5 py-3 text-gray-300 text-xs whitespace-nowrap">
                  {req.end}
                </td>
                <td className="px-2.5 py-3 text-gray-300 text-xs">
                  {req.days}
                </td>
                <td className="px-2.5 py-3">
                  <StatusBadge status={req.status} />
                </td>
                <td className="px-2.5 py-3">
                  {req.showActions ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onApprove?.(req.id)}
                        className="px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-700 text-emerald-400 text-[11px] font-semibold hover:bg-emerald-500/20 transition-colors duration-200"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        onClick={() => onReject?.(req.id)}
                        className="px-3 py-1.5 rounded-md bg-red-500/10 border border-red-700 text-red-400 text-[11px] font-semibold hover:bg-red-500/20 transition-colors duration-200"
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onView?.(req.id)}
                      className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-[11px] font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                    >
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequestsCard;