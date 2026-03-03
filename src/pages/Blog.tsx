import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in the Mediterranean",
    category: "Destinations",
    date: "May 15, 2024",
    author: "Elena Rodriguez",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800",
    excerpt: "Discover the untouched beauty of the Mediterranean coast, far from the bustling tourist crowds. These secret spots offer pristine beaches and authentic local experiences."
  },
  {
    id: 2,
    title: "The Ultimate Guide to Luxury Safari Packing",
    category: "Travel Tips",
    date: "April 28, 2024",
    author: "David Chen",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
    excerpt: "Preparing for an African safari requires careful planning. Here is our comprehensive guide on what to pack for a comfortable and stylish adventure."
  },
  {
    id: 3,
    title: "Culinary Journey Through Kyoto",
    category: "Food & Culture",
    date: "April 10, 2024",
    author: "Sarah Jenkins",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    excerpt: "Explore the ancient capital of Japan through its exquisite cuisine. From traditional kaiseki dinners to bustling street food markets."
  },
  {
    id: 4,
    title: "Sustainable Luxury: Eco-Friendly Resorts",
    category: "Sustainability",
    date: "March 22, 2024",
    author: "Michael Chang",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    excerpt: "How the world's top luxury resorts are leading the way in sustainable tourism without compromising on comfort or exclusivity."
  },
  {
    id: 5,
    title: "A Weekend in the Swiss Alps",
    category: "Destinations",
    date: "March 05, 2024",
    author: "Emma Thompson",
    img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
    excerpt: "Breathtaking views, world-class skiing, and cozy chalets. Here is how to make the most of a short getaway to the majestic Swiss Alps."
  },
  {
    id: 6,
    title: "Navigating the Amalfi Coast",
    category: "Travel Tips",
    date: "February 18, 2024",
    author: "Lorenzo Rossi",
    img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800",
    excerpt: "Tips and tricks for driving and exploring the stunning but winding roads of Italy's most famous coastline."
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Travel Journal</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Inspiring stories, expert tips, and guides for your next luxury adventure.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Destinations", "Travel Tips", "Food & Culture", "Sustainability"].map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-blue uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-serif font-bold mb-3 hover:text-brand-gold transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-full font-semibold hover:bg-brand-blue hover:text-white transition-colors">
            Load More Articles <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
