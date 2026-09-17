import { Calendar } from "lucide-react";

const ReservationBanner = () => {
  return (
    <section className="w-full bg-[#0F1923] px-6 md:px-16 lg:px-[120px] py-16">
      <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-br from-orange-900/40 via-[#1A2535] to-[#0B1220] p-8 md:p-14 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">
          {/* Left column */}
          <div>
            <span className="block text-orange-500 text-sm font-bold tracking-wide uppercase mb-4">
              Reservations
            </span>
            <h2 className="font-playfair font-bold text-white text-[32px] sm:text-[40px] leading-tight mb-4">
              Book your perfect table.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
              No signup needed. Fill your name, phone, date, time and guest
              count. Once staff confirm your booking, you receive an SMS.
            </p>
            <button
              type="button"
              className="px-6 py-3 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Reserve Now
            </button>
          </div>

          {/* Right column - preview card */}
          <div className="bg-[#0F1B2E] border border-slate-700 rounded-xl p-6 max-w-md w-full justify-self-end">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-2">
                  Date
                </p>
                <div className="flex items-center justify-between bg-slate-800/60 border border-slate-700 rounded-md px-3 py-2.5">
                  <span className="text-white text-sm">05/26/2026</span>
                  <Calendar size={16} className="text-gray-400" />
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-2">
                  Time
                </p>
                <div className="bg-slate-800/60 border border-slate-700 rounded-md px-3 py-2.5">
                  <span className="text-white text-sm">8:30 PM</span>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-2">
                  Guests
                </p>
                <div className="bg-slate-800/60 border border-slate-700 rounded-md px-3 py-2.5">
                  <span className="text-white text-sm">4 Guests</span>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-2">
                  Status
                </p>
                <div className="bg-slate-800/60 border border-slate-700 rounded-md px-3 py-2.5">
                  <span className="text-white text-sm">SMS Confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationBanner;