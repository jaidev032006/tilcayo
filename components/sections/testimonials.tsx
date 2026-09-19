"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-6 block">
            07 — CLIENT STORIES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card p-8 md:p-10 rounded-2xl border border-border relative flex flex-col"
            >
              <Quote className="w-10 h-10 text-muted-foreground/20 absolute top-8 right-8" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
                — {testimonial.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
