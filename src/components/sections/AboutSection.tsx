"use client";

import React from "react";
import Image from "next/image";
import { Building2, ShieldCheck, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-white dark:bg-[#080C16] border-t border-zinc-200 dark:border-white/10 relative z-20 scroll-mt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Authority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider font-urbanist">
              <Building2 className="w-3.5 h-3.5" />
              Quem Somos
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight font-urbanist">
              Engenharia e Estruturas que Elevam a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-amber-500 dark:from-sky-400 dark:to-amber-400">
                Eficiência do seu Armazém
              </span>
            </h2>

            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              A <strong>PMT LOG</strong> é especializada no desenvolvimento, fabricação, montagem e inspeção técnica de sistemas industriais de armazenagem.
            </p>

            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Analisamos cada operação logística de forma individual para trazer a melhor solução para sua indústria, garantindo aumento imediato no número de posições-palete, otimização de percurso e segurança estrutural plena.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/10 space-y-1">
                <div className="text-sky-600 dark:text-sky-400 font-semibold text-sm font-urbanist flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sede em Campinas / SP</span>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Localização estratégica no maior polo logístico do estado de São Paulo.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/10 space-y-1">
                <div className="text-amber-600 dark:text-amber-400 font-semibold text-sm font-urbanist flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Conformidade ABNT / NBR</span>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Projetos calculados com rigor estrito conforme NBR 15524 e emissão de ART.
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs uppercase tracking-wider font-urbanist shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all"
              >
                <span>Conhecer Nossa Equipe Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Industrial Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[440px] w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/15 shadow-2xl">
              <Image
                src="/assets/empilhadeira-real.webp"
                alt="Operação Logística com Empilhadeira PMT LOG"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 dark:bg-[#0E1526]/90 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 space-y-2 shadow-xl">
                <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold font-urbanist">
                  Compromisso com o Cliente
                </div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white font-urbanist">
                  "Mais de 400.000 posições entregues com índice de aprovação máxima em auditorias."
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
