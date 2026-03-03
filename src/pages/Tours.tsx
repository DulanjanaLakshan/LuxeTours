import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, Clock, Filter } from "lucide-react";

const allTours = [
  { id: 1, title: "Santorini Escape", location: "Greece", price: 2499, days: 7, img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800", desc: "Experience the breathtaking sunsets and white-washed architecture of Santorini." },
  { id: 2, title: "Swiss Alps Adventure", location: "Switzerland", price: 3299, days: 5, img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800", desc: "A thrilling journey through the majestic snow-capped peaks of the Swiss Alps." },
  { id: 3, title: "Kyoto Cultural Tour", location: "Japan", price: 4199, days: 10, img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", desc: "Immerse yourself in the ancient traditions and stunning temples of Kyoto." },
  { id: 4, title: "Safari Expedition", location: "Kenya", price: 5499, days: 8, img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800", desc: "Witness the incredible wildlife of the Maasai Mara in ultimate luxury." },
  { id: 5, title: "Amalfi Coast Romance", location: "Italy", price: 2899, days: 6, img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800", desc: "Drive along the stunning coastline and enjoy world-class Italian cuisine." },
  { id: 6, title: "Bali Wellness Retreat", location: "Indonesia", price: 1999, days: 7, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", desc: "Rejuvenate your mind, body, and soul in the tropical paradise of Bali." },
  { id: 7, title: "Machu Picchu Trek", location: "Peru", price: 3599, days: 9, img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800", desc: "Hike the historic Inca Trail to the breathtaking ruins of Machu Picchu." },
];

export default function Tours() {
  const [priceFilter, setPriceFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");

  const filteredTours = allTours.filter(tour => {
    if (priceFilter === "low" && tour.price > 3000) return false;
    if (priceFilter === "high" && tour.price <= 3000) return false;
    if (durationFilter === "short" && tour.days > 7) return false;
    if (durationFilter === "long" && tour.days <= 7) return false;
    return true;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Destinations</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Discover our handpicked selection of premium tours designed for the discerning traveler.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 bg-gray-50 p-6 rounded-2xl">
          <div className="flex items-center gap-2 text-brand-blue font-semibold mr-4">
            <Filter className="h-5 w-5" /> Filters:
          </div>
          <select 
            className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Under $3,000</option>
            <option value="high">$3,000 & Above</option>
          </select>
          <select 
            className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
          >
            <option value="all">All Durations</option>
            <option value="short">1 - 7 Days</option>
            <option value="long">8+ Days</option>
          </select>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, idx) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-brand-blue">
                  ${tour.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-brand-gold text-sm font-medium mb-2">
                  <MapPin className="h-4 w-4" /> {tour.location}
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-brand-blue transition-colors">{tour.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.desc}</p>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 mt-auto">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {tour.days} Days</span>
                </div>
                <Link to={`/tours/${tour.id}`} className="block w-full text-center py-3 border border-brand-blue text-brand-blue rounded-full font-semibold hover:bg-brand-blue hover:text-white transition-colors">
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredTours.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No tours found matching your criteria. Try adjusting your filters.
          </div>
        )}
      </div>
    </div>
  );
}
