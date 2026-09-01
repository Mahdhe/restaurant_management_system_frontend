const SECTIONS = [
  {
    id: "A",
    name: "Section A",
    tables: [
      { id: "T01", detail: "2 seats", status: "Available" },
      { id: "T02", detail: "38 min", status: "Occupied" },
      { id: "T03", detail: "2 seats", status: "Reserved" },
    ],
  },
  {
    id: "B",
    name: "Section B",
    tables: [
      { id: "T07", detail: "2 seats", status: "Reserved" },
      { id: "T04", detail: "15 min", status: "Occupied" },
      { id: "T06", detail: "4 seats", status: "Available" },
    ],
  },
  {
    id: "C",
    name: "Outdoor / Section C",
    tables: [
      { id: "T08", detail: "6 seats", status: "Available" },
      { id: "T09", detail: "2 seats", status: "Reserved" },
      { id: "T10", detail: "38 min", status: "Occupied" },
      { id: "T11", detail: "2 seats", status: "Available" },
      { id: "T12", detail: "2 seats", status: "Reserved" },
    ],
  },
];

const TABLE_STYLES = {
  Available: "border-emerald-600 bg-emerald-500/5 text-emerald-400",
  Occupied: "border-red-600 bg-red-500/5 text-red-400",
  Reserved: "border-amber-600 bg-amber-500/5 text-amber-400",
  Cleaning: "border-blue-600 bg-blue-500/5 text-blue-400",
  Blocked: "border-slate-600 bg-slate-500/5 text-slate-400",
};

const FloorMap = ({ selectedTableId, onSelectTable }) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">
          Restaurant Floor map
        </h2>
        <span className="text-gray-500 text-xs">Drag-and-drop layout preview</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {SECTIONS.slice(0, 2).map((section) => (
          <div
            key={section.id}
            className="border border-dashed border-slate-700 rounded-xl p-4 min-h-[220px]"
          >
            <span className="block text-gray-500 text-xs font-medium tracking-wide uppercase mb-4">
              {section.name}
            </span>
            <div className="flex flex-wrap gap-3">
              {section.tables.map((table) => (
                <button
                  key={table.id}
                  type="button"
                  onClick={() => onSelectTable?.(table.id)}
                  className={`w-20 h-20 rounded-xl border-2 flex flex-col items-center justify-center transition-transform duration-150 hover:scale-105 ${TABLE_STYLES[table.status]} ${
                    selectedTableId === table.id
                      ? "ring-2 ring-offset-2 ring-offset-[#101B2C] ring-orange-500"
                      : ""
                  }`}
                >
                  <span className="text-sm font-bold">{table.id}</span>
                  <span className="text-[11px] mt-0.5">{table.detail}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Third section spans full width */}
      <div className="border border-dashed border-slate-700 rounded-xl p-4 min-h-[220px]">
        <span className="block text-gray-500 text-xs font-medium tracking-wide uppercase mb-4">
          {SECTIONS[2].name}
        </span>
        <div className="flex flex-wrap gap-3">
          {SECTIONS[2].tables.map((table) => (
            <button
              key={table.id}
              type="button"
              onClick={() => onSelectTable?.(table.id)}
              className={`w-20 h-20 rounded-xl border-2 flex flex-col items-center justify-center transition-transform duration-150 hover:scale-105 ${TABLE_STYLES[table.status]} ${
                selectedTableId === table.id
                  ? "ring-2 ring-offset-2 ring-offset-[#101B2C] ring-orange-500"
                  : ""
              }`}
            >
              <span className="text-sm font-bold">{table.id}</span>
              <span className="text-[11px] mt-0.5">{table.detail}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorMap;