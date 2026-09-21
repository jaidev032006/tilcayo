"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCta() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-background border-t border-border">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tighter leading-tight mb-8"
        >
          HAVE AN IDEA? <br /> LET'S BUILD IT.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16"
        >
          Tell us what you're building, what you're solving, and where you want to go.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <Link 
            href="/contact" 
            className="group px-8 md:px-12 py-5 bg-foreground text-background font-bold text-lg md:text-xl rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3"
          >
            Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a href="https://wa.me/917603854975" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
            +91 7603854975
          </a>
        </motion.div>
      </div>
    </section>
  );
}
