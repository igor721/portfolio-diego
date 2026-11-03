"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { athlete } from "@/data/athlete";
import { withBasePath } from "@/lib/paths";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gold-400 uppercase tracking-[0.3em] text-sm sm:text-base mb-4"
            >
              Atleta de Bodybuilding
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-white mb-4"
            >
              {athlete.name.toUpperCase()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-lg sm:text-xl max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {athlete.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-white/50 text-base max-w-lg mx-auto lg:mx-0 mb-10"
            >
              {athlete.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo("#sobre")}
                className="btn-primary"
              >
                Conheça minha trajetória
              </button>
              <button
                onClick={() => scrollTo("#patrocinios")}
                className="btn-outline"
              >
                Seja um patrocinador
              </button>
            </motion.div>
          </motion.div>

          {/* Image principal do atleta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Gold frame */}
              <div className="absolute -inset-3 border border-gold-500/30 rounded-sm pointer-events-none" />
              <div className="absolute -inset-1 border border-gold-500/10 rounded-sm pointer-events-none" />

              {/* Foto real */}
              <div className="relative w-full h-full rounded-sm overflow-hidden bg-[#111]">
                <img
                  src={withBasePath("/images/hero-diego.jpg")}
                  alt={`${athlete.name} - Atleta de Bodybuilding`}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                {/* Fallback enquanto a foto não for adicionada */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex-col items-center justify-center p-8"
                  style={{ display: "none" }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-gold-500/30 flex items-center justify-center">
                    <span className="font-display text-3xl text-gold-500/50">D</span>
                  </div>
                  <p className="text-white/30 text-sm uppercase tracking-widest text-center">
                    Foto principal
                  </p>
                  <p className="text-white/20 text-xs mt-2 text-center">
                    Adicione hero-diego.jpg em public/images/
                  </p>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-gold-500 pointer-events-none" />
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-gold-500 pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-gold-500 pointer-events-none" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-gold-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-gold-500/50" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}