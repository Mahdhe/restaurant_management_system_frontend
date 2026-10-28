import { useState } from "react";
import FormField from "../dashboard/ui/FormField";

const ApplyCouponsCard = ({ onApply }) => {
  const [couponCode, setCouponCode] = useState("FAMILY500");

  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">
        Apply Coupons
      </h2>

      <div className="mb-4">
        <FormField
          label="Coupon Code"
          value={couponCode}
          onChange={setCouponCode}
          placeholder="Enter coupon code"
        />
      </div>

      <button
        type="button"
        onClick={() => onApply?.(couponCode)}
        className="w-full px-4 py-2.5 rounded-md bg-[#E67E22] text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
      >
        Apply Discount
      </button>
    </div>
  );
};

export default ApplyCouponsCard;