const PriorityOrders = [
  {
    orderNo: "ORD-0412",
    subInfo: "Table T04 • Delayed",
    tag: "24m",
    borderColor: "border-[#e74c3c4d]",
    tagText: "text-[#e74c3c]",
    tagBg: "bg-[#e74c3c1a]",
  },
  {
    orderNo: "ORD-0416",
    subInfo: "VIP Table T09",
    tag: "VIP",
    borderColor: "border-[#8e44ad4d]",
    tagText: "text-[#8e44ad]",
    tagBg: "bg-[#8e44ad1a]",
  },
  {
    orderNo: "ORD-0414",
    subInfo: "Online Pickup",
    tag: "new",
    borderColor: "border-[#2980b94d]",
    tagText: "text-[#2980b9]",
    tagBg: "bg-[#2980b91a]",
  },
];

export default function PriorityOrderCard() {
  return (
    <div className="bg-[#1c2a38] rounded-[14px]">
      <h1 className="px-5 pt-5 pb-2.5 font-bold text-[18px] leading-normal text-[#f0f4f8]">
        Priority Orders
      </h1>

      <div className="space-y-4 px-5 pb-5">
        {PriorityOrders.map((order) => (
          <div className="flex justify-between bg-[#243447] border border-white/15 px-2.5 py-3 rounded-xl">
            <div>
              <h3 className="font-semibold text-[#f0f4f8] text-[14px] leading-normal">
                {order.orderNo}
              </h3>
              <span className="text-[13px] text-[#8a9bb0]">
                {order.subInfo}
              </span>
            </div>

            <span
              className={`self-start border ${order.borderColor} rounded-full py-0.5 px-2.25 ${order.tagBg} text-[11px] font-semibold ${order.tagText} text-center`}
            >
              {order.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
