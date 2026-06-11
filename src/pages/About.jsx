import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
          className="max-w-4xl mx-auto text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-heading mb-6 uppercase">
            Welcome to <span className="text-brand-red">Studio Grill</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 font-light leading-relaxed mb-8">
            More than just a restaurant. We are the ultimate destination for entertainment, sports, and culinary excellence.
          </p>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px] sm:h-[500px]"
          >
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop" alt="Our Story" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <h3 className="text-white text-3xl font-bold font-heading">Our Story</h3>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-black text-slate-900 font-heading">Redefining the Hangout Experience</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              Founded with a vision to bring world-class entertainment and premium dining under one roof, Studio Grill has quickly become the city's favorite spot for those who want it all. 
            </p>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              Whether you're here to watch the latest blockbuster in our private 4K Dolby Atmos theatres, sweat it out on our 24/7 sports turfs, or indulge in our masterchef-curated menu, we promise an experience that you'll never forget.
            </p>
          </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase tracking-wide">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", desc: "Premium quality in every dish, every theater screening, and every interaction." },
              { title: "Innovation", desc: "Constantly evolving our entertainment systems, gaming consoles, and menu selections." },
              { title: "Community", desc: "A welcoming, safe space for friends, families, and colleagues to connect and play." }
            ].map((value, idx) => (
               <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="glass-panel p-8 sm:p-12 text-center border border-black/5 hover:border-brand-red/20 shadow-xl transition-all duration-300 rounded-3xl"
               >
                 <h3 className="text-2xl font-extrabold mb-4 text-slate-900 font-heading">{value.title}</h3>
                 <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">{value.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
