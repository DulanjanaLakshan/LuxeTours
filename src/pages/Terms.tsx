import { Link } from "react-router-dom";
import { FileText, AlertCircle, RefreshCcw, DollarSign } from "lucide-react";

export default function Terms() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Please read these terms carefully before booking a tour with LuxeTours.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="lead text-xl text-brand-blue font-medium mb-8">
              Last Updated: March 1, 2024
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-brand-gold" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, or by booking a tour with LuxeTours, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions, then you may not access the website or use any services.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4 flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-brand-gold" /> 2. Booking and Payments
            </h2>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>A deposit of 30% of the total tour price is required at the time of booking to secure your reservation.</li>
              <li>The remaining balance is due 60 days prior to the tour departure date.</li>
              <li>If the booking is made within 60 days of departure, full payment is required at the time of booking.</li>
              <li>All prices are quoted in US Dollars (USD) unless otherwise specified.</li>
              <li>We accept major credit cards, PayPal, and wire transfers.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4 flex items-center gap-2">
              <RefreshCcw className="h-6 w-6 text-brand-gold" /> 3. Cancellations and Refunds
            </h2>
            <p>
              Cancellations must be received in writing. The following cancellation fees apply:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>60 days or more before departure: Full refund minus a $150 administrative fee per person.</li>
              <li>30 to 59 days before departure: 50% of the total tour price.</li>
              <li>Less than 30 days before departure: 100% of the total tour price (no refund).</li>
            </ul>
            <p>
              We strongly recommend purchasing comprehensive travel insurance to cover unexpected cancellations.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-brand-gold" /> 4. Changes to Itinerary
            </h2>
            <p>
              LuxeTours reserves the right to modify tour itineraries, accommodations, or transportation if necessary due to unforeseen circumstances (e.g., weather, political instability, strikes). We will make every effort to provide comparable alternatives and will notify you of any significant changes as soon as possible.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4">5. Travel Documents and Insurance</h2>
            <p>
              It is the traveler's responsibility to ensure they have valid passports, visas, and any required vaccinations for their destination. Passports must be valid for at least six months beyond the return date.
            </p>
            <p>
              LuxeTours requires all travelers to hold valid comprehensive travel insurance covering medical expenses, emergency repatriation, and trip cancellation.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4">6. Limitation of Liability</h2>
            <p>
              LuxeTours acts only as an agent for the independent suppliers providing accommodations, transportation, and other services. We are not liable for any injury, damage, loss, delay, or irregularity that may occur due to the actions or omissions of these suppliers, or due to events beyond our control (force majeure).
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
            </p>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm">
                If you have any questions about these Terms and Conditions, please <Link to="/contact" className="text-brand-gold hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
