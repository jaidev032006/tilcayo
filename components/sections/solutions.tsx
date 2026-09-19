"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const solutionsData = [
  {
    id: "STARTUPS",
    title: "STARTUPS",
    description: "Launch faster with a focused MVP.",
    details: "We help early-stage companies build resilient minimum viable products that validate their market and attract investment without wasting time on unnecessary features."
  },
  {
    id: "GROWING",
    title: "GROWING BUSINESSES",
    description: "Improve operations with custom digital systems.",
    details: "As you scale, off-the-shelf software stops working. We build custom dashboards, CRMs, and operational tools that fit exactly how your team works."
  },
  {
    id: "ENTERPRISE",
    title: "ENTERPRISE",
    description: "Build scalable platforms for complex workflows.",
    details: "Enterprise architecture designed for security, scale, and compliance. We modernize legacy systems and integrate modern APIs into your existing stack."
  },
  {
    id: "INDIVIDUAL",
    title: "INDIVIDUAL PRODUCTS",
    description: "Turn your product idea into a working experience.",
    details: "Whether it's a mobile app, an AI-powered tool, or a SaaS platform, we bring consumer and B2B product ideas to life with high-end engineering."
  }
];

export function Solutions() {
  const [expandedId, setExpandedId] = useState<string | null>(solutionsData[0].id);

  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-6 block">
            03 — SOLUTIONS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Built for different stages of growth.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {solutionsData.map((solution) => {
            const isExpanded = expandedId === solution.id;
            
            return (
              <div 
                key={solution.id}
                className={`border border-border rounded-2xl overflow-hidden transition-colors duration-300 ${isExpanded ? 'bg-secondary/50' : 'bg-transparent hover:bg-secondary/20'}`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : solution.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                    <h3 className="text-xl md:text-2xl font-bold md:w-64">{solution.title}</h3>
                    <p className={`text-muted-foreground transition-opacity duration-300 ${isExpanded ? 'opacity-100 text-foreground' : 'opacity-70'}`}>
                      {solution.description}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${isExpanded ? 'bg-foreground text-background border-foreground' : 'border-border text-foreground'}`}>
                    {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 md:pt-0 md:pl-[340px] text-foreground/80 leading-relaxed max-w-4xl">
                        {solution.details}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
