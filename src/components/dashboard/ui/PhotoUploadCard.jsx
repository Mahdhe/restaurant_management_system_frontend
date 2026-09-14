import { User } from "lucide-react";

const PhotoUploadCard = ({
  label = "Upload Photo",
  hint = "JPG, PNG — Max 2MB",
  onBrowse,
}) => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
          <User size={18} className="text-gray-500" />
        </span>
        <div>
          <p className="text-orange-500 text-sm font-semibold">{label}</p>
          <p className="text-gray-500 text-xs mt-0.5">{hint}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onBrowse}
        className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200 shrink-0"
      >
        Browse
      </button>
    </div>
  );
};

export default PhotoUploadCard;