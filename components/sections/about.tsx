"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            01 — WHO WE ARE
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              We turn complex ideas into simple digital experiences.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
              TILCAYO is a digital technology studio focused on building useful, scalable and beautifully engineered software.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              From strategy and design to development and deployment, we help businesses transform ideas into reliable digital products.
            </p>

            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                  10+
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Projects Built</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                  <Counter from={0} to={12} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Technologies</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                  <Counter from={0} to={100} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Responsive</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Digital Thinking</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
