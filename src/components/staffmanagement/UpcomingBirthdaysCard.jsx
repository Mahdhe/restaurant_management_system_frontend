import { Calendar } from "lucide-react";

const BIRTHDAYS = [
  { id: 1, name: "Kasun Perera", date: "24 June" },
  { id: 2, name: "Nimali Silva", date: "28 June" },
  { id: 3, name: "Akila Fernando", date: "02 July" },
];

const UpcomingBirthdaysCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">
          Upcoming Birthdays
        </h2>
        <Calendar size={16} className="text-gray-500" />
      </div>

      <div>
        {BIRTHDAYS.map((person, index) => (
          <div
            key={person.id}
            className={`flex items-center justify-between py-3 ${
              index !== BIRTHDAYS.length - 1
                ? "border-b border-slate-800"
                : ""
            }`}
          >
            <span className="text-gray-300 text-sm">{person.name}</span>
            <span className="text-gray-400 text-sm">{person.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBirthdaysCard;