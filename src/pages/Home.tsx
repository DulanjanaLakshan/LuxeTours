import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Clock, Star, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Travel"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 leading-tight"
          >
            Explore The World <br />
            <span className="text-brand-gold italic">With Confidence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
          >
            Curated luxury experiences, exclusive destinations, and unforgettable memories tailored just for you.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/tours" className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-full font-semibold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl">
              Book Now
            </Link>
            <Link to="/tours" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold uppercase tracking-wider transition-all border border-white/30">
              View Tours
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Secure Booking", desc: "Bank-level security for all your transactions." },
              { icon: Star, title: "Best Price Guarantee", desc: "We match any comparable premium tour price." },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance wherever you are." },
              { icon: Star, title: "Verified Reviews", desc: "Real experiences from our global travelers." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold/10 transition-colors">
                  <feature.icon className="h-8 w-8 text-brand-blue group-hover:text-brand-gold transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Journeys</h2>
              <div className="w-24 h-1 bg-brand-gold rounded-full" />
            </div>
            <Link to="/tours" className="hidden md:flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-gold transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Santorini Escape", location: "Greece", price: 2499, days: 7, img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" },
              { id: 2, title: "Swiss Alps Adventure", location: "Switzerland", price: 3299, days: 5, img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800" },
              { id: 3, title: "Kyoto Cultural Tour", location: "Japan", price: 4199, days: 10, img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800" }
            ].map((tour, idx) => (
              <motion.div 
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-brand-blue">
                    ${tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-brand-gold text-sm font-medium mb-2">
                    <MapPin className="h-4 w-4" /> {tour.location}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-brand-blue transition-colors">{tour.title}</h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {tour.days} Days</span>
                  </div>
                  <Link to={`/tours/${tour.id}`} className="block w-full text-center py-3 border border-brand-blue text-brand-blue rounded-full font-semibold hover:bg-brand-blue hover:text-white transition-colors">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/tours" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-gold transition-colors">
              View All Tours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">Ready for your next adventure?</h2>
          <p className="text-white/80 text-lg mb-10">Join thousands of satisfied travelers who have explored the world with us.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-full font-semibold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
