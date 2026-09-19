"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Business First",
    description: "We don't build technology for technology's sake. Every feature should solve a real problem."
  },
  {
    id: "02",
    title: "Design + Engineering",
    description: "Design and development work together from the beginning, creating cohesive and reliable products."
  },
  {
    id: "03",
    title: "Built to Scale",
    description: "Architecture designed with future growth in mind, handling increased traffic and complexity gracefully."
  },
  {
    id: "04",
    title: "Long-Term Thinking",
    description: "We build systems that can evolve as your business changes, minimizing technical debt."
  }
];

export function WhyTilcayo() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-6 block">
            06 — WHY TILCAYO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            More than a development team.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col border-t border-border pt-8"
            >
              <div className="text-sm font-mono text-muted-foreground mb-4">{feature.id}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
