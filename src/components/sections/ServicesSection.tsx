"use client";

import React from "react";
import Image from "next/image";
import { Truck, ShieldCheck, Wrench, Layers, ArrowRight, CheckCircle2, FileText, MessageCircle } from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/lib/data";

export function ServicesSection() {
  const iconMap: Record<string, any> = {
    Truck,
    ShieldCheck,
    Wrench,
    Layers,
  };

  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-white dark:bg-[#060912] border-t border-zinc-200 dark:border-white/10 relative z-20 scroll-mt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider font-urbanist">
              <Wrench className="w-3.5 h-3.5" />
              Engenharia & Manutenção Especializada
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight font-urbanist">
              Oferecemos Soluções Completas para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-sky-500 dark:from-amber-400 dark:to-sky-400">
                sua Indústria e Logística
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Acompanhamos sua operação desde o diagnóstico inicial e cálculo de layout até a montagem, inspeção técnica e adequação às normas regulamentadoras.
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 dark:bg-white/5 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/10 hover:border-amber-500/40 text-amber-600 dark:text-amber-400 font-semibold text-xs uppercase tracking-wider font-urbanist transition-all duration-200 self-start md:self-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar Engenheiro</span>
          </a>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.iconName] || Wrench;
            return (
              <div
                key={srv.id}
                className="p-8 rounded-3xl bg-zinc-50/70 dark:bg-[#0E1526] border border-zinc-200 dark:border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-lg dark:shadow-black/30"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 dark:text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {srv.norma && (
                      <span className="px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 font-urbanist shadow-sm dark:shadow-none">
                        {srv.norma}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white font-urbanist group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {srv.title}
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold mt-1 font-urbanist">
                      {srv.subtitle}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {srv.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {srv.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-medium font-urbanist">
                    Disponível para todo o Brasil
                  </span>
                  <a
                    href={`https://wa.me/5519999999999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(srv.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-urbanist group/link"
                  >
                    <span>Solicitar Laudo / Cotação</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industrial Security Callout Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-sky-50 via-blue-50/50 to-slate-50 dark:from-sky-950/60 dark:via-[#0A1226] dark:to-[#0E1526] border border-sky-200 dark:border-sky-500/20 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm dark:shadow-none">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-sky-500/15 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 flex-shrink-0">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white font-urbanist">
                Sua empresa precisa de Laudo de Estabilidade NBR 15524 para Renovação de Seguro ou AVCB?
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                Realizamos inspeções periciais completas com ART (CREA) e mapa detalhado de conformidade para auditorias de segurança.
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs uppercase tracking-wider font-urbanist shadow-lg shadow-sky-500/20"
          >
            <span>Agendar Inspeção Técnica</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
