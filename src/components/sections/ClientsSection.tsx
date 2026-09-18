"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";

export function ClientsSection() {
  const clients = [
    {
      id: "dhl",
      name: "DHL Supply Chain",
      logo: "/assets/clients/dhl.webp",
      segment: "Líder Global em Logística",
      aspect: "w-36 h-9",
    },
    {
      id: "penske",
      name: "Penske Logistics",
      logo: "/assets/clients/penske.webp",
      segment: "Operador Logístico 3PL",
      aspect: "w-36 h-10",
    },
    {
      id: "gruposc",
      name: "Grupo SC",
      logo: "/assets/clients/gruposc.webp",
      segment: "Distribuição Farmacêutica",
      aspect: "w-36 h-10",
    },
    {
      id: "panasonic",
      name: "Panasonic",
      logo: "/assets/clients/panasonic.webp",
      segment: "Tecnologia & Manufatura",
      aspect: "w-36 h-8",
    },
    {
      id: "oxxo",
      name: "OXXO",
      logo: "/assets/clients/oxxo.webp",
      segment: "Rede de Proximidade & Varejo",
      aspect: "w-28 h-11",
    },
    {
      id: "mtclog",
      name: "MTC LOG",
      logo: "/assets/clients/mtclog.webp",
      segment: "Armazenagem & Cargas",
      aspect: "w-32 h-10",
    },
  ];

  // Repeat items for infinite seamless looping
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section id="clientes" className="relative py-24 lg:py-32 bg-slate-50/70 dark:bg-[#060912] border-t border-zinc-200 dark:border-white/10 relative z-20 scroll-mt-20 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider font-urbanist">
            <Award className="w-3.5 h-3.5" />
            Clientes & Parceiros
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight font-urbanist">
            Grandes Operações que Confiam na{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-amber-500 dark:from-sky-400 dark:to-amber-400">
              PMT LOG
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Sistemas de armazenagem e engenharia intralogística homologados pelos principais operadores logísticos, farmacêuticos, indústrias e redes varejistas do Brasil.
          </p>
        </div>

      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Smooth Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-slate-50/90 via-slate-50/60 to-transparent dark:from-[#060912] dark:via-[#060912]/80 dark:to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-slate-50/90 via-slate-50/60 to-transparent dark:from-[#060912] dark:via-[#060912]/80 dark:to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex animate-marquee gap-6 items-center select-none py-2">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 w-64 sm:w-72 p-5 rounded-2xl bg-white dark:bg-[#0E1526] border border-zinc-200 dark:border-white/10 hover:border-sky-500/50 dark:hover:border-sky-500/50 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 hover:scale-[1.03] group cursor-default"
            >
              {/* White badge container for optimal logo legibility */}
              <div className="h-16 w-full rounded-xl bg-white dark:bg-white flex items-center justify-center p-3 shadow-inner border border-zinc-100 dark:border-transparent transition-transform group-hover:scale-105">
                <div className={`relative ${client.aspect} max-w-full`}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>

              {/* Client Info below logo */}
              <div className="mt-3.5 text-center space-y-0.5">
                <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 font-urbanist tracking-tight">
                  {client.name}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                  {client.segment}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Engineering Certification Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-500/10 via-blue-600/10 to-amber-500/10 dark:from-sky-950/40 dark:via-blue-950/30 dark:to-amber-950/30 border border-sky-500/20 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-zinc-900 dark:text-white font-urbanist">
                Rigor Técnico em Conformidade com a ABNT NBR 15524
              </div>
              <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Todos os projetos executados contam com Anotação de Responsabilidade Técnica (ART) e dimensionamento antissísmico e anti-impacto.
              </div>
            </div>
          </div>

          <a
            href="#contato"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider font-urbanist transition-all duration-200 shadow-md"
          >
            <span>Falar com Engenheiro Responsável</span>
          </a>
        </div>
      </div>
    </section>
  );
}
