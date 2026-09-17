import { Check } from "lucide-react";

const ORDER_ITEMS = [
  { id: 1, name: "Duck a l'Orange", qty: 1, price: "6,800" },
  { id: 2, name: "Wild Mushroom Risotto", qty: 1, price: "4,800" },
  { id: 3, name: "Valrhona Tart", qty: 1, price: "5,900" },
];

const DELIVERY_FEE = "500";
const TOTAL = "6,700";

const OrderConfirmation = () => {
  return (
    <section className="w-full bg-[#0F1923] px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Brand mark */}
        <div className="text-center mb-8">
          <p className="font-playfair text-white text-[32px] font-semibold">
            Versailles
          </p>
          <p className="text-gray-500 text-[11px] tracking-[0.2em]">
            RESTAURANT AND CAFE
          </p>
        </div>

        {/* Main card */}
        <div className="border border-slate-800 rounded-2xl px-6 md:px-10 py-10 md:py-12">
          {/* Success state */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-700 flex items-center justify-center mx-auto mb-4">
              <Check className="text-emerald-400" size={26} />
            </div>
            <span className="block text-[#E67E22] text-xs font-bold tracking-wide uppercase mb-3">
              Order Confirmed
            </span>
            <h1 className="font-playfair font-bold text-white text-[40px] sm:text-[40px] leading-tight mb-4">
              Thank you – it's on
              <br />
              its way to the kitchen.
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-6">
              A confirmation has been sent to your phone. you can track your
              order's status at any time
            </p>

            {/* Order number pill */}
            <div className="inline-block border border-orange-700 rounded-full px-8 py-3 text-center">
              <p className="text-gray-400 text-[24px] tracking-wide uppercase">
                Order Number
              </p>
              <p className="font-playfair text-[#E67E22] text-[24px] font-bold">
                VRS-10234
              </p>
            </div>
          </div>

          {/* Order summary card */}
          <div className="bg-[#1A2535] border border-slate-800 rounded-xl px-6 py-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-base font-playfair">
                Order Summary
              </h2>
              <span className="text-[#E67E22] text-[11px] font-semibold border border-orange-700 rounded-full px-3 py-1">
                Est. 45-55 min
              </span>
            </div>

            <div className="space-y-4">
              {ORDER_ITEMS.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between pb-4 ${
                    index !== ORDER_ITEMS.length - 1
                      ? "border-b border-slate-800"
                      : ""
                  }`}
                >
                  <span className="text-gray-300 text-sm">
                    {item.name}{" "}
                    <span className="text-gray-500">x{item.qty}</span>
                  </span>
                  <span className="text-[#E67E22] text-sm font-medium">
                    {item.price}
                  </span>
                </div>
              ))}

              <div className="flex items-center justify-between pt-1">
                <span className="text-gray-300 text-sm">Delivery Fee</span>
                <span className="text-[#E67E22] text-sm font-medium">
                  {DELIVERY_FEE}
                </span>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-5 pt-5 flex items-center justify-between">
              <span className="text-white text-base font-semibold">
                Total
              </span>
              <span className="text-[#E67E22] text-xl font-bold">
                LKR {TOTAL}
              </span>
            </div>
          </div>

          {/* Delivery info */}
          <div className="border bg-[#1A2535] border-slate-800 rounded-xl px-6 py-5 mb-8">
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <span className="text-gray-400 text-sm">Delivery To</span>
              <span className="text-white text-sm font-medium text-right">
                24 Marine Drive, Colombo 03
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <span className="text-gray-400 text-sm">Phone</span>
              <span className="text-white text-sm font-medium">
                +94 77 123 4569
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-400 text-sm">Payment</span>
              <span className="text-white text-sm font-medium">
                Cash on Delivery
              </span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="flex-1 px-6 py-3 rounded-md bg-[#E67E22] text-white text-sm font-bold tracking-wide uppercase hover:bg-orange-600 transition-colors duration-200"
            >
              Track this order
            </button>
            <button
              type="button"
              className="flex-1 px-6 py-3 rounded-md bg-transparent border border-slate-700 text-gray-200 text-sm font-bold tracking-wide uppercase hover:border-[#E67E22] hover:text-[#E67E22] transition-colors duration-200"
            >
              Order more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;