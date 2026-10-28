const CustomerCopyCard = ({ email = "Optional", smsStatus = "Sent" }) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-5">
        Customer Copy
      </h2>

      <div>
        <div className="flex items-center justify-between py-3 border-b border-slate-800">
          <span className="text-gray-400 text-sm">Email</span>
          <span className="text-gray-500 text-sm">{email}</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-gray-400 text-sm">SMS Receipt</span>
          <span className="text-emerald-400 text-sm font-medium">
            {smsStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerCopyCard;