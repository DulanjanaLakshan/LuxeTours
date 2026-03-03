import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "Booking & Payments",
    items: [
      { q: "How do I make a reservation?", a: "You can book directly through our website by selecting your desired tour and clicking 'Book Now'. Follow the steps to enter your details and complete the secure payment." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for larger group bookings." },
      { q: "Is my payment secure?", a: "Yes, all payments are processed through bank-level encrypted gateways. We do not store your full credit card information on our servers." },
      { q: "Do you offer payment plans?", a: "For tours booked more than 90 days in advance, we offer a 30% deposit option, with the remaining balance due 60 days prior to departure." }
    ]
  },
  {
    category: "Cancellations & Refunds",
    items: [
      { q: "What is your cancellation policy?", a: "Cancellations made 60+ days before departure receive a full refund minus a small administrative fee. Cancellations within 30-59 days receive a 50% refund. No refunds for cancellations within 30 days." },
      { q: "Can I change my travel dates?", a: "Date changes are subject to availability and may incur a fee. Please contact our support team as soon as possible to discuss options." },
      { q: "What happens if a tour is cancelled by LuxeTours?", a: "In the rare event we must cancel a tour, you will receive a 100% refund or the option to transfer your booking to another date or destination." }
    ]
  },
  {
    category: "Travel Preparation",
    items: [
      { q: "Do I need travel insurance?", a: "We highly recommend purchasing comprehensive travel insurance that covers medical emergencies, trip cancellations, and lost luggage." },
      { q: "Are flights included in the tour price?", a: "International flights to the starting destination are generally not included unless specifically stated in the 'What's Included' section of the tour details." },
      { q: "What should I pack?", a: "A detailed packing list tailored to your specific destination and season will be provided in your pre-departure information packet." }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Find answers to common questions about booking, payments, and preparing for your journey.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {faqs.map((section, sIdx) => (
          <div key={sIdx} className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-b pb-2">{section.category}</h2>
            <div className="space-y-4">
              {section.items.map((item, iIdx) => {
                const id = `${sIdx}-${iIdx}`;
                const isOpen = openIndex === id;
                return (
                  <div key={iIdx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => toggleAccordion(id)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800">{item.q}</span>
                      <ChevronDown className={`h-5 w-5 text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still have questions? */}
        <div className="mt-16 bg-gray-50 p-8 rounded-2xl text-center border border-gray-100">
          <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-8 w-8 text-brand-gold" />
          </div>
          <h3 className="text-2xl font-serif font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-brand-blue text-white rounded-full font-semibold hover:bg-brand-blue-light transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
