import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle, Shield, CreditCard, Calendar, Users } from "lucide-react";

const tourData = {
  id: 1,
  title: "Santorini Escape",
  price: 2499,
  img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
};

export default function Booking() {
  const { id } = useParams();
  const tour = tourData; // Mock fetch

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adults: 2,
    children: 0,
    date: "",
    requests: ""
  });

  const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Success

  const totalAdultsPrice = formData.adults * tour.price;
  const totalChildrenPrice = formData.children * (tour.price * 0.7); // 30% off for kids
  const totalPrice = totalAdultsPrice + totalChildrenPrice;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setStep(3);
    }, 1500);
  };

  if (step === 3) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for booking with LuxeTours. Your confirmation email and itinerary have been sent to {formData.email}.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl mb-8 text-left">
            <h3 className="font-semibold mb-2">Booking Reference: #LX-{Math.floor(Math.random() * 100000)}</h3>
            <p className="text-sm text-gray-500">Tour: {tour.title}</p>
            <p className="text-sm text-gray-500">Date: {formData.date}</p>
            <p className="text-sm text-gray-500">Guests: {formData.adults} Adults, {formData.children} Children</p>
          </div>
          <Link to="/" className="inline-block px-8 py-3 bg-brand-blue text-white rounded-full font-semibold hover:bg-brand-blue-light transition-colors">
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">Please fill in your details to secure your reservation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Area */}
          <div className="lg:col-span-2">
            {/* Progress Bar */}
            <div className="flex items-center mb-8">
              <div className={`flex-1 h-2 rounded-l-full ${step >= 1 ? 'bg-brand-gold' : 'bg-gray-200'}`} />
              <div className={`flex-1 h-2 rounded-r-full ${step >= 2 ? 'bg-brand-gold' : 'bg-gray-200'}`} />
            </div>

            {step === 1 && (
              <motion.form 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleNextStep} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6"
              >
                <h2 className="text-2xl font-serif font-bold mb-6 border-b pb-4">Traveler Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date *</label>
                    <input required type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adults *</label>
                    <select name="adults" value={formData.adults} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none">
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                    <select name="children" value={formData.children} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none">
                      {[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                  <textarea name="requests" value={formData.requests} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" placeholder="Dietary requirements, special occasions, etc." />
                </div>

                <button type="submit" className="w-full py-4 bg-brand-blue hover:bg-brand-blue-light text-white rounded-full font-semibold uppercase tracking-wider transition-colors mt-8">
                  Continue to Payment
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handlePayment} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6"
              >
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                  <h2 className="text-2xl font-serif font-bold">Payment Details</h2>
                  <button type="button" onClick={() => setStep(1)} className="text-sm text-brand-gold hover:underline">Back to Details</button>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 mb-6">
                  <Shield className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                  <p className="text-sm text-brand-blue">Your payment is secure and encrypted. We do not store your full credit card details.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" placeholder="John Doe" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                  <div className="relative">
                    <input required type="text" maxLength={19} className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" placeholder="0000 0000 0000 0000" />
                    <CreditCard className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
                    <input required type="text" placeholder="MM/YY" maxLength={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVC *</label>
                    <input required type="text" placeholder="123" maxLength={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" />
                  </div>
                </div>

                <button type="submit" className="w-full py-4 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-full font-semibold uppercase tracking-wider transition-colors mt-8 flex justify-center items-center gap-2">
                  <Shield className="h-5 w-5" /> Pay ${totalPrice.toLocaleString()}
                </button>
              </motion.form>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-xl font-serif font-bold mb-6 border-b pb-4">Order Summary</h3>
              
              <div className="flex gap-4 mb-6">
                <img src={tour.img} alt={tour.title} className="w-24 h-24 object-cover rounded-lg" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-brand-blue">{tour.title}</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><Calendar className="h-4 w-4" /> {formData.date || "Select Date"}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><Users className="h-4 w-4" /> {Number(formData.adults) + Number(formData.children)} Guests</p>
                </div>
              </div>

              <div className="space-y-3 text-sm border-t border-b py-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{formData.adults}x Adult</span>
                  <span className="font-medium">${totalAdultsPrice.toLocaleString()}</span>
                </div>
                {formData.children > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">{formData.children}x Child (30% off)</span>
                    <span className="font-medium">${totalChildrenPrice.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-500">
                  <span>Taxes & Fees</span>
                  <span>Included</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-brand-blue">${totalPrice.toLocaleString()}</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-xs text-gray-500 flex items-start gap-2">
                <Shield className="h-4 w-4 shrink-0 mt-0.5" />
                <p>We use secure SSL encryption to protect your personal and payment data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
