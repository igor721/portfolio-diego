"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Flame } from "lucide-react";
import { athlete } from "@/data/athlete";

export default function Goals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="objetivos" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-3">
              Em busca do próximo nível
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-white">
              OBJETIVOS
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>

          {/* Goal highlight card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative card-base overflow-hidden">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent pointer-events-none" />
              
              {/* Gold border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

              <div className="relative p-8 sm:p-12 lg:p-16 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 mb-8">
                  <Target className="w-8 h-8 text-gold-500" />
                </div>

                <p className="text-gold-400 uppercase tracking-[0.25em] text-sm mb-3">
                  {athlete.goals.title}
                </p>

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider text-white mb-6">
                  {athlete.goals.subtitle}
                </h3>

                <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                  {athlete.goals.description}
                </p>

                <div className="flex items-center justify-center gap-3 text-gold-400/90">
                  <Flame className="w-5 h-5" />
                  <p className="text-sm sm:text-base italic">
                    {athlete.goals.motivational}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
