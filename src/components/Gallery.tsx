"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { athlete } from "@/data/athlete";
import { withBasePath } from "@/lib/paths";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  const selectedItem =
    selected !== null
      ? athlete.gallery.find((item) => item.id === selected)
      : null;

  return (
    <section id="galeria" className="section-padding relative bg-[#0a0a0a]">
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
              Momentos da jornada
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-white">
              GALERIA
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {athlete.gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 * index, duration: 0.5 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer bg-[#111]"
                onClick={() => setSelected(item.id)}
              >
                {/* Imagem real */}
                <img
                  src={withBasePath(item.src)}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                {/* Fallback se a imagem ainda não existir */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex-col items-center justify-center p-4"
                  style={{ display: "none" }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-gold-500/20 flex items-center justify-center mb-3">
                    <span className="font-display text-xl sm:text-2xl text-gold-500/40">
                      {item.id}
                    </span>
                  </div>
                  <p className="text-white/30 text-xs sm:text-sm uppercase tracking-widest text-center">
                    {item.caption}
                  </p>
                  <p className="text-white/15 text-[10px] sm:text-xs mt-1 text-center">
                    Adicione {item.src.replace("/images/", "")}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-8 h-8 text-gold-400" />
                  </div>
                </div>

                {/* Caption bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/90 text-sm text-center font-medium">
                    {item.caption}
                  </p>
                </div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gold-500/40 transition-colors duration-300 rounded-sm pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 text-white/70 hover:text-gold-400 transition-colors z-10"
              aria-label="Fechar"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-lg w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-[#111] border border-gold-500/20">
                <img
                  src={withBasePath(selectedItem.src)}
                  alt={selectedItem.alt}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                {/* Fallback no lightbox */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex-col items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center mb-4">
                    <span className="font-display text-3xl text-gold-500/50">
                      {selectedItem.id}
                    </span>
                  </div>
                  <p className="text-white/50 text-lg uppercase tracking-widest">
                    {selectedItem.caption}
                  </p>
                  <p className="text-white/30 text-sm mt-2">
                    Adicione {selectedItem.src.replace("/images/", "")}
                  </p>
                </div>
              </div>

              <p className="text-white/70 text-sm mt-4 uppercase tracking-widest">
                {selectedItem.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}