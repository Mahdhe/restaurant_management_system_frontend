
import React from 'react'

const ALERTS = [
  {
    id: 1,
    type: 'Kitchen',
    typeStyle: 'bg-[#E74C3C1F] border-[#E74C3C4D] text-[#E74C3C]',
    description: 'Order ORD-0412 delayed',
    time: '12:10 PM',
    severity: 'High',
    severityStyle: 'bg-[#E74C3C1F] border-[#E74C3C4D] text-[#E74C3C]',
    status: 'Resolved',
    statusStyle: 'bg-[#27AE601F] border-[#27AE604D] text-[#27AE60]',
    action: 'View',
    actionStyle: 'bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8]',
  },
  {
    id: 2,
    type: 'Inventory',
    typeStyle: 'bg-[#E67E220F] border-[#E67E224D] text-[#E67E22]',
    description: 'Fresh Lime below threshold',
    time: '11:45 AM',
    severity: 'Medium',
    severityStyle: 'bg-[#E67E220F] border-[#E67E224D] text-[#E67E22]',
    status: 'Active',
    statusStyle: 'bg-[#E74C3C1F] border-[#E74C3C4D] text-[#E74C3C]',
    action: 'Reorder',
    actionStyle: 'bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8]',
  },
  {
    id: 3,
    type: 'Payment',
    typeStyle: 'bg-[#2980B91F] border-[#2980B94D] text-[#2980B9]',
    description: 'Card declined - Table T11',
    time: '11:20 AM',
    severity: 'High',
    severityStyle: 'bg-[#E74C3C1F] border-[#E74C3C4D] text-[#E74C3C]',
    status: 'Resolved',
    statusStyle: 'bg-[#27AE601F] border-[#27AE604D] text-[#27AE60]',
    action: 'View',
    actionStyle: 'bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8]',
  },
  {
    id: 4,
    type: 'Kitchen',
    typeStyle: 'bg-[#E74C3C1F] border-[#E74C3C4D] text-[#E74C3C]',
    description: 'Double booking - Table T09',
    time: '10:30 AM',
    severity: 'Critical',
    severityStyle: 'bg-[#E74C3C1F] border-[#E74C3C4D] text-[#E74C3C]',
    status: 'Active',
    statusStyle: 'bg-[#E74C3C1F] border-[#E74C3C4D] text-[#E74C3C]',
    action: 'Reorder',
    actionStyle: 'bg-[#E74C3C1F] border-[#E74C3C26] text-[#E74C3C]',
  },
]

const AlertHistory = () => {
  const handleAction = (alert) => {
    console.log(`${alert.action}:`, alert.id)
  }

  return (
    <section className="my-4 w-full min-w-0 font-['DM_Sans',sans-serif]">
      <div className="w-full min-w-0 rounded-xl border border-[#FFFFFF14] bg-[#1C2A38] p-3 sm:rounded-2xl sm:p-4 lg:p-5">

        {/* Header */}
        <div className="flex flex-col gap-3 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E67E220F]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" fill="#E67E22" />
                <path
                  d="M12 6.5V12l3.5 2"
                  stroke="#1C2A38"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-semibold leading-tight text-white sm:text-base">
                Alert History
              </h2>
              <p className="mt-1 text-[11px] leading-relaxed text-[#8A9BB0] sm:text-xs">
                Today’s alert log
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => console.log('Export alert history')}
            className="inline-flex min-h-9 w-full shrink-0 items-center justify-center rounded-lg border border-[#FFFFFF24] bg-[#243447] px-4 py-2 text-xs font-semibold text-[#F0F4F8] transition hover:bg-[#2C4058] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] sm:w-auto sm:text-sm"
          >
            Export
          </button>
        </div>

        {/* Scrollable table */}
        <div className="w-full min-w-0 overflow-x-auto rounded-lg">
          <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
            <thead>
              <tr className="bg-[#243447]">
                <th className="w-[13%] px-3 py-3 text-[10px] font-semibold tracking-wide text-[#8A9BB0] sm:px-4 sm:text-[11px]">
                  TYPE
                </th>
                <th className="w-[27%] px-3 py-3 text-[10px] font-semibold tracking-wide text-[#8A9BB0] sm:px-4 sm:text-[11px]">
                  DESCRIPTION
                </th>
                <th className="w-[14%] px-3 py-3 text-[10px] font-semibold tracking-wide text-[#8A9BB0] sm:px-4 sm:text-[11px]">
                  TIME
                </th>
                <th className="w-[14%] px-3 py-3 text-[10px] font-semibold tracking-wide text-[#8A9BB0] sm:px-4 sm:text-[11px]">
                  SEVERITY
                </th>
                <th className="w-[16%] px-3 py-3 text-[10px] font-semibold tracking-wide text-[#8A9BB0] sm:px-4 sm:text-[11px]">
                  STATUS
                </th>
                <th className="w-[16%] px-3 py-3 text-[10px] font-semibold tracking-wide text-[#8A9BB0] sm:px-4 sm:text-[11px]">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody>
              {ALERTS.map((alert) => (
                <tr
                  key={alert.id}
                  className="border-b border-[#FFFFFF14] last:border-b-0 hover:bg-[#24344733]"
                >
                  <td className="px-3 py-4 sm:px-4">
                    <span
                      className={`inline-flex items-center justify-center rounded-full border px-2 py-1 text-[10px] font-semibold sm:text-[11px] ${alert.typeStyle}`}
                    >
                      {alert.type}
                    </span>
                  </td>

                  <td className="break-words px-3 py-4 text-[11px] font-semibold leading-snug text-[#F0F4F8] sm:px-4 sm:text-sm">
                    {alert.description}
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 text-[11px] font-medium text-[#F0F4F8] sm:px-4 sm:text-xs">
                    {alert.time}
                  </td>

                  <td className="px-3 py-4 sm:px-4">
                    <span
                      className={`inline-flex items-center justify-center rounded-full border px-2 py-1 text-[10px] font-semibold sm:text-[11px] ${alert.severityStyle}`}
                    >
                      {alert.severity}
                    </span>
                  </td>

                  <td className="px-3 py-4 sm:px-4">
                    <span
                      className={`inline-flex items-center justify-center rounded-full border px-2 py-1 text-[10px] font-semibold sm:text-[11px] ${alert.statusStyle}`}
                    >
                      {alert.status}
                    </span>
                  </td>

                  <td className="px-3 py-4 sm:px-4">
                    <button
                      type="button"
                      onClick={() => handleAction(alert)}
                      className={`inline-flex min-h-8 items-center justify-center rounded-md border px-2.5 py-1.5 text-[10px] font-semibold transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] sm:px-3 sm:text-xs ${alert.actionStyle}`}
                    >
                      {alert.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default AlertHistory
