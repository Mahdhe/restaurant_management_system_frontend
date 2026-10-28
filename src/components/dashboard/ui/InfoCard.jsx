const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h3 className="text-white text-sm font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
    </div>
  );
};
 
export default InfoCard;