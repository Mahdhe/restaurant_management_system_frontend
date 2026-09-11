import { Suppliers } from "../../../../data/InventoryData/TableData";

export default function SupplierTable() {
  return (
    <div className="min-w-0 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden font-dmsans pb-5">
      {/* header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/15 ">
        <h2 className="font-bold text-[18px] text-[#f0f4f8]">Supplier List</h2>

        <button className="px-4 py-2 rounded-[10px] text-[#f0f4f8] bg-[#e67e22] font-semibold text-[14px]">
          Save Supplier
        </button>
      </div>

      <div className="px-5 py-2.5 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#243447] text-[11px] text-[#8a9bb0] uppercase">
              <th className="font-medium text-center p-4 rounded-l-[14px]">
                Supplier
              </th>

              <th className="p-4 font-medium text-center">category</th>

              <th className="p-4 font-medium text-center">Contact</th>

              <th className="p-4 font-medium text-center">email</th>

              <th className="p-4 font-medium text-center">Items</th>

              <th className="p-4 font-medium text-center">status</th>

              <th className="p-4 font-medium text-center rounded-r-[14px]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {Suppliers.map((supplier) => (
              <tr key={supplier.name} className="border-b border-white/15">
                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {supplier.name}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {supplier.category}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {supplier.contact}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {supplier.email}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {supplier.item}
                </td>

                <td className="px-4 py-5 text-center">
                  <span
                    className={`inline-flex rounded-full py-1 px-2.5 font-medium text-[10px] border ${supplier.statusborder} ${supplier.statusBg} ${supplier.statusColor}`}
                  >
                    {supplier.status}
                  </span>
                </td>

                <td className="px-4 py-5 text-center">
                  <button
                    className="border rounded-[10px] px-4 py-2 text-[14px] border-white/15 text-[#f0f4f8]"
                  >
                    {supplier.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
