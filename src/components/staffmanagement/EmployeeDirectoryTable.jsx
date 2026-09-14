import StatusBadge from "../dashboard/ui/StatusBadge";

const EMPLOYEES = [
  {
    id: 1,
    initials: "KP",
    name: "Kasun Perera",
    email: "kasun@restro.lk",
    empId: "#EMP-0041",
    role: "Head Waiter",
    department: "Service",
    phone: "077 123 4567",
    shift: "Morning",
    status: "Active",
  },
  {
    id: 2,
    initials: "NS",
    name: "Nimali Silva",
    email: "nimali@restro.lk",
    empId: "#EMP-0038",
    role: "Cashier",
    department: "Cashier",
    phone: "077 987 6543",
    shift: "Evening",
    status: "On Leave",
  },
  {
    id: 3,
    initials: "AF",
    name: "Amal Virath",
    email: "kasun@restro.lk",
    empId: "#EMP-0021",
    role: "Sous Chef",
    department: "Kitchen",
    phone: "075 122 5889",
    shift: "Morning",
    status: "Active",
  },
  {
    id: 4,
    initials: "RP",
    name: "Ruwan Perera",
    email: "ruwan@restro.lk",
    empId: "#EMP-0033",
    role: "Waiter",
    department: "Service",
    phone: "077 876 2554",
    shift: "Evening",
    status: "Inactive",
  },
];

const EmployeeDirectoryTable = ({
  totalEmployees = 58,
  currentPage = 1,
  totalPages = 3,
  onView,
  onEdit,
  onDeactivate,
  onPageChange,
}) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5 mb-60">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-white text-base font-semibold">
            Employee Directory
          </h2>
          <p className="text-gray-500 text-xs mt-0.5">
            {totalEmployees} total employees
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
          >
            Filter
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
          >
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse">
          <thead>
            <tr className="bg-[#243447]">
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3 rounded-l-md">
                Employee
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Emp ID
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Role
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Department
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Phone
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Shift
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Status
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3 rounded-r-md">
                Actions
              </th>
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
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-orange-950 border border-orange-800 flex items-center justify-center text-orange-400 text-xs font-semibold shrink-0">
                      {emp.initials}
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {emp.name}
                      </p>
                      <p className="text-gray-500 text-xs">{emp.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-400 text-sm">
                  {emp.empId}
                </td>
                <td className="px-4 py-4 text-gray-200 text-sm">
                  {emp.role}
                </td>
                <td className="px-4 py-4 text-gray-200 text-sm">
                  {emp.department}
                </td>
                <td className="px-4 py-4 text-gray-300 text-sm">
                  {emp.phone}
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={emp.shift} />
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={emp.status} />
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onView?.(emp.id)}
                      className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-xs font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() => onEdit?.(emp.id)}
                      className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-xs font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onDeactivate?.(emp.id)}
                      className="px-3 py-1.5 rounded-md bg-red-500/10 border border-red-700 text-red-400 text-xs font-semibold hover:bg-red-500/20 transition-colors duration-200"
                    >
                      Deactivate
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5">
        <span className="text-gray-500 text-xs">
          Showing {EMPLOYEES.length} of {totalEmployees} employees
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onPageChange?.(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-gray-300 text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
          >
            ‹ Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange?.(page)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 ${
                page === currentPage
                  ? "bg-[#E67E22] text-white"
                  : "bg-slate-800 border border-slate-700 text-gray-300 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            onClick={() => onPageChange?.(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-gray-300 text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
          >
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectoryTable;