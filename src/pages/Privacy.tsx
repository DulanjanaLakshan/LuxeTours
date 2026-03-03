import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function Privacy() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Your privacy is important to us. Learn how we collect, use, and protect your data.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="lead text-xl text-brand-blue font-medium mb-8">
              Last Updated: March 1, 2024
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-brand-gold" /> 1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us when you book a tour, create an account, subscribe to our newsletter, or contact customer support. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Name, email address, phone number, and physical address</li>
              <li>Payment information (processed securely via third-party gateways)</li>
              <li>Passport details and travel preferences (for booking purposes)</li>
              <li>Communications with our team</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4 flex items-center gap-2">
              <Eye className="h-6 w-6 text-brand-gold" /> 2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Process your bookings and manage your travel arrangements</li>
              <li>Communicate with you regarding your itinerary, updates, and support</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Send promotional materials (only if you have opted in)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6 text-brand-gold" /> 3. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All payment transactions are encrypted using SSL technology and processed through secure gateways. We do not store your full credit card details on our servers.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-brand-gold" /> 4. Cookies and Tracking
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4">5. Third-Party Sharing</h2>
            <p>
              We may share your information with trusted third-party service providers (e.g., airlines, hotels, local guides) solely for the purpose of fulfilling your travel arrangements. We do not sell your personal data to third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact us at privacy@luxetours.com.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm">
                If you have any questions about this Privacy Policy, please <Link to="/contact" className="text-brand-gold hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
