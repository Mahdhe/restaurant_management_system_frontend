import Form from "../components/Add-EditPageComponents/AddOrEditForm";
import LinkedItems from "../components/Add-EditPageComponents/LinkedItems";
import StockPreview from "../components/Add-EditPageComponents/StockPreview";

export default function AddOrEditStock() {
  return (
    <div className="flex gap-5 items-start">
      <div className=" w-202">
        <Form />
      </div>

      <div className="flex-1 flex-col space-y-5">
        <StockPreview />
        <LinkedItems />
      </div>
    </div>
  );
}
