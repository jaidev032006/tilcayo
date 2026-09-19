"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";
import { useState } from "react";

export function Technology() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = Object.keys(technologies) as Array<keyof typeof technologies>;

  return (
    <section className="py-24 md:py-32 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Built with modern technology.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          We use the best tools for the job, focusing on performance, developer experience, and scalability.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col gap-12">
          {categories.map((category, i) => (
            <div key={category} className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="w-32 uppercase text-xs font-bold tracking-widest text-muted-foreground pt-4">
                {category}
              </div>
              <div className="flex-1 flex flex-wrap gap-3 md:gap-4">
                {technologies[category].map((tech) => (
                  <motion.div
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    whileHover={{ scale: 1.05 }}
                    className={`px-6 py-3 rounded-xl border transition-all duration-300 cursor-default ${
                      hoveredTech === tech 
                        ? "bg-foreground text-background border-foreground shadow-lg" 
                        : "bg-card border-border text-foreground hover:border-indigo-500/50"
                    }`}
                  >
                    <span className="font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
