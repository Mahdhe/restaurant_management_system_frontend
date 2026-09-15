const SHIFT_CODE_STYLES = {
  M: "bg-[#E67E220F] text-[#E67E22]",
  E: "bg-[#2980B91F] text-[#2980B9]",
  N: "bg-[#5560701F] text-[#556070]",
  OFF: "bg-[#27AE601F] text-[#27AE60]",
};

const SHIFT_LEGEND = [
  { code: "M", label: "Morning" },
  { code: "E", label: "Evening" },
  { code: "N", label: "Night" },
  { code: "OFF", label: "Off Duty" },
];

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const EMPLOYEES = [
  {
    id: 1,
    initials: "KP",
    name: "Kasun Perera",
    shifts: ["M", "M", "M", "M", "M", "OFF", "OFF"],
  },
  {
    id: 2,
    initials: "NS",
    name: "Nimali Silva",
    shifts: ["OFF", "E", "E", "E", "E", "E", "OFF"],
  },
  {
    id: 3,
    initials: "AF",
    name: "Amal Virath",
    shifts: ["M", "M", "OFF", "M", "M", "M", "M"],
  },
  {
    id: 4,
    initials: "RP",
    name: "Ruwan Perera",
    shifts: ["E", "E", "E", "E", "OFF", "N", "N"],
  },
];

const ShiftCell = ({ code }) => (
  <span
    className={`inline-block min-w-[36px] px-2 py-1 rounded-md text-[11px] font-bold text-center ${SHIFT_CODE_STYLES[code]}`}
  >
    {code}
  </span>
);

const WeeklyShiftScheduleCard = ({
  weekLabel = "Week of June 23 – June 29,2025",
  onPrevWeek,
  onNextWeek,
}) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 mb-20 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-white text-base font-semibold">
            Weekly Shift Schedule
          </h2>
          <p className="text-gray-500 text-xs mt-0.5">{weekLabel}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrevWeek}
            className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-xs font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
          >
            Prev Week
          </button>
          <button
            type="button"
            onClick={onNextWeek}
            className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-xs font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
          >
            Next Week
          </button>
        </div>
      </div>

      <div className="overflow-x-auto mb-5">
        <table className="w-full min-w-[520px] border-collapse">
          <thead>
            <tr>
              <th className="text-left text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5">
                Employee
              </th>
              {DAYS.map((day) => (
                <th
                  key={day}
                  className="text-center text-gray-500 text-[10px] font-medium tracking-wide uppercase px-2.5 py-2.5"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {EMPLOYEES.map((emp, index) => (
              <tr
                key={emp.id}
                className={
                  index !== EMPLOYEES.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }
              >
                <td className="px-2.5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-orange-950 border border-orange-800 flex items-center justify-center text-orange-400 text-[10px] font-semibold shrink-0">
                      {emp.initials}
                    </span>
                    <span className="text-white text-xs font-medium whitespace-nowrap">
                      {emp.name}
                    </span>
                  </div>
                </td>
                {emp.shifts.map((code, dayIndex) => (
                  <td key={dayIndex} className="text-center px-2.5 py-3">
                    <ShiftCell code={code} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-slate-800">
        {SHIFT_LEGEND.map((item) => (
          <div key={item.code} className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold ${SHIFT_CODE_STYLES[item.code]}`}
            >
              {item.code}
            </span>
            <span className="text-gray-400 text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyShiftScheduleCard;