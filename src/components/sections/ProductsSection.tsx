"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Sparkles, Layers, Box, Info, MessageCircle, X } from "lucide-react";
import { PRODUCTS, ProductItem, COMPANY_INFO } from "@/lib/data";

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section id="produtos" className="relative py-24 lg:py-32 bg-slate-50/50 dark:bg-[#080C16] border-t border-zinc-200 dark:border-white/10 relative z-20 scroll-mt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider font-urbanist">
            <Sparkles className="w-3.5 h-3.5" />
            Nossos Produtos
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight font-urbanist">
            Estruturas de Armazenagem para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500">
              Otimizar seu Espaço
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Fabricadas com aço estrutural de alta resistência e em conformidade estrita com as normas da ABNT, oferecendo a máxima durabilidade para o seu armazém.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="group rounded-3xl bg-white dark:bg-[#0E1526] border border-zinc-200 dark:border-white/10 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 overflow-hidden flex flex-col shadow-sm dark:shadow-lg dark:shadow-black/40 hover:shadow-xl hover:shadow-sky-500/5"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                {/* Number & Tag Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white font-urbanist">
                    {prod.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-sky-500/90 backdrop-blur-md text-xs font-semibold text-white font-urbanist">
                    {prod.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white font-urbanist mb-1.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {prod.name}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold mb-3 font-urbanist">
                    {prod.subtitle}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {prod.description}
                  </p>
                </div>

                {/* Specs Pill Row */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-200 dark:border-white/10">
                  {prod.specs.map((spec) => (
                    <div key={spec.label} className="text-center">
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 uppercase font-medium">
                        {spec.label}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white font-urbanist">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(prod)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 hover:text-sky-600 dark:text-zinc-300 dark:hover:text-white font-urbanist transition-colors group/btn"
                  >
                    <Info className="w-4 h-4 text-sky-500" />
                    <span>Ver Ficha Técnica</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/5519999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20sistema%20${encodeURIComponent(prod.name)}%20com%20a%20PMT%20LOG.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 dark:bg-sky-500/15 dark:hover:bg-sky-500/25 border border-sky-500/30 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 text-xs font-semibold font-urbanist transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Cotar Estrutura</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white dark:bg-[#0E1526] border border-zinc-200 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto cursor-default"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Fechar ficha técnica"
              className="absolute top-5 right-5 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-zinc-950">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-400 text-xs font-semibold font-urbanist">
                  {selectedProduct.subtitle}
                </span>
                <h3 className="text-3xl font-semibold text-zinc-900 dark:text-white font-urbanist mt-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-3 font-urbanist">
                  Diferenciais Técnicos & Vantagens:
                </h4>
                <ul className="space-y-2.5">
                  {selectedProduct.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-200">
                      <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Engenharia e cálculo estrutural conforme NBR 15524.
                </div>
                <a
                  href={`https://wa.me/5519999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico%20para%20${encodeURIComponent(selectedProduct.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs uppercase tracking-wider font-urbanist shadow-lg shadow-sky-500/25"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com Engenheiro no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
