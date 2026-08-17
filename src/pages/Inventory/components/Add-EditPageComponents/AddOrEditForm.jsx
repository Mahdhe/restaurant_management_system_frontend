import { useState } from "react";

const initialForm = {
  ingredientName: "Chiken Breast",
  category: "Meat and Seafood",
  unit: "Kg",
  currentQty: "18",
  minimumThreshold: "25",
  reorderQty: "50",
  supplier: "FreshMeat Lanka",
  unitCost: "LKR 1.850",
  notes: "Used for grilled chiken, kottu, and special platters.",
};

export default function Form() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Saved stock item", form);
  };

  const handleCancel = () => {
    setForm(initialForm);
  };

  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[18px] font-bold text-[#f0f4f8]">
          Add/Edit Stock Item
        </h1>

        <span className="rounded-full border border-[#2980b94d] bg-[#2980b91a] items-center px-2.25 py-0.5 text-[11px] font-semibold text-[#2980b9]">
          Inventory Form
        </span>
      </div>

      <form onSubmit={handleSubmit} className="py-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-4">
            {/* Ingredient Name */}
            <FormField label="INGREDIENT NAME">
              <input
                type="text"
                name="ingredientName"
                value={form.ingredientName}
                onChange={handleChange}
                className="w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
              />
            </FormField>

            {/* Category */}
            <FormField label="CATEGORY">
              <SelectInput
                name="category"
                value={form.category}
                onChange={handleChange}
                options={[
                  "Meat and Seafood",
                  "Vegetables",
                  "Dairy",
                  "Dry Goods",
                  "Beverages",
                ]}
              />
            </FormField>

            {/* Unit */}
            <FormField label="UNIT">
              <SelectInput
                name="unit"
                value={form.unit}
                onChange={handleChange}
                options={["Kg", "g", "L", "ml", "Pieces"]}
              />
            </FormField>

            {/* Current Qty */}
            <FormField label="CURRENT QTY">
              <input
                type="text"
                name="currentQty"
                value={form.currentQty}
                onChange={handleChange}
                className="w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
              />
            </FormField>
          </div>

          <div className="space-y-4">
            {/* Minimum Threshold */}
            <FormField label="MINIMUM THRESHOLD">
              <input
                type="text"
                name="minimumThreshold"
                value={form.minimumThreshold}
                onChange={handleChange}
                className="w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
              />
            </FormField>

            {/* Reorder Qty */}
            <FormField label="REORDER QTY">
              <input
                type="text"
                name="reorderQty"
                value={form.reorderQty}
                onChange={handleChange}
                className="w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
              />
            </FormField>

            {/* Supplier */}
            <FormField label="SUPPLIER">
              <SelectInput
                name="supplier"
                value={form.supplier}
                onChange={handleChange}
                options={[
                  "FreshMeat Lanka",
                  "RiceCo Suppliers",
                  "Green Farm",
                  "Kitchen Mart",
                ]}
              />
            </FormField>

            {/* Unit Cost */}
            <FormField label="UNIT COST">
              <input
                type="text"
                name="unitCost"
                value={form.unitCost}
                onChange={handleChange}
                className="w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
              />
            </FormField>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-4">
          <label className="mb-1 block text-[14px] font-medium uppercase tracking-[0.1px] text-[#8a9bb0]">
            NOTES
          </label>

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={2}
            className="block h-18 resize-none w-full rounded-[10px] py-2 px-3 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
          />
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="h-10 rounded-[10px] border border-white/15 bg-[#243447] px-4 py-2 text-[14px] font-bold text-[#f0f4f8] transition hover:bg-[#2a4055]"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="h-10 rounded-[10px] bg-[#e67e22] px-4 py-2 text-[14px] font-semibold text-[#f0f4f8] transition"
          >
            Save Stock Items
          </button>
        </div>
      </form>
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <div>
      <label className="mb-1 block text-[14px] font-medium uppercase tracking-[0.1px] text-[#8a9bb0]">
        {label}
      </label>

      {children}
    </div>
  );
}

function SelectInput({ name, value, onChange, options = [] }) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="appearance-none w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium pr-7.5"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Custom arrow */}
      <svg
        className="pointer-events-none absolute right-2.25 top-1/2 h-3.25 w-4 -translate-y-1/2 text-[#d5dde5]"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
