import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <Compass className="h-32 w-32 text-brand-gold mx-auto animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-serif font-bold text-brand-blue bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                404
              </span>
            </div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-6"
        >
          Looks like you've wandered off the map.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-10"
        >
          The page you are looking for doesn't exist or has been moved. Let's get you back on track to your next adventure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blue-light text-white rounded-full font-semibold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="h-5 w-5" /> Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
