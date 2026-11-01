"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, MessageCircle, Mail, Building2 } from "lucide-react";
import { athlete } from "@/data/athlete";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hasInstagram = Boolean(athlete.contact.instagram);
  const hasWhatsapp = Boolean(athlete.contact.whatsapp);
  const hasEmail = Boolean(athlete.contact.email);

  const whatsappLink = hasWhatsapp
    ? `https://wa.me/${athlete.contact.whatsapp}`
    : "#";
  const instagramLink = hasInstagram
    ? `https://instagram.com/${athlete.contact.instagram.replace("@", "")}`
    : "#";
  const emailLink = hasEmail ? `mailto:${athlete.contact.email}` : "#";

  return (
    <section id="contato" className="section-padding relative bg-[#0a0a0a]">
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
              Vamos conversar
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-white">
              CONTATO
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Commercial message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="card-base p-6 sm:p-8 mb-10 text-center"
            >
              <Building2 className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                {athlete.contact.commercialMessage}
              </p>
            </motion.div>

            {/* Contact buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              {/* Instagram */}
              <a
                href={hasInstagram ? instagramLink : undefined}
                target={hasInstagram ? "_blank" : undefined}
                rel={hasInstagram ? "noopener noreferrer" : undefined}
                className={`card-base p-6 text-center transition-all duration-300 ${
                  hasInstagram
                    ? "hover:border-gold-500/40 cursor-pointer"
                    : "opacity-60 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!hasInstagram) e.preventDefault();
                }}
              >
                <Instagram className="w-7 h-7 text-gold-500 mx-auto mb-3" />
                <p className="text-white font-medium mb-1">Instagram</p>
                <p className="text-white/40 text-sm">
                  {hasInstagram
                    ? athlete.contact.instagram
                    : "A preencher"}
                </p>
              </a>

              {/* WhatsApp */}
              <a
                href={hasWhatsapp ? whatsappLink : undefined}
                target={hasWhatsapp ? "_blank" : undefined}
                rel={hasWhatsapp ? "noopener noreferrer" : undefined}
                className={`card-base p-6 text-center transition-all duration-300 ${
                  hasWhatsapp
                    ? "hover:border-gold-500/40 cursor-pointer"
                    : "opacity-60 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!hasWhatsapp) e.preventDefault();
                }}
              >
                <MessageCircle className="w-7 h-7 text-gold-500 mx-auto mb-3" />
                <p className="text-white font-medium mb-1">WhatsApp</p>
                <p className="text-white/40 text-sm">
                  {hasWhatsapp ? "Fale conosco" : "A preencher"}
                </p>
              </a>

              {/* Email */}
              <a
                href={hasEmail ? emailLink : undefined}
                className={`card-base p-6 text-center transition-all duration-300 ${
                  hasEmail
                    ? "hover:border-gold-500/40 cursor-pointer"
                    : "opacity-60 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!hasEmail) e.preventDefault();
                }}
              >
                <Mail className="w-7 h-7 text-gold-500 mx-auto mb-3" />
                <p className="text-white font-medium mb-1">E-mail</p>
                <p className="text-white/40 text-sm">
                  {hasEmail ? athlete.contact.email : "Opcional"}
                </p>
              </a>
            </motion.div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-center text-white/30 text-sm mt-8"
            >
              Preencha os contatos em{" "}
              <code className="text-gold-500/60">src/data/athlete.ts</code>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
