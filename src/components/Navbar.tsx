import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, Phone } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Tours", path: "/tours" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const navBgClass = isScrolled || !isHome ? "bg-white shadow-md text-brand-blue" : "bg-transparent text-white";

  return (
    <header className={cn("fixed top-0 w-full z-50 transition-all duration-300", navBgClass)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-brand-gold" />
            <span className="font-serif text-2xl font-bold">LuxeTours</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider hover:text-brand-gold transition-colors",
                  location.pathname === link.path && "text-brand-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4 text-brand-gold" />
              <span>+1 (800) 123-4567</span>
            </div>
            <Link
              to="/tours"
              className="bg-brand-gold hover:bg-brand-gold-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-current"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium text-brand-blue hover:text-brand-gold transition-colors",
                    location.pathname === link.path && "text-brand-gold"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-brand-blue font-medium">
                  <Phone className="h-5 w-5 text-brand-gold" />
                  <span>+1 (800) 123-4567</span>
                </div>
                <Link
                  to="/tours"
                  className="bg-brand-blue text-white text-center py-3 rounded-full font-semibold uppercase tracking-wider"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
