const PEOPLE_PAYMENTS = [
  { id: 1, name: "Person 1", status: "Paid" },
  { id: 2, name: "Person 2", status: "Pending" },
  { id: 3, name: "Person 3", status: "Pending" },
];

const STATUS_TEXT_COLOR = {
  Paid: "text-emerald-400",
  Pending: "text-amber-400",
};

const PartialSupportCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-5">
        Partial Support
      </h2>

      <div>
        {PEOPLE_PAYMENTS.map((person, index) => (
          <div
            key={person.id}
            className={`flex items-center justify-between py-3 ${
              index !== PEOPLE_PAYMENTS.length - 1
                ? "border-b border-slate-800"
                : ""
            }`}
          >
            <span className="text-gray-400 text-sm">{person.name}</span>
            <span
              className={`text-sm font-medium ${STATUS_TEXT_COLOR[person.status]}`}
            >
              {person.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartialSupportCard;