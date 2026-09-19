"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function Statistics() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const xPos = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <section ref={ref} className="py-32 md:py-48 bg-foreground text-background overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl mb-24 text-center">
          {['Strategy', 'Design', 'Development', 'Launch'].map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-xs font-mono text-background/50 mb-4">0{i + 1}</div>
              <div className="text-lg md:text-xl font-medium tracking-wide uppercase">{step}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none whitespace-nowrap flex items-center gap-8"
        >
          <span>IDEA</span>
          <motion.div style={{ x: xPos }} className="text-indigo-400">
            <ArrowRight className="w-[10vw] h-[10vw]" strokeWidth={3} />
          </motion.div>
          <span>PRODUCT</span>
        </motion.div>
      </div>
    </section>
  );
}
