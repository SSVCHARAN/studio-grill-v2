import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-black/5 relative overflow-hidden">

      <div className="absolute top-0 left-12 w-[300px] h-[300px] rounded-full bg-brand-red/3 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link to="/" className="flex items-center gap-1 group">
            <span className="text-2xl font-black tracking-tight text-slate-900 font-heading">
              Studio
            </span>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-red shadow-[0_0_12px_rgba(230,26,35,0.6)] group-hover:scale-110 transition-transform duration-300">
              <Play size={8} fill="white" className="text-slate-900 ml-0.5" />
            </span>
            <span className="text-2xl font-black tracking-tight text-brand-red font-heading">
              Grill
            </span>
          </Link>
          <p className="text-slate-600 text-sm leading-relaxed font-light">
            EAT • PLAY • ENJOY. <br/>
            The ultimate premium multi-entertainment hangout spot. High-end private screens, sports turfs, console gaming, and gourmet dining.
          </p>
          <div className="flex gap-3">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-brand-red hover:border-brand-red transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-brand-red hover:border-brand-red transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-brand-red hover:border-brand-red transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest font-heading">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/about" className="text-slate-600 hover:text-brand-red transition-colors font-light">About Us</Link></li>
            <li><Link to="/experiences" className="text-slate-600 hover:text-brand-red transition-colors font-light">Experiences</Link></li>
            <li><Link to="/dining" className="text-slate-600 hover:text-brand-red transition-colors font-light">Dining & Menu</Link></li>
            <li><Link to="/gallery" className="text-slate-600 hover:text-brand-red transition-colors font-light">Gallery</Link></li>
            <li><Link to="/contact" className="text-slate-600 hover:text-brand-red transition-colors font-light">Contact & Book</Link></li>
          </ul>
        </div>

        {/* Experiences */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest font-heading">Experiences</h4>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li className="text-slate-600">4K Private Screening Theatres</li>
            <li className="text-slate-600">24/7 Roof-Covered Sports Turfs</li>
            <li className="text-slate-600">Xbox Console Gaming Setup</li>
            <li className="text-slate-600">Open-air Jamming Sessions</li>
            <li className="text-slate-600">Custom Theme Event Hosting</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest font-heading">Visit Us</h4>
          <ul className="flex flex-col gap-4 text-sm font-light">
            <li className="flex items-start gap-3 text-slate-600">
              <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
              <span>Studio Grill Plaza, 100 Feet Ring Road,<br/>Jayanagar, Bengaluru - 560041</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Phone size={18} className="text-brand-red shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Mail size={18} className="text-brand-red shrink-0" />
              <span>hello@studiogrill.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container relative z-10 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs font-light">
          &copy; {new Date().getFullYear()} Studio Grill. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-slate-500 font-light">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
