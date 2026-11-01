"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal } from "lucide-react";
import { athlete } from "@/data/athlete";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conquistas" className="section-padding relative bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
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
              Resultados competitivos
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-white">
              CONQUISTAS
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>

          {/* Achievement cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {athlete.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.competition}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * index, duration: 0.6 }}
                className="card-base p-6 sm:p-8 relative overflow-hidden group"
              >
                {/* Gold accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 opacity-80" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gold-500/10 rounded-sm">
                    <Trophy className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl tracking-wider text-white group-hover:text-gold-300 transition-colors">
                      {achievement.competition}
                    </h3>
                    {achievement.highlight && (
                      <p className="text-gold-400/80 text-sm mt-1">
                        {achievement.highlight}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {achievement.results.map((result, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <Medal className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <span>
                        <span className="text-gold-400 font-semibold">
                          {result.position}
                        </span>
                        {" — "}
                        {result.category}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
