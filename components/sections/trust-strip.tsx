"use client";

import { motion } from "framer-motion";

export function TrustStrip() {
  const clients = ["NOVA", "VERTEX", "ORBIT", "AXION", "MONO", "NEXA"];

  return (
    <section className="py-12 border-y border-border overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-xs font-medium tracking-widest text-muted-foreground text-center mb-8 uppercase">
          Trusted by teams building what's next
        </p>
        
        <div className="flex items-center justify-center gap-12 md:gap-24 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-xl md:text-2xl font-bold tracking-tighter"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
