const RANKED_STAFF = [
  { rank: 1, initials: "KP", name: "Kasun Perera", subtitle: "Head Waiter", score: 98 },
  { rank: 2, initials: "NS", name: "Nimali Silva", subtitle: "nimali@restro.lk", score: 91 },
  { rank: 3, initials: "AF", name: "Amal Virath", subtitle: "kasun@restro.lk", score: 91 },
  { rank: 4, initials: "RP", name: "Ruwan Perera", subtitle: "ruwan@restro.lk", score: 82 },
];

const StaffRankingCard = ({ title = "Top Staff" }) => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">{title}</h2>

      <div>
        {RANKED_STAFF.map((staff, index) => (
          <div
            key={staff.rank}
            className={`flex items-center gap-3 py-3 ${
              index !== RANKED_STAFF.length - 1
                ? "border-b border-slate-800"
                : ""
            }`}
          >
            <span className="text-gray-500 text-sm font-semibold w-4 shrink-0">
              {staff.rank}
            </span>
            <span className="w-8 h-8 rounded-full bg-orange-950 border border-orange-800 flex items-center justify-center text-orange-400 text-[10px] font-semibold shrink-0">
              {staff.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-white text-sm font-medium truncate">
                {staff.name}
              </p>
              <p className="text-gray-500 text-xs truncate">
                {staff.subtitle}
              </p>
            </div>
            <span className="text-white text-sm font-semibold shrink-0">
              {staff.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffRankingCard;