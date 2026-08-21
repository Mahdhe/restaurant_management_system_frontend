import StatsCard from "./StatsCard";

export default function AnalyticsStats({ stats, columns = 4 }) {
  const columnClasses = {
    4: "grid-cols-4",
    6: "grid-cols-6",
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-4`}>
      {stats.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          valueColor={stat.valueColor}
          subtitleColor={stat.subtitleColor}
        />
      ))}
    </div>
  );
}
