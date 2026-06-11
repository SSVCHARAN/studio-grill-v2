import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full pt-28 pb-20 md:pt-32 md:pb-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-60 mix-blend-multiply">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-red/15 blur-[100px] animate-blob1" />
        <div className="absolute top-[10%] -right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-sky-400/15 blur-[100px] animate-blob2" />
        <div className="absolute -bottom-[20%] left-[15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-amber-400/15 blur-[100px] animate-blob3" />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-heading mb-6 uppercase">
            Get In <span className="text-brand-red">Touch</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to book your next cinematic experience, reserve the turf, or plan a private event? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 sm:p-10 border border-black/5 rounded-3xl"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-8 font-heading">Contact Details</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Location</h3>
                  <p className="text-slate-600 mt-1">123 Studio Grill Avenue,<br/>Film City Road, Mumbai 400065</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                  <Phone className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600 mt-1">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                  <Mail className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600 mt-1">hello@studiogrill.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                  <Clock className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Hours</h3>
                  <p className="text-slate-600 mt-1">Open 24/7 for Turf & Gaming<br/>Dining: 11:00 AM - 1:00 AM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-panel p-8 sm:p-10 border border-black/5 rounded-3xl"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-8 font-heading">Send a Message</h2>
            <form className="flex flex-col gap-4">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all" />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-slate-600">
                  <option>Select Enquiry Type</option>
                  <option>Private Theatre Booking</option>
                  <option>Turf Reservation</option>
                  <option>Event Hosting</option>
                  <option>General Query</option>
                </select>
              </div>
              <div>
                <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all resize-none"></textarea>
              </div>
              <button type="button" className="btn-primary py-4 rounded-xl text-lg font-bold tracking-wider mt-2">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
