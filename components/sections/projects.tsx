"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-6 block">
              04 — SELECTED WORK
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Some things we've built.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <Link href={`/projects/${project.slug}`} className="relative block overflow-hidden rounded-2xl bg-secondary mb-8 aspect-[4/3]">
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                
                {/* We use an img tag since next/image needs configuration for external domains */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-2 bg-background/90 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </Link>
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-mono text-muted-foreground">{project.id}</span>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-md line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-md border border-border text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={`/projects/${project.slug}`}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
