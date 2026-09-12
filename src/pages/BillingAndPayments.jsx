import { useState } from "react";
import PageHeader from "../components/dashboard/DashboardPageHeader";
import Tabs from "../components/dashboard/ui/Tabs";
import BillingStatsRow from "../components/billingpayments/BillingStatsRow";
import OrderItemsCard from "../components/billingpayments/OrderItemsCard";
import BillInfoCard from "../components/billingpayments/BillInfoCard";
import ApplyCouponsCard from "../components/billingpayments/ApplyCouponsCard";
import TaxPreviewCard from "../components/billingpayments/TaxPreviewCard";

const BillingAndPayments = () => {
  const [activeTab, setActiveTab] = useState("Bill Summary");

  return (
    <div className="p-6 bg-[#0F1923] min-h-screen">
      <PageHeader
        title="Billing & Payments"
        subtitle="Manage bills, payments, receipts, refunds, and transaction records."
        actions={
          <>
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
            >
              Save Draft
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Proceed Payment
            </button>
          </>
        }
      />

      <Tabs
        tabs={["Bill Summary", "Split Bill", "Payment Methods", "Receipt", "Refund Flow"]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

    {activeTab === "Bill Summary" && (
    <>
        <BillingStatsRow />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <OrderItemsCard />
        </div>
        <div className="space-y-6">
            <BillInfoCard />
            <ApplyCouponsCard onApply={(code) => console.log("Apply:", code)} />
            <TaxPreviewCard />
        </div>
        </div>
    </>
    )}

      {/* Other tab content (Split Bill, Payment Methods, Receipt, Refund Flow) goes here later */}
    </div>
  );
};

export default BillingAndPayments;