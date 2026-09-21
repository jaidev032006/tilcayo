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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="relative block aspect-video overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              
              <div className="flex flex-col p-6 flex-grow bg-white dark:bg-card">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 rounded-full text-xs font-medium whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Live Link <span className="ml-1 text-xl leading-none">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
