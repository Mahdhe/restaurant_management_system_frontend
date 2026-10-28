import { useState } from "react";
import FormField from "../dashboard/ui/FormField";
import StatusBadge from "../dashboard/ui/StatusBadge";

const PaymentDetailsCard = ({ selectedMethod = "Cash", onComplete }) => {
  const [amountDue, setAmountDue] = useState("LKR 5,164");
  const [amountReceived, setAmountReceived] = useState("LKR 6,000");
  const [change, setChange] = useState("LKR 836");
  const [paymentStatus, setPaymentStatus] = useState("Paid");
  const [paymentNote, setPaymentNote] = useState(
    "Customer paid by cash at counter"
  );

  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">
          Payment Details
        </h2>
        <StatusBadge status={selectedMethod} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <FormField
          label="Amount Due"
          value={amountDue}
          onChange={setAmountDue}
        />
        <FormField
          label="Amount Received"
          value={amountReceived}
          onChange={setAmountReceived}
        />
        <FormField label="Change" value={change} onChange={setChange} />
        <FormField
          label="Payment Status"
          as="select"
          options={["Paid", "Pending", "Failed"]}
          value={paymentStatus}
          onChange={setPaymentStatus}
        />
      </div>

      <FormField
        label="Payment Note"
        as="textarea"
        rows={3}
        value={paymentNote}
        onChange={setPaymentNote}
      />
    </div>
  );
};

export default PaymentDetailsCard;