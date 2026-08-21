const payments = [
  {
    name: "Cash",
    percentage: "45%",
    width: "45%",
    color: "bg-[#27ae60]",
    textColor: "text-[#27ae60]",
  },
  {
    name: "Card",
    percentage: "35%",
    width: "35%",
    color: "bg-[#2980b9]",
    textColor: "text-[#2980b9]",
  },
  {
    name: "Wallet",
    percentage: "15%",
    width: "15%",
    color: "bg-[#8e44ad]",
    textColor: "text-[#8e44ad]",
  },
  {
    name: "QR",
    percentage: "5%",
    width: "5%",
    color: "bg-[#e67e22]",
    textColor: "text-[#e67e22]",
  },
];

export default function PaymentBreakdown() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">
          Payment Breakdown
        </h2>
      </div>

      <div className="space-y-4 p-5">
        {payments.map((payment) => (
          <div key={payment.name} className="flex items-center gap-2">
            <span className="w-18 text-[14px] text-[#f0f4f8]">
              {payment.name}
            </span>

            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#5560704D]">
              <div
                className={`h-full rounded-full ${payment.color}`}
                style={{ width: payment.width }}
              />
            </div>

            <span
              className={`w-6.5 text-right text-[12px] font-semibold ${payment.textColor}`}
            >
              {payment.percentage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
