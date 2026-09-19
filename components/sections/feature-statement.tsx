"use client";

import { motion } from "framer-motion";

export function FeatureStatement() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-foreground text-background">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tighter leading-tight mb-8"
        >
          GOOD SOFTWARE <br /> SHOULD FEEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">SIMPLE.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-background/70 max-w-3xl mx-auto leading-relaxed"
        >
          We combine thoughtful design, modern engineering and business thinking to create digital experiences people actually want to use.
        </motion.p>
      </div>
    </section>
  );
}
