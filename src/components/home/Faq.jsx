import { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQS = [
  {
    id: 1,
    question: "Do I need to create an account?",
    answer: "No- reservations and enquiries require only your name and phone number",
  },
  {
    id: 2,
    question: "Is there a dress code?",
    answer:
      "Smart casual is recommended. We ask guests to avoid beachwear and sportswear in the dining room.",
  },
  {
    id: 3,
    question: "Can i request a private room?",
    answer:
      "Yes, The Cellar Room seats up to twelve guests and can be reserved through our Enquire form.",
  },
  {
    id: 4,
    question: "Do I need to create an account?",
    answer: "No- reservations and enquiries require only your name and phone number",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#1A2535] px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <span className="block text-orange-500 text-sm font-bold tracking-wide uppercase mb-3">
          FAQ
        </span>
        <h2 className="font-playfair font-bold text-white text-[32px] sm:text-[40px] lg:text-[48px] leading-tight mb-12">
          A few things to know
        </h2>

        <div className="border-t border-slate-700">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-slate-700 py-6">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-white text-base font-semibold">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-orange-700 text-orange-500 shrink-0 ml-4">
                    {isOpen ? <X size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="text-gray-400 text-sm leading-relaxed mt-3 max-w-2xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;