import { SupplierStats } from "../../../data/InventoryData/InventoryStats";
import SupplierTable from "../SpplierComponents/SuplierTable";
import SupplierForm from "../SpplierComponents/SupplierForm";
import StatsGrid from "../StatsGrid";

export default function SupplierPage() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={SupplierStats} />

      <div className="flex flex-col xl:flex-row gap-5 w-full min-w-0">
        <div className="mt-6 w-full xl:w-202 min-w-0">
          <SupplierTable />
        </div>

        <div className="mt-6 w-full xl:flex-1 min-w-0">
          <SupplierForm />
        </div>
      </div>
    </div>
  );
}
