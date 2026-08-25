import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const categories = [
  {
    name: "Dessert",
    percentage: 20,
    revenue: "LKR 37K",
    color: "#8e44ad",
  },
  {
    name: "Drinks",
    percentage: 25,
    revenue: "LKR 46K",
    color: "#2980b9",
  },
  {
    name: "Food",
    percentage: 55,
    revenue: "LKR 102K",
    color: "#e67e22",
  },
];

export default function CategoryShare() {
  return (
    <div className="mt-4 rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      {/* header */}
      <div className="border-b border-white/15 px-6 pt-5 pb-2.5">
        <h2 className="text-[14px] font-semibold text-[#f0f4f8]">Category Share</h2>

        <p className="text-[12px] text-[#8a9bb0]">Revenue by category</p>
      </div>

      {/* content */}
      <div className="flex items-center gap-7">
        {/* donut */}
        <div className="h-25 w-25 shrink-0 ml-4.5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categories}
                dataKey="percentage"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={50}
                paddingAngle={0}
                stroke="none"
              >
                {categories.map((category) => (
                  <Cell key={category.name} fill={category.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* center percentage */}
        <div className="relative -ml-27 flex h-37.5 w-37.5 items-center justify-center pointer-events-none">
          <span className="text-[12px] font-bold text-[#e67e22]">55%</span>
        </div>

        {/* categories */}
        <div className="flex-1 space-y-2.5 py-5 pr-5">
          {categories.map((category) => (
            <div key={category.name} className="flex items-start gap-3">
              <span
                className="mt-1.5 h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: category.color }}
              />

              <div>
                <p className="taxt-[14px] font-semibold text-[#f0f4f8]">
                  {category.name}
                </p>

                <p className="mt-1 text-[12px] text-[#8a9bb0]">
                  {category.percentage}% -
                </p>

                <p className="text-[12px] text-[#8a9bb0]">{category.revenue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
