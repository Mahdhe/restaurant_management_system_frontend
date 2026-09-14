import InlineProgressBar from "../dashboard/ui/InlineProgressBar";

const STAFF_SCORES = [
  {
    id: 1,
    initials: "KP",
    name: "Kasun Perera",
    role: "Head Waiter",
    ordersServed: "324",
    attendance: 98,
    rating: "4.9",
    score: 98,
  },
  {
    id: 2,
    initials: "NS",
    name: "Nimali Silva",
    role: "Cashier",
    ordersServed: "280",
    attendance: 94,
    rating: "4.3",
    score: 94,
  },
  {
    id: 3,
    initials: "AF",
    name: "Amal Virath",
    role: "Sous Chef",
    ordersServed: "-",
    attendance: 92,
    rating: "4.2",
    score: 91,
  },
  {
    id: 4,
    initials: "RP",
    name: "Ruwan Perera",
    role: "Floor Manager",
    ordersServed: "210",
    attendance: 88,
    rating: "3.8",
    score: 88,
  },
];

const scoreColor = (score) => {
  if (score >= 95) return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-700" };
  if (score >= 90) return { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-700" };
  return { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-700" };
};

const StaffPerformanceScoresCard = ({ pendingCount = 3 }) => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">
          Staff Performance Scores
        </h2>
        <span className="text-amber-400 text-xs font-semibold border border-amber-700 bg-amber-500/10 rounded-full px-3 py-1">
          {pendingCount} Pending
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-[#0B1220]">
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5 rounded-l-md">
                Employee
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Orders Served
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Attendance
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Customer Rating
              </th>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5 rounded-r-md">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {STAFF_SCORES.map((emp, index) => {
              const colors = scoreColor(emp.score);
              return (
                <tr
                  key={emp.id}
                  className={
                    index !== STAFF_SCORES.length - 1
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
                        <p className="text-gray-500 text-[11px]">
                          {emp.role}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2.5 py-3 text-gray-300 text-xs">
                    {emp.ordersServed}
                  </td>
                  <td className="px-2.5 py-3">
                    <InlineProgressBar
                      percentage={emp.attendance}
                      displayValue={`${emp.attendance}%`}
                      barColor="bg-emerald-500"
                      valueColor="text-emerald-400"
                    />
                  </td>
                  <td className="px-2.5 py-3">
                    <InlineProgressBar
                      percentage={(emp.rating / 5) * 100}
                      displayValue={emp.rating}
                      barColor="bg-orange-500"
                      valueColor="text-white"
                    />
                  </td>
                  <td className="px-2.5 py-3">
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {emp.score}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffPerformanceScoresCard;