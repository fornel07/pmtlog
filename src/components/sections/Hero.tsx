"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, ChevronDown, Layers, Box } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-industrial-grid">
      {/* Background Lighting Halos */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider font-urbanist">
              <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-ping" />
              <span>Engenharia Intralogística & Armazenagem</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-zinc-900 dark:text-white tracking-tight leading-[1.15] font-urbanist">
              Projetos sob Medida para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-amber-500 dark:from-sky-400 dark:via-blue-500 dark:to-amber-400">
                Otimizar o seu Armazém
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed font-normal">
              Projetamos, instalamos e readequamos estruturas de estocagem de alta densidade que multiplicam suas posições-palete, eliminam gargalos e asseguram conformidade estrita com as normas técnicas.
            </p>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 flex-shrink-0" />
                <span>Até 85% de ganho de espaço útil</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 flex-shrink-0" />
                <span>Laudos e ARTs conforme NBR 15524</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 flex-shrink-0" />
                <span>Projetos 2D sem custo inicial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 flex-shrink-0" />
                <span>Equipes próprias em todo o Brasil</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm uppercase tracking-wider font-urbanist shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 dark:bg-white/5 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/50 text-zinc-800 dark:text-white font-semibold text-sm font-urbanist transition-all duration-200"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Quick Structure Tags */}
            <div className="pt-6 border-t border-zinc-200 dark:border-white/10">
              <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mb-2.5">
                Estruturas Especializadas:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Porta Paletes",
                  "Drive-in",
                  "Mezaninos",
                  "Mini Porta Paletes",
                  "Cantilever",
                  "Shuttle",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-medium font-urbanist hover:border-sky-500/40 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual spacer reserved for 3D Pallet choreography */}
          <div className="lg:col-span-5 h-[340px] sm:h-[420px] lg:h-[500px] pointer-events-none relative" />

        </div>
      </div>
    </section>
  );
}
