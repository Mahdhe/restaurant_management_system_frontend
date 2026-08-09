export default function StatsCard({ title, value, subtitle, valueColor }) {
  return (
    <div className="rounded-[14px] border border-white/10 bg-[#1c2a38] px-4 py-3">
      <p className="text-[11px] text-[#8a9bb0] uppercase font-semibold tracking-wide">{title}</p>
      <h2 className={`mt-2 text-[28px] font-bold ${valueColor}`}>{value}</h2>
      <p className="mt-2 text-[12px] text-[#f0f4f8] tracking-wide">{subtitle}</p>
    </div>
  );
}
