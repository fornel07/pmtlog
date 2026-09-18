"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-50 dark:bg-[#04060C] border-t border-zinc-200 dark:border-white/10 pt-16 pb-12 relative z-20 text-zinc-600 dark:text-zinc-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-200 dark:border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative h-10 w-48">
              <Image
                src="/assets/pmtlog-logo-dark.png"
                alt="PMT LOG"
                fill
                className="object-contain object-left block dark:hidden"
              />
              <Image
                src="/assets/pmtlog-logo-white.png"
                alt="PMT LOG"
                fill
                className="object-contain object-left hidden dark:block"
              />
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Engenharia especializada em sistemas de armazenagem industrial, montagem, laudos técnicos NBR 15524 e consultoria intralogística para galpões e centros de distribuição em todo o Brasil.
            </p>
            <div className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Conformidade ABNT NBR 15524 • ART CREA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-wider text-zinc-900 dark:text-white font-semibold font-urbanist">
              Estruturas & Produtos
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#produtos" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Porta Paletes Convencional</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Drive-in & Drive-through</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Mezaninos & Pisos Elevados</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Mini Porta Paletes (Picking)</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Simulador de Armazém</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs uppercase tracking-wider text-zinc-900 dark:text-white font-semibold font-urbanist">
              Serviços Técnicos
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Inspeção NBR 15524</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Remanejamento</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Adequações Industriais</a>
              </li>
              <li>
                <a href="#clientes" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Clientes & Cases</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Sobre a Empresa</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-wider text-zinc-900 dark:text-white font-semibold font-urbanist">
              Atendimento Técnico
            </div>
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <span>Campinas, SP • Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <a href="mailto:comercial@pmtlog.com" className="hover:text-sky-600 dark:hover:text-white transition-colors">
                  comercial@pmtlog.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold font-urbanist transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Comercial</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} PMT LOG. Todos os direitos reservados. Soluções em Armazenagem.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-200/80 hover:bg-zinc-300 text-zinc-700 dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-300 dark:hover:text-white transition-colors"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
