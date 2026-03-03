import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, Clock, Calendar, Users, CheckCircle, XCircle, Star } from "lucide-react";

// Mock data
const tourData = {
  id: 1,
  title: "Santorini Escape",
  location: "Greece",
  price: 2499,
  days: 7,
  img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600",
  gallery: [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516483638261-f40af5ba3227?auto=format&fit=crop&q=80&w=800"
  ],
  overview: "Experience the breathtaking sunsets and white-washed architecture of Santorini. This 7-day luxury escape offers private villa accommodations, exclusive yacht tours, and world-class dining overlooking the caldera.",
  included: ["5-Star Accommodation", "Daily Breakfast & Dinner", "Private Airport Transfers", "Sunset Yacht Cruise", "Wine Tasting Tour"],
  notIncluded: ["International Flights", "Travel Insurance", "Personal Expenses", "Optional Excursions"],
  itinerary: [
    { day: 1, title: "Arrival & Welcome", desc: "Arrive in Santorini. Private transfer to your luxury cliffside villa. Welcome dinner at a Michelin-starred restaurant." },
    { day: 2, title: "Oia Exploration", desc: "Guided walking tour of Oia. Afternoon at leisure. Sunset viewing from a private terrace." },
    { day: 3, title: "Caldera Yacht Cruise", desc: "Full-day private catamaran cruise around the caldera, including hot springs and snorkeling." },
    { day: 4, title: "Wine Tasting", desc: "Visit three of Santorini's finest wineries. Learn about the unique volcanic terroir." },
    { day: 5, title: "Akrotiri Ruins", desc: "Private tour of the ancient Minoan city of Akrotiri, often called the 'Minoan Pompeii'." },
    { day: 6, title: "Leisure & Farewell", desc: "A free day to relax by your private infinity pool or explore local boutiques. Farewell dinner." },
    { day: 7, title: "Departure", desc: "Private transfer to the airport for your onward journey." }
  ],
  reviews: [
    { name: "Sarah Jenkins", rating: 5, text: "Absolutely incredible experience. Every detail was perfectly managed." },
    { name: "Michael Chen", rating: 5, text: "The yacht cruise was the highlight of our trip. Highly recommend LuxeTours." }
  ]
};

export default function TourDetails() {
  const { id } = useParams();
  
  // In a real app, fetch data based on ID
  const tour = tourData;

  return (
    <div className="w-full">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={tour.img} alt={tour.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-brand-gold font-medium mb-4">
              <MapPin className="h-5 w-5" /> {tour.location}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">{tour.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <span className="flex items-center gap-2"><Clock className="h-5 w-5" /> {tour.days} Days</span>
              <span className="flex items-center gap-2"><Users className="h-5 w-5" /> Max 12 People</span>
              <span className="flex items-center gap-2"><Star className="h-5 w-5 text-brand-gold" /> 5.0 (24 Reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{tour.overview}</p>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {tour.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt={`Gallery ${idx}`} className="w-full h-48 object-cover rounded-xl" referrerPolicy="no-referrer" />
                ))}
              </div>
            </section>

            {/* Included / Not Included */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500" /> What's Included
                </h3>
                <ul className="space-y-3">
                  {tour.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-red-500" /> Not Included
                </h3>
                <ul className="space-y-3">
                  {tour.notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-8">Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">
                        {day.day}
                      </div>
                      {idx !== tour.itinerary.length - 1 && <div className="w-0.5 h-full bg-gray-200 my-2" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-serif font-bold mb-2">{day.title}</h3>
                      <p className="text-gray-600">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">Verified Reviews</h2>
              <div className="space-y-6">
                {tour.reviews.map((review, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-brand-gold">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                      </div>
                      <span className="font-semibold">{review.name}</span>
                    </div>
                    <p className="text-gray-600 italic">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-gray-100 shadow-xl rounded-2xl p-8">
              <div className="text-3xl font-serif font-bold text-brand-blue mb-2">
                ${tour.price} <span className="text-base font-sans font-normal text-gray-500">/ person</span>
              </div>
              <p className="text-sm text-gray-500 mb-8">Best price guarantee. No hidden fees.</p>

              <Link 
                to={`/booking/${tour.id}`} 
                className="block w-full py-4 bg-brand-gold hover:bg-brand-gold-dark text-white text-center rounded-full font-semibold uppercase tracking-wider transition-colors shadow-md mb-4"
              >
                Book This Tour
              </Link>
              
              <button className="block w-full py-4 bg-white border border-brand-blue text-brand-blue text-center rounded-full font-semibold uppercase tracking-wider hover:bg-brand-blue hover:text-white transition-colors">
                Inquire Now
              </button>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold mb-4">Why book with us?</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Free cancellation up to 30 days</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> 24/7 customer support</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Secure payment processing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
