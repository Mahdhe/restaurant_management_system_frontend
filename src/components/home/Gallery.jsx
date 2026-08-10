import interiorImg from "../../assets/images/home/gallery-interior.jpg";
import staffImg from "../../assets/images/home/gallery-staff.jpg";
import plateImg from "../../assets/images/home/gallery-plating.jpg";
import diningImg from "../../assets/images/home/gallery-dining.jpg";

const GALLERY_IMAGES = [
  { id: 1, src: interiorImg, alt: "Restaurant interior seating", offset: "sm:mt-0" },
  { id: 2, src: staffImg, alt: "Server carrying dishes", offset: "sm:mt-10" },
  { id: 3, src: plateImg, alt: "Chef plating a dish", offset: "sm:mt-0" },
  { id: 4, src: diningImg, alt: "Candlelit table setting", offset: "sm:mt-10" },
];

const Gallery = () => {
  return (
    <section className="w-full bg-[#0F1923] px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <div>
            <span className="block text-orange-500 text-sm font-bold tracking-wide uppercase mb-3">
              Gallery
            </span>
            <h2 className="font-playfair font-bold text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-tight">
              A glimpse inside
            </h2>
          </div>

          <button
            type="button"
            className="self-start sm:self-auto px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200 whitespace-nowrap"
          >
            View Full Gallery
          </button>
        </div>

        {/* Capsule image row  */}
        <div className="flex flex-wrap justify-center gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className={`w-[220px] h-[420px] sm:w-[260px] sm:h-[480px] rounded-full overflow-hidden ${img.offset}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;