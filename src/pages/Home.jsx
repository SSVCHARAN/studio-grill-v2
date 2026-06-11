import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../components/ui/MagneticButton';
import Lenis from 'lenis';

import { 
  Play, ArrowRight, Wifi, Car, Accessibility, Trophy, 
  Star, ChevronDown, Sparkles, DollarSign, Users, Clock, 
  Flame, ChevronLeft, ChevronRight, Check, Quote 
} from 'lucide-react';

const Home = () => {
  // Background images representing the core offerings
  const heroSlides = [
    {
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
      title: "Private Movie Theatres"
    },
    {
      url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2670&auto=format&fit=crop",
      title: "24/7 Sports Turfs"
    },
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2670&auto=format&fit=crop",
      title: "Exquisite Multi-Cuisine Dining"
    },
    {
      url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
      title: "Console Gaming Lounge"
    }
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Zones for Interactive Showcase
  const zones = [
    {
      id: "theater",
      title: "Private Movie Theatre",
      tagline: "4K Laser & Dolby Atmos Cinema",
      desc: "Experience cinema in absolute luxury. Features 170” laser projection screen, immersive Dolby Atmos surround audio, custom reclining lounger seating, and fully integrated private butler dining services. Perfect for family movie nights, private screenings, or exclusive console gaming tournaments.",
      img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
      capacity: "Up to 15 Guests",
      price: "₹2,500 / hr",
      baseRate: 2500,
      features: ["170” Laser Projection Screen", "Dolby Atmos Surround Sound", "Butler Call Dining Service", "OTT Streaming Platforms (Netflix, Aha, etc.)"]
    },
    {
      id: "turf",
      title: "24/7 Sports Turf",
      tagline: "Roofed Box Cricket & Football",
      desc: "Unleash your athletic side on Bengaluru's premium roof-covered sports turf. Featuring high-grade artificial grass, professional floodlights, safety nets, and dedicated courts for Pickleball and Beach Volleyball. Available round-the-clock for high-energy matches and events.",
      img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2670&auto=format&fit=crop",
      capacity: "Up to 22 Players",
      price: "₹1,800 / hr",
      baseRate: 1800,
      features: ["Roof-Covered Box Cricket & Football", "Premium Pickleball & Volleyball Courts", "High-Intensity LED Floodlights", "Changing Rooms & Equipment Rentals"]
    },
    {
      id: "lounge",
      title: "Console Gaming Hub",
      tagline: "Co-op & Competitive Xbox Lounge",
      desc: "Level up your social hangouts in our state-of-the-art gaming lounge. Equipped with the latest Xbox Series X consoles, high-refresh-rate 4K display monitors, premium ergonomic gaming chairs, and custom surround sound systems. Ideal for co-op campaigns or local tournament matches.",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
      capacity: "Up to 10 Gamers",
      price: "₹1,200 / hr",
      baseRate: 1200,
      features: ["Latest Xbox Series X Consoles", "Multiple 4K Display Stations", "Premium Ergonomic Seating", "Extensive Game Pass Library"]
    },
    {
      id: "garden",
      title: "Gourmet Garden Dining",
      tagline: "Multi-Cuisine Open-Air Restaurant",
      desc: "Indulge in a premium dining experience that satisfies all your cravings. Our restaurant features North Indian, Tandoori clay-oven, spicy Chinese, and classic Continental delicacies. Choose from cozy indoor lounges or a beautiful, open-air garden setting with live music acts.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2670&auto=format&fit=crop",
      capacity: "Up to 80 Guests",
      price: "₹1,500 / hr",
      baseRate: 1500,
      features: ["North Indian, Tandoori & Chinese Specialties", "Lush Open-Air Garden Seating", "Live Acoustic Music (Weekends)", "In-Theatre Dining Integration"]
    }
  ];

  const [activeZone, setActiveZone] = useState("theater");
  const selectedZoneData = zones.find(z => z.id === activeZone);

  // Estimator States
  const [estimateZone, setEstimateZone] = useState("theater");
  const [estimateHours, setEstimateHours] = useState(3);
  const [estimateGuests, setEstimateGuests] = useState(10);
  const [addOnCatering, setAddOnCatering] = useState(false);
  const [addOnDecor, setAddOnDecor] = useState(false);
  const [addOnSound, setAddOnSound] = useState(false);

  const selectedEstimateZoneData = zones.find(z => z.id === estimateZone) || zones[0];
  const baseCost = selectedEstimateZoneData.baseRate * estimateHours;
  const cateringCost = addOnCatering ? (estimateGuests * 450) : 0;
  const decorCost = addOnDecor ? 3000 : 0;
  const soundCost = addOnSound ? 4000 : 0;
  const totalCost = baseCost + cateringCost + decorCost + soundCost;

  // Testimonials
  const testimonials = [
    {
      name: "Rahul Shekar",
      role: "Birthday Host",
      rating: 5,
      text: "Hosted my birthday party in the Private Movie Theatre! The team went above and beyond with balloon decor and the dramatic fog entrance was surreal. The Butter Chicken platter was an absolute hit with all our guests.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
      zone: "Private Theatre"
    },
    {
      name: "Priyanka Kulkarni",
      role: "Sports Club Organizer",
      rating: 5,
      text: "We booked the roof-covered turf for a midnight corporate tournament. The LED lighting is fantastic, the turf quality is top-notch, and playing under the roof kept the match going even during Bangalore rain! Outstanding experience.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      zone: "24/7 Turf"
    },
    {
      name: "Vikram Adiga",
      role: "Local Gamer",
      rating: 5,
      text: "Hands down the best console gaming lounge in the city. The chairs are super ergonomic and the surround sound makes you feel like you are inside the game. Free high-speed Wi-Fi and awesome snacks kept us fueled for hours.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      zone: "Console Lounge"
    }
  ];

  const [activeReview, setActiveReview] = useState(0);

  // FAQs
  const faqs = [
    {
      q: "Can we connect our own devices or accounts to the private theatres?",
      a: "Absolutely! Our theatres feature plug-and-play console support via HDMI, and you are welcome to sign in to your personal Netflix, YouTube, or Aha streaming accounts on our high-end smart systems."
    },
    {
      q: "How does the sports turf booking work?",
      a: "Our turfs and courts are open 24/7. Slots can be booked hourly through our Contact page or via phone. We provide standard cricket and football gear on-site, but you are welcome to bring your own."
    },
    {
      q: "Do you cater for custom birthday/anniversary setups?",
      a: "Yes, we specialize in high-end customized celebrations! We offer full balloon styling, entrance fog entries, bubble machines, customizable sound setups, and curated catering menus tailored to your guest list."
    },
    {
      q: "Is there a parking facility available at the venue?",
      a: "Yes, we have free secure parking for both two-wheelers and four-wheelers on-premise, with dedicated spots for visitors."
    },
    {
      q: "What is your cancellation and booking rescheduling policy?",
      a: "Reservations can be canceled or rescheduled up to 48 hours prior to your slot for a full refund. Rescheduling between 24-48 hours before the slot is eligible for a 50% credit, while cancellations within 24 hours are non-refundable."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="w-full bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentHeroSlide].url})` }}
            />
          </AnimatePresence>
          {/* Light Frosted Overlay */}
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[4px] z-10" />
          
          {/* Animated Aesthetic Color Blobs */}
          <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none opacity-70 mix-blend-multiply">
            <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-red/20 blur-[100px] animate-blob1" />
            <div className="absolute top-[10%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-sky-400/20 blur-[100px] animate-blob2" />
            <div className="absolute -bottom-[20%] left-[15%] w-[55vw] h-[55vw] rounded-full bg-amber-400/20 blur-[100px] animate-blob3" />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-50 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="container relative z-20 text-center mt-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-widest leading-none text-slate-900 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">EAT</span>
              <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate] filter drop-shadow-[0_0_8px_rgba(230,26,35,0.8)] font-sans">•</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">PLAY</span>
              <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate] filter drop-shadow-[0_0_8px_rgba(230,26,35,0.8)] font-sans">•</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">ENJOY</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              The ultimate premium multi-entertainment hangout spot. Featuring 4K private theatres, 24/7 sports turfs, console gaming, and exquisite multi-cuisine dining.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact" className="btn-primary px-8 py-3.5 rounded-full font-bold w-full sm:w-auto">
                Book Your Event <ArrowRight size={16} />
              </Link>
              <Link to="/experiences" className="btn-secondary px-8 py-3.5 rounded-full font-bold w-full sm:w-auto">
                Explore Experiences
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Amenities Bar */}
      <div className="relative z-30 px-4 -mt-16 sm:-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto glass-panel p-6 sm:p-8 flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 border-t-brand-red/30 border-t-2 rounded-2xl"
        >
          <div className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
              <Wifi className="text-brand-blue group-hover:text-slate-900" size={18} />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-heading">Free High-Speed Wi-Fi</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center group-hover:bg-brand-purple group-hover:scale-110 transition-all duration-300">
              <Car className="text-brand-purple group-hover:text-slate-900" size={18} />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-heading">Free On-Premise Parking</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
              <Accessibility className="text-brand-green group-hover:text-slate-900" size={18} />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-heading">Wheelchair Accessible</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
              <Trophy className="text-brand-gold group-hover:text-slate-900" size={18} />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-heading">24/7 Sports Turfs</span>
          </div>
        </motion.div>
      </div>

      {/* Interactive Zone Showcase (Virtual Tour) */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        {/* Background glow decoration */}
        <div className="absolute top-1/3 right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-red/3 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-[-5%] w-[350px] h-[350px] rounded-full bg-brand-red/3 blur-[100px] pointer-events-none" />

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              VIRTUAL ZONE <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate]">SHOWCASE</span>
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6 rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
              Take a virtual walkthrough of our distinct entertainment zones and pick your vibe.
            </p>
          </motion.div>

          {/* Interactive Zone Container */}
          <div className="glass-panel p-4 md:p-8 border border-black/5 shadow-2xl rounded-3xl">
            {/* Zone Selector Tabs */}
            <div className="flex flex-wrap gap-2 justify-center border-b border-black/5 pb-6 mb-8">
              {zones.map((zone) => {
                const isActive = activeZone === zone.id;
                let activeColorClass = 'bg-brand-red shadow-[0_4px_15px_rgba(230,26,35,0.3)]';
                if (zone.id === 'turf') activeColorClass = 'bg-brand-green shadow-[0_4px_15px_rgba(16,185,129,0.3)]';
                if (zone.id === 'lounge') activeColorClass = 'bg-brand-blue shadow-[0_4px_15px_rgba(14,165,233,0.3)]';
                if (zone.id === 'garden') activeColorClass = 'bg-brand-gold shadow-[0_4px_15px_rgba(245,158,11,0.3)]';
                
                return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  className={`px-5 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all relative ${
                    isActive 
                      ? `text-slate-900 ${activeColorClass}` 
                      : 'text-slate-500 hover:text-slate-900 bg-black/5 hover:bg-black/10'
                  }`}
                >
                  {zone.title.split(' ')[0]} {zone.title.split(' ')[1] || ''}
                </button>
              )})}
            </div>

            {/* Showcase Display Grid */}
            <AnimatePresence mode="wait">
              {selectedZoneData && (
                <motion.div
                  key={activeZone}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Left Side Info */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-widest font-heading">
                      <Sparkles size={12} className="animate-spin" style={{ animationDuration: '3s' }} /> {selectedZoneData.tagline}
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                      {selectedZoneData.title}
                    </h3>

                    <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
                      {selectedZoneData.desc}
                    </p>

                    {/* Specifications badges */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/80 shadow-sm border border-black/5 rounded-2xl p-4 flex items-center gap-3">
                        <Users className="text-brand-red shrink-0" size={18} />
                        <div>
                          <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Capacity</span>
                          <span className="text-sm font-semibold text-slate-900">{selectedZoneData.capacity}</span>
                        </div>
                      </div>
                      <div className="bg-white/80 shadow-sm border border-black/5 rounded-2xl p-4 flex items-center gap-3">
                        <DollarSign className="text-brand-red shrink-0" size={18} />
                        <div>
                          <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Base Price</span>
                          <span className="text-sm font-semibold text-slate-900">{selectedZoneData.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-px bg-black/5" />

                    {/* Features list */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">Key Amenities</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        {selectedZoneData.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-slate-600">
                            <Check size={14} className="text-brand-red shrink-0" />
                            <span className="font-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex gap-4">
                      <Link to="/contact" className="btn-primary px-8 py-3.5 rounded-full font-bold">
                        Book this Zone
                      </Link>
                      <MagneticButton 
                        onClick={() => {
                          setEstimateZone(selectedZoneData.id);
                          const calcSection = document.getElementById('price-estimator');
                          if(calcSection) calcSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-secondary px-8 py-3.5 rounded-full font-bold"
                      >
                        Estimate Package
                      </MagneticButton>
                    </div>
                  </div>

                  {/* Right Side Image Showcase */}
                  <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden group shadow-2xl border border-black/5">
                    <img
                      src={selectedZoneData.img}
                      alt={selectedZoneData.title}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-700 scale-100 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Vibe Section / Mini About */}
      <section className="section-padding bg-slate-50 relative overflow-hidden border-t border-black/5">
        <div className="absolute -left-[300px] top-1/4 w-[600px] h-[600px] rounded-full bg-brand-red/3 blur-[120px] pointer-events-none" />

        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black">
              THE <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate]">STUDIO</span> VIBE
            </h2>
            <div className="w-16 h-1 bg-brand-red rounded-full" />
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              At Studio Grill, we've redefined the concept of a premium hangout spot. Whether you're planning a custom-themed birthday with fog and bubble entries, enjoying open-air community jam sessions, or playing under the lights on our 24/7 sports turfs, our venue is designed to wow your senses.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="glass-panel p-6 text-center border-t-2 border-t-brand-red">
                 <h4 className="text-4xl font-black text-slate-900 mb-1 font-heading">10+</h4>
                 <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold font-heading">Unique Zones</p>
               </div>
               <div className="glass-panel p-6 text-center border-t-2 border-t-brand-red">
                 <h4 className="text-4xl font-black text-slate-900 mb-1 font-heading">24/7</h4>
                 <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold font-heading">Sports & Fun</p>
               </div>
            </div>
            <div className="pt-2">
              <Link to="/about" className="btn-secondary px-8 py-3 rounded-full font-bold">
                Read Our Story
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 35 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative h-[500px] md:h-[550px] rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl group border border-black/5 hover:border-black/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2629&auto=format&fit=crop" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 scale-100 group-hover:scale-102" 
            />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-all duration-500 rounded-xl" />

          </motion.div>
        </div>
      </section>

      {/* Dynamic Event Price Estimator */}
      <section id="price-estimator" className="section-padding bg-slate-50 relative overflow-hidden border-t border-black/5">
        <div className="absolute top-1/4 left-[-15%] w-[450px] h-[450px] rounded-full bg-brand-red/3 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-red/3 blur-[110px] pointer-events-none" />

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              INTERACTIVE <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate]">ESTIMATOR</span>
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6 rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
              Customize your booking details and instantly calculate an estimate for your special package.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Controls Box */}
            <div className="lg:col-span-2 glass-panel p-6 sm:p-10 border border-black/5 flex flex-col justify-between rounded-3xl">
              <div className="space-y-6">
                {/* Step 1: Select Zone */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                    <Flame size={12} className="text-brand-red animate-pulse" /> Step 1: Choose Zone
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {zones.map((zone) => {
                      let activeBorderBg = 'border-brand-red/50 bg-brand-red/10 shadow-[0_0_15px_rgba(230,26,35,0.15)]';
                      if (zone.id === 'turf') activeBorderBg = 'border-brand-green/50 bg-brand-green/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]';
                      if (zone.id === 'lounge') activeBorderBg = 'border-brand-blue/50 bg-brand-blue/10 shadow-[0_0_15px_rgba(14,165,233,0.15)]';
                      if (zone.id === 'garden') activeBorderBg = 'border-brand-gold/50 bg-brand-gold/10 shadow-[0_0_15px_rgba(245,158,11,0.15)]';

                      return (
                      <button
                        key={zone.id}
                        onClick={() => setEstimateZone(zone.id)}
                        className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center text-center transition-all ${
                          estimateZone === zone.id
                            ? `${activeBorderBg} text-slate-900`
                            : 'border-black/5 bg-white/60 hover:bg-slate-100 text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <span className="font-bold text-xs uppercase tracking-wider font-heading">{zone.title.split(' ')[0]}</span>
                        <span className="text-[10px] text-slate-400 font-light mt-0.5">{zone.price.split(' ')[0]}</span>
                      </button>
                    )})}
                  </div>
                </div>

                {/* Step 2: Duration Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                      <Clock size={12} className="text-brand-red" /> Step 2: Set Hours
                    </h4>
                    <span className="text-sm font-black text-brand-red font-heading">{estimateHours} {estimateHours === 1 ? 'Hour' : 'Hours'}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="8" 
                    value={estimateHours} 
                    onChange={(e) => setEstimateHours(parseInt(e.target.value))}
                    className="w-full accent-brand-red h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-semibold px-1">
                    <span>1 hr</span>
                    <span>2 hrs</span>
                    <span>3 hrs</span>
                    <span>4 hrs</span>
                    <span>5 hrs</span>
                    <span>6 hrs</span>
                    <span>7 hrs</span>
                    <span>8 hrs</span>
                  </div>
                </div>

                {/* Step 3: Guest Size Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                      <Users size={12} className="text-brand-red" /> Step 3: Guest Size
                    </h4>
                    <span className="text-sm font-black text-brand-red font-heading">{estimateGuests} Guests</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={estimateGuests} 
                    onChange={(e) => setEstimateGuests(parseInt(e.target.value))}
                    className="w-full accent-brand-red h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-semibold px-1">
                    <span>1 guest</span>
                    <span>10 guests</span>
                    <span>20 guests</span>
                    <span>30 guests</span>
                    <span>40 guests</span>
                    <span>50+ guests</span>
                  </div>
                </div>

                {/* Step 4: Add-Ons */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold">Step 4: Interactive Add-Ons</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Catering */}
                    <button
                      onClick={() => setAddOnCatering(!addOnCatering)}
                      className={`p-4 rounded-2xl border flex items-center justify-between text-left transition-all ${
                        addOnCatering 
                          ? 'border-brand-red/50 bg-brand-red/10 text-slate-900 shadow-sm' 
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm'
                      }`}
                    >
                      <div className="pr-2">
                        <span className="block font-bold text-xs uppercase tracking-wider font-heading">Gourmet Dinner</span>
                        <span className="text-[10px] text-slate-500 font-light mt-0.5">₹450 / Guest</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        addOnCatering ? 'bg-brand-red border-brand-red text-white' : 'border-slate-300 text-transparent'
                      }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                    </button>

                    {/* Custom Decor */}
                    <button
                      onClick={() => setAddOnDecor(!addOnDecor)}
                      className={`p-4 rounded-2xl border flex items-center justify-between text-left transition-all ${
                        addOnDecor 
                          ? 'border-brand-red/50 bg-brand-red/10 text-slate-900 shadow-sm' 
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm'
                      }`}
                    >
                      <div className="pr-2">
                        <span className="block font-bold text-xs uppercase tracking-wider font-heading">Custom Decor</span>
                        <span className="text-[10px] text-slate-500 font-light mt-0.5">Flat ₹3,000</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        addOnDecor ? 'bg-brand-red border-brand-red text-white' : 'border-slate-300 text-transparent'
                      }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                    </button>

                    {/* Live DJ / Sound */}
                    <button
                      onClick={() => setAddOnSound(!addOnSound)}
                      className={`p-4 rounded-2xl border flex items-center justify-between text-left transition-all ${
                        addOnSound 
                          ? 'border-brand-red/50 bg-brand-red/10 text-slate-900 shadow-sm' 
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm'
                      }`}
                    >
                      <div className="pr-2">
                        <span className="block font-bold text-xs uppercase tracking-wider font-heading">Live Sound/DJ</span>
                        <span className="text-[10px] text-slate-500 font-light mt-0.5">Flat ₹4,000</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        addOnSound ? 'bg-brand-red border-brand-red text-white' : 'border-slate-300 text-transparent'
                      }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Receipt Summary Box */}
            <div className="lg:col-span-1 glass-panel border border-black/5 p-6 sm:p-8 flex flex-col justify-between rounded-3xl relative overflow-hidden bg-gradient-to-b from-white/60 to-transparent">
              {/* Receipt cut styling at the top */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-red/40 to-transparent" />
              
              <div className="space-y-6">
                <div className="text-center pb-4 border-b border-black/5">
                  <h4 className="font-extrabold text-lg text-slate-900 font-heading">Quote Summary</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Estimate Invoice</p>
                </div>

                <div className="space-y-4 text-sm font-light">
                  {/* Base rate */}
                  <div className="flex justify-between items-center text-slate-600">
                    <div>
                      <span className="block font-semibold text-slate-900">{selectedEstimateZoneData.title.split(' ')[0]} {selectedEstimateZoneData.title.split(' ')[1] || ''}</span>
                      <span className="text-[11px] text-slate-400">{estimateHours} hours @ {selectedEstimateZoneData.price.split(' ')[0]}</span>
                    </div>
                    <span className="font-semibold text-slate-900">₹{baseCost.toLocaleString()}</span>
                  </div>

                  {/* Catering */}
                  {addOnCatering && (
                    <div className="flex justify-between items-center text-slate-600">
                      <div>
                        <span className="block font-semibold text-slate-900">Gourmet Dinner</span>
                        <span className="text-[11px] text-slate-400">{estimateGuests} guests @ ₹450</span>
                      </div>
                      <span className="font-semibold text-slate-900">₹{cateringCost.toLocaleString()}</span>
                    </div>
                  )}

                  {/* Decor */}
                  {addOnDecor && (
                    <div className="flex justify-between items-center text-slate-600">
                      <div>
                        <span className="block font-semibold text-slate-900">Themed Decor Setup</span>
                        <span className="text-[11px] text-slate-400">Fog entry + Balloon arch</span>
                      </div>
                      <span className="font-semibold text-slate-900">₹{decorCost.toLocaleString()}</span>
                    </div>
                  )}

                  {/* Sound */}
                  {addOnSound && (
                    <div className="flex justify-between items-center text-slate-600">
                      <div>
                        <span className="block font-semibold text-slate-900">Live DJ & Audio</span>
                        <span className="text-[11px] text-slate-400">Premium PA sound setup</span>
                      </div>
                      <span className="font-semibold text-slate-900">₹{soundCost.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div className="h-px bg-black/5 w-full my-4 border-dashed border-b" />

                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-slate-500">Total Estimate</span>
                  <span className="text-3xl font-black text-brand-red font-heading">₹{totalCost.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-6">
                <Link 
                  to="/contact" 
                  className="btn-primary w-full py-4 text-sm rounded-full font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(230,26,35,0.4)]"
                >
                  Reserve Estimate
                </Link>
                <p className="text-[10px] text-slate-400 text-center font-light mt-3 leading-relaxed">
                  *This is an estimated price. Final charges depend on availability and custom requirements. Rescheduling/cancellation terms apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden border-t border-black/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-wider">
              Visual <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate]">Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6 rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
              A glimpse into the ultimate hangout experience at Studio Grill.
            </p>
          </motion.div>

          {/* Clean Layout Image Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {/* Box 1 (Large) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-2 row-span-2 glass-panel overflow-hidden group rounded-3xl relative border border-black/10"
            >
              {/* Replace src below with real image */}
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <span className="text-slate-900 font-bold tracking-widest uppercase text-sm font-heading">The Vibe</span>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-1 row-span-1 glass-panel overflow-hidden group rounded-3xl relative border border-black/10"
            >
               {/* Replace src below with real image */}
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-1 row-span-1 glass-panel overflow-hidden group rounded-3xl relative border border-black/10"
            >
               {/* Replace src below with real image */}
              <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2670&auto=format&fit=crop" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </motion.div>

            {/* Box 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 md:col-span-1 row-span-1 glass-panel overflow-hidden group rounded-3xl relative border border-black/10"
            >
               {/* Replace src below with real image */}
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2670&auto=format&fit=crop" alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </motion.div>

            {/* Box 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-2 md:col-span-1 row-span-1 glass-panel overflow-hidden group rounded-3xl relative border border-black/10"
            >
               {/* Replace src below with real image */}
              <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop" alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-secondary px-8 py-3 rounded-full font-bold">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Testimonials Slider */}
      <section className="section-padding bg-slate-50 relative overflow-hidden border-t border-black/5">
        <div className="absolute top-[30%] right-[-15%] w-[450px] h-[450px] rounded-full bg-brand-red/3 blur-[120px] pointer-events-none" />

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              GUEST <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate]">STORIES</span>
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6 rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
              Hear what our regular guests say about their memorable experiences at Studio Grill.
            </p>
          </motion.div>

          <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-6 py-8 px-2 sm:px-0">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Marquee Row */}
            <div className="flex w-max animate-marquee pause-marquee hover:pause gap-6 pl-6">
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((review, idx) => (
                <div key={idx} className="w-[300px] sm:w-[400px] shrink-0 glass-panel p-6 sm:p-8 border border-black/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] rounded-3xl bg-white/60 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#E61A23" className="text-brand-red" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 mt-6 border-t border-black/5">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-red/30"
                    />
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm font-heading">{review.name}</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] text-brand-red font-semibold uppercase tracking-wider">{review.role}</span>
                        <span className="text-[8px] text-slate-400 font-bold">•</span>
                        <span className="text-[10px] text-slate-400 font-light">{review.zone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Reverse Marquee Row */}
            <div className="flex w-max animate-marquee-reverse pause-marquee hover:pause gap-6 pl-6">
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].reverse().map((review, idx) => (
                <div key={idx} className="w-[300px] sm:w-[400px] shrink-0 glass-panel p-6 sm:p-8 border border-black/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] rounded-3xl bg-white/60 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#E61A23" className="text-brand-red" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 mt-6 border-t border-black/5">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-red/30"
                    />
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm font-heading">{review.name}</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] text-brand-red font-semibold uppercase tracking-wider">{review.role}</span>
                        <span className="text-[8px] text-slate-400 font-bold">•</span>
                        <span className="text-[10px] text-slate-400 font-light">{review.zone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphic FAQ Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden border-t border-black/5">
        <div className="absolute top-[40%] left-[-15%] w-[450px] h-[450px] rounded-full bg-brand-red/3 blur-[120px] pointer-events-none" />

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              COMMON <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate]">ANSWERS</span>
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6 rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
              Everything you need to know about bookings, rules, configurations, and amenities.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 px-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="glass-panel border border-black/5 rounded-2xl overflow-hidden transition-colors duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 transition-colors hover:text-brand-red font-heading text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-brand-red transition-transform duration-300 shrink-0 ml-4 ${activeFaq === idx ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-500 text-sm sm:text-base font-light leading-relaxed border-t border-black/5 bg-white/[0.01]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
