const REQUESTS = [
  { id: 1, name: "Nimali Silva", days: "2 Days", type: "Annual" },
  { id: 2, name: "Akila Viraj", days: "1 Days", type: "Sick" },
  { id: 3, name: "Sahan Perera", days: "3 Days", type: "Medical" },
];

const PendingLeaveRequestsCard = ({ onApprove, onReject, onViewAll }) => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">
          Pending Leave Requests
        </h2>
        <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
          {REQUESTS.length}
        </span>
      </div>

      <div className="space-y-4 mb-5">
        {REQUESTS.map((request) => (
          <div
            key={request.id}
            className="flex items-center justify-between gap-3"
          >
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">
                {request.name}
              </p>
              <p className="text-xs mt-0.5">
                <span className="text-orange-400">{request.days}</span>
                <span className="text-gray-500"> – {request.type}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onApprove?.(request.id)}
                className="px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-700 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-colors duration-200"
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => onReject?.(request.id)}
                className="px-3 py-1.5 rounded-md bg-red-500/10 border border-red-700 text-red-400 text-xs font-semibold hover:bg-red-500/20 transition-colors duration-200"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onViewAll}
        className="w-full px-4 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
      >
        View All Requests
      </button>
    </div>
  );
};

export default PendingLeaveRequestsCard;