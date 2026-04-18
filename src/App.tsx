import { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Hammer, 
  Paintbrush, 
  Bath, 
  Home, 
  CheckCircle2, 
  Menu, 
  X,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './utils/cn';

import ExtraWork from "./assets/extrawork.jpg";
import MainPage from "./assets/hero-construction.jpg";
import bathImg from "./assets/bathroom-remodel.jpg";
import exteriorImg from "./assets/exterior-finish.jpg";
import kitchenImg from "./assets/kitchen.jpg";
import genContractImg from "./assets/gencontract.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className={cn(
            "text-2xl font-serif font-bold tracking-tight transition-colors duration-300",
            isScrolled ? "text-slate-900" : "text-white"
          )}>
            EASTVALE
          </span>
          <span className={cn(
            "text-[10px] tracking-[0.3em] font-light transition-colors duration-300 uppercase",
            isScrolled ? "text-amber-600" : "text-amber-400"
          )}>
            Construction
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide hover:text-amber-500 transition-colors duration-300",
                isScrolled ? "text-slate-700" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:8007806149"
            className={cn(
              "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
              isScrolled 
                ? "bg-slate-900 text-white hover:bg-amber-600" 
                : "bg-white text-slate-900 hover:bg-amber-400"
            )}
          >
            (800) 780-6149
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden shadow-xl mt-4 rounded-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-800 font-medium text-lg border-b border-slate-100 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:8007806149"
                className="bg-amber-600 text-white px-6 py-3 rounded-xl text-center font-bold"
              >
                Call (800) 780-6149
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${MainPage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-[1px] w-12 bg-amber-400" />
            <span className="text-amber-400 font-medium tracking-[0.3em] uppercase text-xs">
              General Contractor | Eastvale, CA
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Building Dreams With <span className="text-amber-400">Precision</span> & Care.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
            Luxury home renovations, master suite transformations, and expert craftsmanship tailored to your lifestyle. Frank and his team deliver excellence in every detail.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center group"
            >
              Get a Free Quote
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 transition-all duration-300 text-center"
            >
              Our Services
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white flex items-center">
                4.8 <Star className="ml-1 fill-amber-400 text-amber-400" size={20} />
              </span>
              <span className="text-slate-400 text-sm">21+ Google Reviews</span>
            </div>
            <div className="h-10 w-[1px] bg-slate-700" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white tracking-tight">15+</span>
              <span className="text-slate-400 text-sm">Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-400 to-transparent" />
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Bath className="text-amber-600" size={32} />,
      title: "Master Bath Renovation",
      description: "Transform your bathroom into a luxury spa retreat with custom tile work, modern fixtures, and expert plumbing.",
      image: bathImg // Use the imported variable
    },
    {
      icon: <Paintbrush className="text-amber-600" size={32} />,
      title: "Exterior Painting & Stucco",
      description: "Revitalize your home's curb appeal with professional painting and seamless re-stuccoing services.",
      image: exteriorImg
    },
    {
      icon: <Hammer className="text-amber-600" size={32} />,
      title: "Kitchen Remodeling",
      description: "Elevate your culinary space with custom cabinetry, high-end countertops, and modern layouts designed for utility.",
      image: kitchenImg
    },
    {
      icon: <Home className="text-amber-600" size={32} />,
      title: "General Contracting",
      description: "From paneling removal to full home additions, we handle every aspect of your construction project with precision.",
      image: genContractImg
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-stone-900">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Cheryl Keough",
      date: "5 years ago",
      text: "Frank and his team did an amazing job with our bathroom remodel. Always on time, very detailed oriented, knowledgable, very professional, great customer service. By far the best contractor we have ever used.",
      rating: 5
    },
    {
      name: "Thuy le",
      date: "6 years ago",
      text: "These guys did an amazing job on my master bath renovation. From start to finish I was super impressed with the customer service and communication from Frank and his crew. Frank came by for the initial quote and was so detailed.",
      rating: 5
    },
    {
      name: "Danielle Culver",
      date: "5 years ago",
      text: "By far the best service you will find guaranteed... Frank and his team were phenomenal! Seamless process from start to finish. We had exterior paint and some paneling removed, they re-stuccoed the wall in no time at all.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <Quote className="absolute top-0 right-0 text-white/5 w-64 h-64 -translate-y-20 translate-x-20" />
        
        <div className="mb-16">
          <h2 className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-amber-400 text-amber-400" size={16} />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-slate-500 text-sm">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <p className="text-lg text-slate-400 mb-6">Join dozens of satisfied homeowners in Eastvale.</p>
          <a 
            href="https://www.google.com/maps/place/Eastvale+Construction/@33.9515546,-117.5615712,17z" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
          >
            <span>View all 21 reviews on Google</span>
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Let's Start Your Next Project</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="ml-6">
                  <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-600">12672 Limonite Ave ste 3e # 119<br />Eastvale, CA 92880</p>
                  <p className="text-sm text-slate-400 mt-1 italic">Located in Cloverdale Marketplace</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div className="ml-6">
                  <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                  <a href="tel:8007806149" className="text-slate-600 hover:text-amber-600 transition-colors font-semibold text-lg">(800) 780-6149</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div className="ml-6">
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600 font-medium">Monday — Friday: 8:00 AM – 4:30 PM</p>
                  <p className="text-slate-600">Saturday — Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Needed</label>
                <select className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none">
                  <option>Bathroom Remodel</option>
                  <option>Kitchen Remodel</option>
                  <option>Exterior Paint & Stucco</option>
                  <option>General Contracting</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-amber-600 transition-colors shadow-lg shadow-slate-900/10"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-serif font-bold tracking-tight text-white">
                EASTVALE
              </span>
              <span className="text-xs tracking-[0.3em] font-light text-amber-400 uppercase">
                Construction
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Providing top-tier general contracting services in Eastvale and surrounding areas. We take pride in our work and guarantee excellence.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                <Star size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                <CheckCircle2 size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-amber-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-amber-400 mr-3 mt-1 shrink-0" />
                <span className="text-slate-400">12672 Limonite Ave ste 3e # 119, Eastvale, CA 92880</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-amber-400 mr-3 shrink-0" />
                <a href="tel:8007806149" className="text-slate-400 hover:text-white transition-colors">(800) 780-6149</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Eastvale Construction. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Detail Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-100 rounded-3xl -z-10" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-3xl -z-10" />
                <img 
                  src={ExtraWork}
                  alt="Construction work" 
                  className="rounded-[2.5rem] shadow-2xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Committed to Excellence, One Home at a Time.</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Eastvale Construction, led by Frank, is a premier general contractor serving California. We specialize in transforming residential spaces through meticulous attention to detail and a commitment to customer satisfaction. 
              </p>
              
              <div className="space-y-4">
                {[
                  "Detailed and transparent pricing",
                  "Efficient and professional crews",
                  "Knowledgeable project management",
                  "High-quality materials and finishes",
                  "Delivered exactly as promised"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="bg-amber-100 p-1 rounded-full">
                      <CheckCircle2 size={18} className="text-amber-600" />
                    </div>
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <Contact />
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a 
          href="tel:8007806149"
          className="bg-amber-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-pulse"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}

export default App;