export default function StatsCard({
  title,
  value,
  subtitle,
  valueColor,
  subtitleColor,
}) {
  return (
    <div className="rounded-[14px] border border-white/10 bg-[#1c2a38] px-3 sm:px-4 py-3 min-w-0">
      <p className="text-[11px] text-[#8a9bb0] uppercase font-semibold tracking-wide truncate">
        {title}
      </p>

      <h2 className={`mt-2 text-[24px] sm:text-[28px] font-bold ${valueColor}`}>
        {value}
      </h2>

      <p
        className={`mt-2 text-[11px] sm:text-[12px] tracking-wide ${subtitleColor}`}
      >
        {subtitle}
      </p>
    </div>
  );
}
