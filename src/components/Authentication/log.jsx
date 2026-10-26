
// import { useMemo, useState } from "react";

// const initialLogs = [
//   {
//     user: "Kasun Perera",
//     employeeId: "EMP-1842",
//     role: "Manager",
//     department: "Operations",
//     login: "08:12 AM",
//     logout: "04:30 PM",
//     duration: "8h 18m",
//     device: "Desktop",
//     os: "Windows",
//     browser: "Chrome",
//     ip: "192.168.1.14",
//     status: "Success",
//   },
//   {
//     user: "Nimali Silva",
//     employeeId: "EMP-1845",
//     role: "Cashier",
//     department: "Front Desk",
//     login: "09:08 AM",
//     logout: "—",
//     duration: "8h 18m",
//     device: "Mobile",
//     os: "macOS",
//     browser: "Safari",
//     ip: "192.168.1.09",
//     status: "Success",
//   },
//   {
//     user: "Ruwan Jayasuriya",
//     employeeId: "EMP-1987",
//     role: "Head Chef",
//     department: "Kitchen",
//     login: "07:45 AM",
//     logout: "04:30 PM",
//     duration: "8h 18m",
//     device: "Tablet",
//     os: "Android",
//     browser: "Chrome",
//     ip: "192.168.1.31",
//     status: "Success",
//   },
//   {
//     user: "Dilani Fernando",
//     employeeId: "EMP-1011",
//     role: "Waiter",
//     department: "Front of House",
//     login: "10:52 AM",
//     logout: "—",
//     duration: "8h 18m",
//     device: "Desktop",
//     os: "Windows",
//     browser: "Edge",
//     ip: "192.168.1.47",
//     status: "Success",
//   },
// ];

// const filters = [
//   "Today",
//   "Last 7 Days",
//   "Success",
//   "Failed",
//   "Locked",
//   "MFA",
// ];

// const columns = [
//   "USER",
//   "EMPLOYEE ID",
//   "ROLE",
//   "DEPARTMENT",
//   "LOGIN TIME",
//   "LOGOUT TIME",
//   "DURATION",
//   "DEVICE / OS",
//   "BROWSER",
//   "IP ADDRESS",
// ];

// export default function App() {
//   const [search, setSearch] = useState("");
//   const [activeFilter, setActiveFilter] = useState("Today");

//   const filteredLogs = useMemo(() => {
//     return initialLogs.filter((log) => {
//       const matchesSearch = Object.values(log).some((value) =>
//         String(value).toLowerCase().includes(search.toLowerCase())
//       );

//       const matchesFilter =
//         ["Today", "Last 7 Days"].includes(activeFilter) ||
//         log.status === activeFilter;

//       return matchesSearch && matchesFilter;
//     });
//   }, [search, activeFilter]);

//   const exportCSV = () => {
//     const rows = [
//       columns,
//       ...filteredLogs.map((log) => [
//         log.user,
//         log.employeeId,
//         log.role,
//         log.department,
//         log.login,
//         log.logout,
//         log.duration,
//         `${log.device} - ${log.os}`,
//         log.browser,
//         log.ip,
//       ]),
//     ];

//     const csv = rows
//       .map((row) =>
//         row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")
//       )
//       .join("\n");

//     const blob = new Blob(["\uFEFF" + csv], {
//       type: "text/csv;charset=utf-8;",
//     });

//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "authentication-log.csv";
//     link.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <section className="w-full rounded-xl border border-[#2c3a49] bg-[#1c2a38] p-4 text-white sm:p-6">
//       {/* Section header */}
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <h2 className="text-xs font-semibold tracking-wide text-[#f1f5f9]">
//             Authentication Log
//           </h2>
//           <p className="mt-1 text-[10px] text-[#8496aa]">
//             Complete session history across all branches
//           </p>
//         </div>

//         <button
//           onClick={exportCSV}
//           className="rounded-lg border border-[#394a5d] bg-[#263648] px-3 py-2 text-[11px] text-white hover:bg-[#304257]"
//         >
//           Export
//         </button>
//       </div>

//       {/* Search and filters */}
//       <div className="mt-4 flex flex-col justify-between gap-3 xl:flex-row xl:items-center">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search by user, IP, or device......"
//           className="h-9 w-full rounded-lg border border-[#394b5f] bg-[#263648] px-3 text-[11px] text-white outline-none placeholder:text-[#607186] focus:border-sky-500 sm:max-w-[284px]"
//         />

//         <div className="flex flex-wrap gap-1.5">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`rounded-full border px-3 py-2 text-[10px] transition ${
//                 activeFilter === filter
//                   ? "border-[#76502b] bg-[#302e2a] font-semibold text-[#eaa04b]"
//                   : "border-[#304154] bg-[#263648] text-[#8fa1b5] hover:text-white"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Authentication table */}
//       <div className="mt-3 overflow-x-auto">
//         <table className="w-full min-w-[950px] table-fixed border-collapse text-left">
//           <thead>
//             <tr className="h-10 bg-[#263648]">
//               {columns.map((column, i) => (
//                 <th
//                   key={column}
//                   className={`px-3 text-[9px] font-medium text-[#8fa0b4] ${
//                     i === 0 ? "rounded-l-lg" : ""
//                   } ${i === columns.length - 1 ? "rounded-r-lg" : ""}`}
//                 >
//                   {column}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {filteredLogs.map((log) => (
//               <tr
//                 key={log.employeeId}
//                 className="border-b border-[#2c3a48] hover:bg-[#223345]"
//               >
//                 <td className="px-3 py-5 text-[11px] font-semibold text-[#e8edf4]">
//                   {log.user}
//                 </td>
//                 <td className="px-3 py-5 text-[11px] text-[#9aabbe]">
//                   {log.employeeId}
//                 </td>
//                 <td className="px-3 py-5 text-[11px] text-[#9aabbe]">
//                   {log.role}
//                 </td>
//                 <td className="px-3 py-5 text-[11px] text-[#e0e7ef]">
//                   {log.department}
//                 </td>
//                 <td className="px-3 py-5 text-[11px] text-[#9aabbe]">
//                   {log.login}
//                 </td>
//                 <td className="px-3 py-5 text-[11px] text-[#9aabbe]">
//                   {log.logout}
//                 </td>
//                 <td className="px-3 py-5 text-[11px] text-[#9aabbe]">
//                   {log.duration}
//                 </td>
//                 <td className="px-3 py-5 text-[11px] leading-4 text-[#9aabbe]">
//                   <span className="block">{log.device} ·</span>
//                   <span>{log.os}</span>
//                 </td>
//                 <td className="px-3 py-5 text-[11px] text-[#9aabbe]">
//                   {log.browser}
//                 </td>
//                 <td className="px-3 py-5 text-[11px] text-[#9aabbe]">
//                   {log.ip}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {filteredLogs.length === 0 && (
//           <p className="py-10 text-center text-xs text-[#8fa1b5]">
//             No authentication logs found.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }



import { useMemo, useState } from "react";

const initialLogs = [
  {
    user: "Kasun Perera",
    employeeId: "EMP-1842",
    role: "Manager",
    department: "Operations",
    login: "08:12 AM",
    logout: "04:30 PM",
    duration: "8h 18m",
    device: "Desktop",
    os: "Windows",
    browser: "Chrome",
    ip: "192.168.1.14",
    status: "Success",
  },
  {
    user: "Nimali Silva",
    employeeId: "EMP-1845",
    role: "Cashier",
    department: "Front Desk",
    login: "09:08 AM",
    logout: "—",
    duration: "8h 18m",
    device: "Mobile",
    os: "macOS",
    browser: "Safari",
    ip: "192.168.1.09",
    status: "Success",
  },
  {
    user: "Ruwan Jayasuriya",
    employeeId: "EMP-1987",
    role: "Head Chef",
    department: "Kitchen",
    login: "07:45 AM",
    logout: "04:30 PM",
    duration: "8h 18m",
    device: "Tablet",
    os: "Android",
    browser: "Chrome",
    ip: "192.168.1.31",
    status: "Success",
  },
  {
    user: "Dilani Fernando",
    employeeId: "EMP-1011",
    role: "Waiter",
    department: "Front of House",
    login: "10:52 AM",
    logout: "—",
    duration: "8h 18m",
    device: "Desktop",
    os: "Windows",
    browser: "Edge",
    ip: "192.168.1.47",
    status: "Success",
  },
];

const filters = [
  "Today",
  "Last 7 Days",
  "Success",
  "Failed",
  "Locked",
  "MFA",
];

const columns = [
  "USER",
  "EMPLOYEE ID",
  "ROLE",
  "DEPARTMENT",
  "LOGIN TIME",
  "LOGOUT TIME",
  "DURATION",
  "DEVICE / OS",
  "BROWSER",
  "IP ADDRESS",
];

export default function AuthenticationLog() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Today");

  const filteredLogs = useMemo(() => {
    return initialLogs.filter((log) => {
      const matchesSearch = Object.values(log).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase().trim())
      );

      const matchesFilter =
        ["Today", "Last 7 Days"].includes(activeFilter) ||
        log.status === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  const exportCSV = () => {
    const rows = [
      columns,
      ...filteredLogs.map((log) => [
        log.user,
        log.employeeId,
        log.role,
        log.department,
        log.login,
        log.logout,
        log.duration,
        `${log.device} - ${log.os}`,
        log.browser,
        log.ip,
      ]),
    ];

    const csv = rows
      .map((row) =>
        row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "authentication-log.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <section className="w-full rounded-xl border border-[#2c3a49] bg-[#1c2a38] p-4 text-white sm:p-6 mt-[16px]">
      {/* Section Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[14px] font-dm tracking-[0.56px] font-semibold t text-[#FFFFFF]">
            Authentication Log
          </h2>

          <p className="mt-1 font-[400] text-[12px] text-[#8A9BB0]">
            Complete session history across all branches
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="rounded-lg border border-[#394a5d] bg-[#243447] px-3 py-2 text-[14px] text-[#F0F4F8] transition hover:bg-[#304257]"
        >
          Export
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mt-4 flex flex-col justify-between gap-3 xl:flex-row xl:items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by user, IP, or device....."
          aria-label="Search authentication logs"
          className="h-[40px] w-full rounded-lg border border-[#FFFFFF24] bg-[#243447] px-3 text-[14px] text-[#556070] outline-none placeholder:text-[#607186] sm:max-w-[284px]"
        />

        <div className="flex flex-wrap gap-1.5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-2 text-[12px] transition ${
                activeFilter === filter
                  ? "border-[#E67E224D] bg-[#E67E2214] font-[500] text-[#E67E22]"
                  : "border-[#FFFFFF14] bg-[#243447] text-[#8A9BB0] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Authentication Table */}
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[950px] table-fixed border-collapse text-left">
          <thead>
            <tr className="h-10 bg-[#263648]">
              {columns.map((column, index) => (
                <th
                  key={column}
                  className={`px-3 text-[11px] font-medium text-[#8fa0b4] ${
                    index === 0 ? "rounded-l-lg" : ""
                  } ${
                    index === columns.length - 1 ? "rounded-r-lg" : ""
                  }`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredLogs.map((log) => (
              <tr
                key={log.employeeId}
                className="border-b border-[#2c3a48] transition hover:bg-[#223345]"
              >
                <td className="px-3 py-5 text-[14px] font-bold text-[#F0F4F8]">
                  {log.user}
                </td>

                <td className="px-3 py-5 text-[14px] text-[#8A9BB0] font-semibold">
                  {log.employeeId}
                </td>

                <td className="px-3 py-5 text-[14px] text-[#8A9BB0]">
                  {log.role}
                </td>

                <td className="px-3 py-5 text-[14px] font-semibold text-[#F0F4F8]">
                  {log.department}
                </td>

                <td className="px-3 py-5 font-semibold text-[14px] text-[#8A9BB0]">
                  {log.login}
                </td>

                <td className="px-3 py-5 font-semibold text-[14px] text-[#8A9BB0]">
                  {log.logout}
                </td>

                <td className="px-3 py-5 text-[14px] font-semibold text-[#8A9BB0]">
                  {log.duration}
                </td>

                <td className="px-3 py-5 font-semibold text-[14px] leading-4 text-[#8A9BB0]">
                  <span className="block">{log.device} ·</span>
                  <span>{log.os}</span>
                </td>

                <td className="px-3 py-5 text-[14px] text-[#8A9BB0] font-semibold">
                  {log.browser}
                </td>

                <td className="px-3 py-5 text-[14px] text-[#8A9BB0] font-semibold">
                  {log.ip}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredLogs.length === 0 && (
          <p className="py-10 text-center text-xs text-[#8fa1b5]">
            No authentication logs found.
          </p>
        )}
      </div>
    </section>
  );
}
