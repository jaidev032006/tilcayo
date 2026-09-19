"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  { id: "01", title: "DISCOVER", description: "Understand the business, users and goals." },
  { id: "02", title: "DEFINE", description: "Turn requirements into a clear product strategy." },
  { id: "03", title: "DESIGN", description: "Create the visual system and user experience." },
  { id: "04", title: "DEVELOP", description: "Build the product using modern technologies." },
  { id: "05", title: "TEST", description: "Validate functionality, performance and responsiveness." },
  { id: "06", title: "LAUNCH", description: "Deploy, monitor and continuously improve." },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/20 border-t border-border" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-6 block">
            05 — OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            From idea to launch.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-gradient-to-b from-indigo-500 to-cyan-500 -translate-x-1/2 rounded-full" 
          />

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-indigo-500 -translate-x-1/2 z-10" />

                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                  >
                    <div className="text-sm font-mono text-indigo-500 mb-2">{step.id}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
