import Form from "../components/Add-EditPageComponents/AddOrEditForm";
import LinkedItems from "../components/Add-EditPageComponents/LinkedItems";
import StockPreview from "../components/Add-EditPageComponents/StockPreview";

export default function AddOrEditStock() {
  return (
    <div className="w-full min-w-0 flex flex-col xl:flex-row gap-5 items-start">
      <div className="w-full xl:w-202">
        <Form />
      </div>

      <div className="flex-1 flex-col space-y-5">
        <StockPreview />
        <LinkedItems />
      </div>
    </div>
  );
}
