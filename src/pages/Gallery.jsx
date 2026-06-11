import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop", title: "Private Theatres", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2670&auto=format&fit=crop", title: "Sports Turf", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2519&auto=format&fit=crop", title: "Gaming Hub", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2670&auto=format&fit=crop", title: "Custom Events", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop", title: "Live Music", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop", title: "Premium Dining", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop", title: "Culinary Excellence", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" }
  ];

  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight font-heading mb-6 uppercase">
            Our <span className="text-brand-red">Gallery</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Take a visual tour of Studio Grill and see what awaits you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-3xl overflow-hidden relative group shadow-lg cursor-pointer ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-white text-2xl font-bold font-heading transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
