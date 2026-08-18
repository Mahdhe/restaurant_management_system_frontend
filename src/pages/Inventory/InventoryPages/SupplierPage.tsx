import { SupplierStats } from "../../../data/supplierStats";
import SupplierTable from "../components/SpplierComponents/SuplierTable";
import SupplierForm from "../components/SpplierComponents/SupplierForm";
import StatsGrid from "../components/StatsGrid";

export default function SupplierPage() {
  return (
    <div>
      <StatsGrid stats={SupplierStats} />

      <div className="flex gap-5">
        <div className="mt-6 w-202">
          <SupplierTable />
        </div>

        <div className="mt-6 flex-1">
          <SupplierForm />
        </div>
      </div>
    </div>
  );
}
