import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MonitorPlay, Gamepad2, CalendarHeart, Music, Trophy } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      title: "Private Screening Theatres",
      desc: "Immerse yourself in cinematic brilliance with our private movie screening theatres. Featuring massive 170” 4K laser screens and Dolby Atmos sound. Enjoy access to OTT platforms like Netflix and Aha, complete with private in-theatre food dining service.",
      img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
      features: ["170” 4K Laser Screens", "Dolby Atmos Sound", "In-Theatre Dining Service", "OTT Streaming Access"],
      icon: <MonitorPlay className="text-brand-red" size={28} />
    },
    {
      title: "24/7 Sports Turfs & Courts",
      desc: "Play round the clock on our premium, roof-covered sports turfs designed for box cricket and football. We also feature dedicated Pickleball courts and Beach Volleyball courts for the ultimate sporting experience.",
      img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2670&auto=format&fit=crop",
      features: ["Roof-Covered Box Cricket & Football", "Dedicated Pickleball Courts", "Beach Volleyball Courts", "Open 24/7 with Floodlights"],
      icon: <Trophy className="text-brand-red" size={28} />
    },
    {
      title: "Console Gaming Hub",
      desc: "Level up your hangout with our dedicated Xbox console gaming setups. Play the latest hits with friends in a comfortable, high-energy environment.",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2519&auto=format&fit=crop",
      features: ["Latest Xbox Consoles", "Co-op & Competitive Multiplayer", "Ergonomic Gaming Chairs", "Surround Sound"],
      icon: <Gamepad2 className="text-brand-red" size={28} />
    },
    {
      title: "Custom Event Hosting",
      desc: "Make your birthdays and anniversaries truly unforgettable. We offer custom theme event decorations including spectacular balloon styling, dramatic fog entries, and magical bubble effects.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2670&auto=format&fit=crop",
      features: ["Birthday & Anniversary Events", "Custom Theme Decorations", "Fog Entries & Bubble Effects", "In-house Catering & Audio"],
      icon: <CalendarHeart className="text-brand-red" size={28} />
    },
    {
      title: "Live Music & Jamming",
      desc: "Vibe with the community at our open-air jamming sessions and live music events. The perfect backdrop for an evening of great food and great company.",
      img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop",
      features: ["Open-Air Community Jamming", "Live Local Bands", "Cozy Outdoor Lighting", "Firepits"],
      icon: <Music className="text-brand-red" size={28} />
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 md:pt-32 md:pb-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-60 mix-blend-multiply">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-red/15 blur-[100px] animate-blob1" />
        <div className="absolute top-[10%] -right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-sky-400/15 blur-[100px] animate-blob2" />
        <div className="absolute -bottom-[20%] left-[15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-amber-400/15 blur-[100px] animate-blob3" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-heading mb-6 uppercase">
            Signature <span className="text-brand-red">Experiences</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            From private cinematic screenings to intense sports matches, we offer world-class facilities designed for ultimate enjoyment.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 lg:gap-12 md:gap-20 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 !== 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative"
              >
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 !== 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center">
                  {exp.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-heading">{exp.title}</h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed">{exp.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {exp.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary text-sm tracking-widest px-8 py-3 rounded-full font-bold inline-block">
                    Book Now
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
