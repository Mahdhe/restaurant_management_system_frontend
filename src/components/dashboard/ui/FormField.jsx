const baseInputStyles =
  "w-full bg-[#243447] border border-slate-700 rounded-md px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors duration-200";

const FormField = ({
  label,
  value,
  onChange,
  as = "input",
  type = "text",
  placeholder,
  rows = 3,
  options = [],
}) => {
  return (
    <div>
      <label className="block text-gray-500 text-xs font-medium tracking-wide uppercase mb-2">
        {label}
      </label>

      {as === "textarea" && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={`${baseInputStyles} resize-none`}
        />
      )}

      {as === "select" && (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseInputStyles} cursor-pointer`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {as === "input" && (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseInputStyles}
        />
      )}
    </div>
  );
};

export default FormField;