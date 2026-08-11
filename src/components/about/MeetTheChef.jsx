import chefImage from "../../assets/images/about/chef-elias-moreau.jpg";

const MeetTheChef = () => {
  return (
    <section className="w-full bg-[#1A2535] px-6 md:px-10 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Image */}
        <img
          src={chefImage}
          alt="Chef Elias Moreau cooking"
          className="w-full max-w-md h-[540px] object-cover rounded-xl"
        />

        {/* Right column - Quote */}
        <div>
          <span className="block text-[#E67E22] text-sm font-bold tracking-wide uppercase mb-8">
            Meet The Chef
          </span>
          <p className="font-playfair italic text-white text-2xl leading-relaxed mb-8">
            "Cooking is memory before it is technique. I want every guest to
            taste something that feel like it was made for them, specially,
            tonight."
          </p>
          <p className="text-white text-base font-semibold mb-1">
            Chef Elias Moreau
          </p>
          <p className="text-[#E67E22] text-xs font-semibold tracking-wide uppercase">
            Executive Chef, Versailles
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheChef;