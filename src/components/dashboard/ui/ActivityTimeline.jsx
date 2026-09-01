const ActivityTimeline = ({ title = "Activity Timeline", entries = [] }) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">{title}</h2>
      <ul className="space-y-3">
        {entries.map((entry) => (
          <li key={entry} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-1.5 shrink-0" />
            <span className="text-gray-300 text-sm leading-snug">
              {entry}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default ActivityTimeline;