import StatusBadge from "../ui/StatusBadge";

const EmployeePreviewCard = ({
  initials = "KP",
  name = "Kasun Perera",
  role = "Head Waiter",
  department = "Service",
}) => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5 text-center">
      <h2 className="text-white text-base font-semibold mb-5 text-left">
        Employee Preview
      </h2>

      <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
        {initials}
      </div>
      <p className="text-white text-base font-semibold">{name}</p>
      <p className="text-gray-500 text-sm mb-3">{role}</p>
      <StatusBadge status={department} />
    </div>
  );
};

export default EmployeePreviewCard;