"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, CheckCircle2 } from "lucide-react";
import { athlete } from "@/data/athlete";

export default function Sponsorship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="patrocinios" className="section-padding relative">
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
              Parcerias comerciais
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-white max-w-3xl mx-auto leading-tight">
              {athlete.sponsorship.title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-center text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
            >
              {athlete.sponsorship.description}
            </motion.p>

            {/* Benefits grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="card-base p-6 sm:p-8 lg:p-10 mb-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <Handshake className="w-6 h-6 text-gold-500" />
                <h3 className="font-display text-xl sm:text-2xl tracking-wider text-white">
                  O que o atleta oferece
                </h3>
              </div>

              <ul className="grid sm:grid-cols-2 gap-4">
                {athlete.sponsorship.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <button onClick={scrollToContact} className="btn-primary text-base">
                {athlete.sponsorship.cta}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
