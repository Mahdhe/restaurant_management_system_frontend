import { useState } from "react";
import PageHeader from "../components/tablemanagement/PageHeader";
import Tabs from "../components/dashboard/ui/Tabs";
import BillingStatsRow from "../components/billingpayments/BillingStatsRow";
import OrderItemsCard from "../components/billingpayments/OrderItemsCard";
import BillInfoCard from "../components/billingpayments/BillInfoCard";
import ApplyCouponsCard from "../components/billingpayments/ApplyCouponsCard";
import TaxPreviewCard from "../components/billingpayments/TaxPreviewCard";
import AlertBanner from "../components/billingpayments/AlertBanner";
import SplitOptionsCard from "../components/billingpayments/SplitOptionsCard";
import SplitSummaryCard from "../components/billingpayments/SplitSummaryCard";
import PaymentMethodSelector from "../components/billingpayments/PaymentMethodSelector";
import PaymentDetailsCard from "../components/billingpayments/PaymentDetailsCard";
import PaymentSummaryCard from "../components/billingpayments/PaymentSummaryCard";
import PartialSupportCard from "../components/billingpayments/PartialSupportCard";
import ReceiptPreview from "../components/billingpayments/ReceiptPreview";
import ActionsPanel from "../components/tablemanagement/ActionsPanel";
import CustomerCopyCard from "../components/billingpayments/CustomerCopyCard";
import RefundItemsCard from "../components/billingpayments/RefundItemsCard";    
import RefundSummaryCard from "../components/billingpayments/RefundSummaryCard";  

const BillingAndPayments = () => {
  const [activeTab, setActiveTab] = useState("Bill Summary");
  const [selectedMethod, setSelectedMethod] = useState("Cash");

  return (
    <div className="p-6 pb-214  bg-[#0F1923] min-h-screen">
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
              className="px-4 py-2 rounded-md bg-[#E67E22] text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
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

    {activeTab === "Split Bill" && (
      <>
        <AlertBanner message="Split total must match the grand total before payment can continue." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SplitOptionsCard onEditPerson={(id) => console.log("Edit person:", id)} />
          </div>
          <SplitSummaryCard />
        </div>
      </>
    )}

    {activeTab === "Payment Methods" && (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <PaymentMethodSelector selectedMethod={selectedMethod} onSelect={setSelectedMethod} />
        <PaymentDetailsCard selectedMethod={selectedMethod} />
      </div>
      <div className="space-y-6">
        <PaymentSummaryCard />
        <PartialSupportCard />
      </div>
    </div>
  )}

    {activeTab === "Receipt" && (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <ReceiptPreview />
      </div>
      <div className="space-y-6">
        <ActionsPanel
          title="Receipt Actions"
          actions={[
            { label: "Print Receipt", variant: "filled" },
            { label: "Email Customer", variant: "outline" },
            { label: "Download pdf", variant: "disabled" },
          ]}
        />
        <CustomerCopyCard />
      </div>
    </div>
  )}

      {activeTab === "Refund Flow" && (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RefundItemsCard onSelectionChange={(ids) => console.log("Selected:", ids)} />
        </div>
        <RefundSummaryCard onConfirm={() => console.log("Refund confirmed")} />
      </div>
    )}

      {/* Other tab content (Split Bill, Payment Methods, Receipt, Refund Flow) goes here later */}
    </div>
  );
};

export default BillingAndPayments;