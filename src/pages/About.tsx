import { motion } from "motion/react";
import { Award, Globe, Heart, Users } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=2000" alt="About Us" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-brand-blue/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">Our Story</h1>
            <p className="text-lg md:text-xl text-white/90 font-light">Crafting unforgettable luxury travel experiences since 2010.</p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-blue">Redefining Luxury Travel</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At LuxeTours, we believe that travel is not just about reaching a destination; it's about the transformative journey. Founded by a team of passionate globetrotters, our mission is to curate bespoke itineraries that immerse you in the authentic culture, breathtaking landscapes, and unparalleled luxury of the world's most coveted locations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We meticulously select every hotel, guide, and experience to ensure that your journey exceeds expectations. From private yacht charters in the Mediterranean to exclusive wildlife safaris in Africa, we handle every detail so you can simply enjoy the moment.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" alt="Tropical Beach" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-8 -left-8 bg-brand-gold p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-serif font-bold text-white mb-2">15+</p>
                <p className="text-white/90 font-medium uppercase tracking-wider text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brand-blue">Why We Are Different</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Expertise", desc: "Our travel designers have personally visited over 100 countries to vet experiences." },
              { icon: Heart, title: "Personalized Care", desc: "Every itinerary is tailored to your unique preferences, pace, and passions." },
              { icon: Award, title: "Exclusive Access", desc: "Enjoy VIP treatment, private tours, and access to places not open to the public." },
              { icon: Users, title: "Expert Guides", desc: "Travel with local experts who bring destinations to life with their deep knowledge." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
