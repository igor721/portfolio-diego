"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Award, Calendar, Dumbbell } from "lucide-react";
import { athlete } from "@/data/athlete";

const infoCards = [
  {
    icon: Calendar,
    label: "Idade",
    value: `${athlete.age} anos`,
  },
  {
    icon: Dumbbell,
    label: "Modalidade",
    value: athlete.modality,
  },
  {
    icon: MapPin,
    label: "Representação",
    value: athlete.state,
  },
  {
    icon: Award,
    label: "Federação",
    value: athlete.federation,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding relative">
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
              Conheça o atleta
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-white">
              SOBRE
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="card-base p-5 sm:p-6 text-center"
              >
                <card.icon className="w-6 h-6 text-gold-500 mx-auto mb-3" />
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                  {card.label}
                </p>
                <p className="text-white font-medium text-sm sm:text-base">
                  {card.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="card-base p-6 sm:p-8 lg:p-10">
              <h3 className="font-display text-2xl sm:text-3xl tracking-wider text-gold-400 mb-6">
                Trajetória
              </h3>
              <div className="space-y-4 text-white/70 leading-relaxed text-base sm:text-lg">
                {athlete.biography.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
