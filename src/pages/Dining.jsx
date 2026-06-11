import React from 'react';
import { motion } from 'framer-motion';

const Dining = () => {
  const categories = [
    {
      title: "Signature Starters",
      items: [
        { name: "Truffle Fries", price: "₹299", desc: "Crispy fries tossed in truffle oil and parmesan cheese." },
        { name: "Dynamite Shrimp", price: "₹499", desc: "Crispy fried shrimp tossed in our spicy signature dynamite sauce." },
        { name: "Loaded Nachos", price: "₹349", desc: "Tortilla chips topped with cheese, jalapeños, salsa, and sour cream." },
        { name: "Crispy Chicken Wings", price: "₹399", desc: "Classic wings served with a choice of BBQ or spicy buffalo sauce." }
      ]
    },
    {
      title: "Main Course",
      items: [
        { name: "Classic Cheeseburger", price: "₹449", desc: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce." },
        { name: "Margherita Pizza", price: "₹399", desc: "Classic pizza with fresh mozzarella, tomatoes, and basil." },
        { name: "Grilled Chicken Steak", price: "₹549", desc: "Tender grilled chicken breast served with mashed potatoes and veggies." },
        { name: "Penne Alfredo", price: "₹449", desc: "Creamy alfredo sauce with penne pasta and garlic bread." }
      ]
    },
    {
      title: "Beverages",
      items: [
        { name: "Virgin Mojito", price: "₹199", desc: "Refreshing blend of mint, lime, and soda." },
        { name: "Iced Caramel Macchiato", price: "₹249", desc: "Chilled espresso with vanilla syrup and caramel drizzle." },
        { name: "Mango Smoothie", price: "₹229", desc: "Creamy smoothie made with fresh mangoes." },
        { name: "Classic Cold Coffee", price: "₹199", desc: "Thick and creamy blended cold coffee." }
      ]
    }
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
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight font-heading mb-6 uppercase">
            Curated <span className="text-brand-red">Dining</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Elevate your experience with our masterchef-curated menu, designed to delight your taste buds.
          </p>
        </motion.div>

        {categories.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-8 pl-4 border-l-4 border-brand-red">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-panel p-6 border border-black/5 rounded-2xl hover:border-brand-red/30 transition-colors flex justify-between items-start gap-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">{item.name}</h3>
                    <p className="text-slate-600 text-sm mt-2">{item.desc}</p>
                  </div>
                  <div className="text-brand-red font-bold text-lg whitespace-nowrap">
                    {item.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dining;
