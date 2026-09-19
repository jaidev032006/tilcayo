"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Abstract Background */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="absolute w-[800px] h-[800px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Subtle Gradient Glow */}
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-violet-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-medium tracking-widest text-muted-foreground uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Independent Digital Technology Studio
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tighter leading-[1.05] mb-8"
        >
          WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500">DIGITAL</span>
          <br /> PRODUCTS THAT MOVE
          <br /> BUSINESSES FORWARD.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
        >
          TILCAYO designs and develops modern websites, web applications, AI-powered solutions and custom software for ambitious businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-medium rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors flex items-center justify-center"
          >
            Explore Our Work
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Available for selected projects
        </motion.div>
      </div>
    </section>
  );
}
