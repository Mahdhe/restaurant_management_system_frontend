import { Banknote, CreditCard, Wallet, QrCode } from "lucide-react";

const METHODS = [
  {
    id: "Cash",
    label: "Cash",
    detail: "Counter Payment",
    icon: Banknote,
    iconColor: "text-emerald-500",
  },
  {
    id: "Card",
    label: "Card",
    detail: "Visa / Master",
    icon: CreditCard,
    iconColor: "text-blue-400",
  },
  {
    id: "Wallet",
    label: "Wallet",
    detail: "eZ Cash / Wallet",
    icon: Wallet,
    iconColor: "text-gray-400",
  },
  {
    id: "QR",
    label: "QR",
    detail: "Counter Payment",
    icon: QrCode,
    iconColor: "text-gray-300",
  },
];

const PaymentMethodSelector = ({ selectedMethod, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      {METHODS.map((method) => {
        const Icon = method.icon;
        const isActive = selectedMethod === method.id;

        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelect(method.id)}
            className={`flex flex-col items-center justify-center gap-2 rounded-xl border p-6 transition-colors duration-200 ${
              isActive
                ? "bg-[#E67E220F] border-orange-400"
                : "bg-[#1C2A38] border-slate-800 hover:border-slate-600"
            }`}
          >
            <Icon size={22} className={method.iconColor} />
            <span
              className={`text-sm font-semibold ${
                isActive ? "text-orange-600" : "text-white"
              }`}
            >
              {method.label}
            </span>
            <span
              className={`text-xs ${
                isActive ? "text-orange-500" : "text-gray-500"
              }`}
            >
              {method.detail}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default PaymentMethodSelector;