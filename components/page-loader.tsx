"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check session storage so it only shows once per session
    const hasVisited = sessionStorage.getItem("tilcayo_visited");
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("tilcayo_visited", "true");
        }, 600); // Wait a bit at 100%
      } else {
        setProgress(currentProgress);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808] text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              TILCAYO
            </h1>
            <p className="text-sm tracking-[0.2em] text-white/50 mb-12">
              INITIALIZING EXPERIENCE...
            </p>
            <div className="font-mono text-2xl font-light">
              {progress.toString().padStart(3, "0")}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
