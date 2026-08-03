import React from 'react'

const Hero2 = () => {
  return (
    <section className="w-full bg-[#0F1923] px-4 py-12 sm:px-8 lg:px-[80px] lg:py-[72px]"
    
    style={{
              background: "radial-gradient(40% 80% at 80% 30%, rgba(41, 128, 185, 0.16) -300%, rgba(15, 25, 35, 1) 50%)",
            }}

    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-12" >

        {/* Booking form card */}
        <div className="w-full rounded-[14px] border border-white/10 bg-[#1C2A38] p-5 sm:p-7 lg:w-2/3 lg:p-[30px]">

          <div className="flex flex-col gap-[10px]">
            <h1 className="font-[Playfair_Display] text-[32px] font-semibold leading-[25px] tracking-[0%] text-white sm:text-[32px]">Book Your table</h1>
            <p className="font-[DM_Sans] text-[14px] leading-[25px] tracking-[0%] text-[#8A9BB0]">No account needed - confirmation is sent directly to you phone</p>
          </div>

          {/* progress bar */}
          <div className="flex w-full gap-[10px] py-[5px] sm:py-[30px]">
            <div className="h-1 flex-1 rounded-full bg-[#F39C12]"></div>
            <div className="h-1 flex-1 rounded-full bg-[#F39C12]"></div>
            <div className="h-1 flex-1 rounded-full bg-[#8A9BB0]"></div>
          </div>

          <div className="flex flex-col gap-6">

            {/* 1st - Date / Time / Guests */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-white">Date</label>
                <div className="relative">
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className="w-full rounded-lg border border-gray-700 bg-[#1B2430] px-4 py-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                  />
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.5" />
                    <path d="M3 9h18M8 2v4M16 2v4" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Time */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-white">Time</label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-gray-700 bg-[#1B2430] px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-gray-500">
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-white">Guests</label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-gray-700 bg-[#1B2430] px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-gray-500">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 2nd - Occasion */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-semibold tracking-[0%] leading-[100%] text-white">
                Occasion (OPTIONAL)
              </label>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-full border border-[#E67E22] bg-[#E67E22]/10 px-5 py-2 text-sm text-[#E67E22]">
                  None
                </button>
                <button className="rounded-full border border-gray-600 px-5 py-2 text-sm text-[#8A9BB0] hover:border-gray-400">
                  Birthday
                </button>
                <button className="rounded-full border border-gray-600 px-5 py-2 text-sm text-[#8A9BB0] hover:border-gray-400">
                  Anniversary
                </button>
                <button className="rounded-full border border-gray-600 px-5 py-2 text-sm text-[#8A9BB0] hover:border-gray-400">
                  Business
                </button>
                <button className="rounded-full border border-gray-600 px-5 py-2 text-sm text-[#8A9BB0] hover:border-gray-400">
                  Proposal
                </button>
              </div>
            </div>

            {/* 3rd - Full Name / Phone */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <label className="font-[DM_Sans] text-[14px] font-semibold text-[#F0F4F8]">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-[10px] border border-white/15 bg-transparent px-3 py-2 text-[#8A9BB0]"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label className="font-[DM_Sans] text-[14px] font-semibold text-[#F0F4F8]">Phone Number</label>
                <input
                  type="text"
                  className="w-full rounded-[10px] border border-white/15 bg-transparent px-3 py-2 text-[#8A9BB0]"
                  placeholder="+94 77 123 4567"
                />
              </div>
            </div>

            {/* 4th - Email */}
            <div className="flex flex-col gap-2">
              <label className="font-[DM_Sans] text-sm font-semibold text-[#F0F4F8]">Email Address</label>
              <input
                type="text"
                className="w-full rounded-[10px] border border-white/15 bg-transparent px-3 py-2 text-[#8A9BB0]"
                placeholder="Your@example.com"
              />
            </div>

            {/* 5th - Special Requests */}
            <div className="flex flex-col gap-2">
              <label className="font-[DM_Sans] text-sm font-semibold text-[#F0F4F8]">Special Requests (OPTIONAL)</label>
              <textarea
                rows={4}
                className="w-full resize-none rounded-[10px] border border-white/15 bg-transparent px-3 py-2 text-[#8A9BB0]"
                placeholder="Dietary needs, seating preferences, celebrations details..."
              />
            </div>

            {/* 6th - Submit */}
            <button className="w-full rounded-[10px] bg-[#E67E22] px-[18px] py-3 text-center font-[DM_Sans] text-sm font-extrabold text-[#F0F4F8]">
              Confirm Reservation
            </button>

          </div>
        </div>

        {/* right-side sidebar */}
        <div className="flex w-full flex-col gap-5 lg:w-1/3 lg:h-auto">

          <div className="flex flex-1 flex-col justify-center rounded-[14px] border border-white/10 p-5" >
            <h1 className="font-[Playfair_Display] text-[18px] font-bold leading-[100%] tracking-[0%] text-white">Reservation Details</h1>

            <div className="mt-3 flex flex-col">
              <div className="flex items-center justify-between border-b border-white/10 py-2.5">
                <h2 className="font-[DM_Sans] text-[13px] font-normal leading-[100%] tracking-[0%] text-[#F0F4F8]">Available from</h2>
                <h2 className="font-[Playfair_Display] text-[13px] font-normal leading-[100%] tracking-[0%] text-[#E67E22]">6:00 PM</h2>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 py-2.5">
                <h2 className="font-[DM_Sans] text-[13px] font-normal leading-[100%] tracking-[0%] text-[#F0F4F8]">Last Seating</h2>
                <h2 className="font-[Playfair_Display] text-[13px] font-normal leading-[100%] tracking-[0%] text-[#E67E22]">10:00 PM</h2>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 py-2.5">
                <h2 className="font-[DM_Sans] text-[13px] font-normal leading-[100%] tracking-[0%] text-[#F0F4F8]">Max Party Size</h2>
                <h2 className="font-[Playfair_Display] text-[13px] font-normal leading-[100%] tracking-[0%] text-[#E67E22]">12 Guests</h2>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <h2 className="font-[DM_Sans] text-[13px] font-normal leading-[100%] tracking-[0%] text-[#F0F4F8]">Max Party Size</h2>
                <h2 className="font-[Playfair_Display] text-[13px] font-normal leading-[100%] tracking-[0%] text-[#E67E22]">Smart Elegant</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center rounded-[14px] border border-white/10 bg-[#1C2A38] p-6">
            <h1 className="mb-6 font-[Playfair_Display] text-[18px] font-bold leading-[100%] tracking-[0%] text-white">Cancellation Policy</h1>
            <p className="font-[DM_Sans] text-[13px] leading-[20px] text-white">
              Reservation may be cancelled or amended up to 4 hours before your seating at no charge. For parties of 8 or more, a credit card is required to confirm.
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-center rounded-[14px] border border-white/10 p-6 text-center">
            <h1 className="mb-5 font-[Playfair_Display] text-lg font-bold leading-none text-[#F0F4F8]">Need Help Booking?</h1>
            <p className="font-[DM_Sans] text-[13px] leading-5 text-[#8A9BB0]">
              For parties larger than 12 or same-day requests, our team is happy to assist directly.
            </p>
            <p className="mt-2 font-[DM_Sans] text-base font-semibold text-[#F39C12] underline">
              Call +94 77 123 4567
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero2