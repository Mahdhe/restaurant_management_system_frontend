const MonthlyRateCard = ({ rate = 94.8 }) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5 text-center">
      <h2 className="text-white text-base font-semibold mb-5 text-left">
        Monthly Rate
      </h2>

      <p className="text-emerald-400 text-4xl font-bold">{rate}%</p>
      <p className="text-gray-500 text-xs mb-4">Average Attendance</p>

      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${rate}%` }}
        />
      </div>
    </div>
  );
};

export default MonthlyRateCard;