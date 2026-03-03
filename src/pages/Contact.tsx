import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">We're here to help you plan your next unforgettable journey.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Whether you're ready to book your dream vacation or just starting to explore ideas, our travel experts are here to assist you. Reach out to us via phone, email, or by filling out the form.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Our Office</h3>
                  <p className="text-gray-600">123 Luxury Avenue, Suite 500<br />New York, NY 10001, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (800) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Email</h3>
                  <p className="text-gray-600">hello@luxetours.com<br />support@luxetours.com</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/18001234567?text=Hello%20LuxeTours,%20I%20would%20like%20to%20inquire%20about%20a%20tour." 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider transition-colors shadow-lg"
            >
              <MessageCircle className="h-6 w-6" /> Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-800 p-6 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. One of our travel experts will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-blue font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors" 
                    placeholder="Tour Inquiry" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    required 
                    rows={5} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-colors" 
                    placeholder="How can we help you?" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-brand-blue hover:bg-brand-blue-light text-white rounded-xl font-semibold uppercase tracking-wider transition-colors flex justify-center items-center gap-2"
                >
                  <Send className="h-5 w-5" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
