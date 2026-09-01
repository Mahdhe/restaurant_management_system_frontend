const HISTORY = [
  { id: 1, time: "7.05 pm", event: "Kasun Perera assigned to T04" },
  { id: 2, time: "7.00 pm", event: "Nimali Silva transferred service to Kasun" },
  { id: 3, time: "6.45 pm", event: "Section B default waiter assigned" },
];

const WaiterAssignmentHistory = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">
        Waiter Assignment History
      </h2>

      <div>
        {HISTORY.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-4 ${
              index !== HISTORY.length - 1 ? "border-b border-slate-800" : ""
            }`}
          >
            <span className="text-gray-500 text-sm">{item.time}</span>
            <span className="text-gray-300 text-sm">{item.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaiterAssignmentHistory;