import { useState } from "react";

const initialForm = {
  name: "Green Farm",
  category: "Produce",
  phone: "077 056 7230",
  email: "orders@grenfarm.lk",
};

export default function SupplierForm() {
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
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] pb-5">
      {/* header */}
      <div className="border-b border-white/15 px-5 py-3">
        <h1 className="text-[18px] font-bold text-[#f0f4f8]">
          Add / Edit Supplier
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="p-5">
        <div className="space-y-4">
          <FormField label="SUPPLIER NAME">
            <input
              type="text"
              name="supplierNmae"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
            />
          </FormField>

          <FormField label="CATEGORY">
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
            />
          </FormField>

          <FormField label="PHONE">
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
            />
          </FormField>

          <FormField label="EMAIL">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-[10px] py-2 px-3 h-10 bg-[#243447] border border-white/15 text-[14px] text-[#f0f4f8] font-medium"
            />
          </FormField>
        </div>

        <div className="mt-4">
          <button
            onClick={handleCancel}
            className="h-10 w-full rounded-[10px] bg-[#e67e22] px-4 py-2 text-[14px] font-semibold text-[#f0f4f8]"
          >
            Save Supplier
          </button>
        </div>
      </form>
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <div>
      <label className="mb-1 block text-[14px] font-medium uppercase traking-[0.1px] text-[#8a9bb0]">
        {label}
      </label>

      {children}
    </div>
  );
}
