"use client";

import { athlete } from "@/data/athlete";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-display text-xl tracking-wider text-white">
              {athlete.name.toUpperCase()}
            </p>
            <p className="text-white/40 text-sm mt-1">
              Atleta de Bodybuilding · {athlete.state}
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-white/30 text-sm">
              © {currentYear} {athlete.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
