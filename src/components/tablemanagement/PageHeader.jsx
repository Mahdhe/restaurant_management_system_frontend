const PageHeader = ({ title, subtitle, actions }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-white text-2xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
        )}
      </div>
 
      {actions && (
        <div className="flex items-center gap-3 shrink-0">{actions}</div>
      )}
    </div>
  );
};
 
export default PageHeader;  