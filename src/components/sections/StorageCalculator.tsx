"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Check, Sparkles, Building2, Layers, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function StorageCalculator() {
  const [area, setArea] = useState<number>(800);
  const [height, setHeight] = useState<number>(10);
  const [palletHeight, setPalletHeight] = useState<number>(1.8);
  const [systemType, setSystemType] = useState<"porta-paletes" | "drive-in" | "mezanino">("porta-paletes");

  // Calculations based on warehouse engineering benchmarks
  // Standard PBR pallet footprint with aisles: ~1.8m² per pallet position in conventional rack
  // Drive-in: ~1.1m² per pallet position (high density)
  // Mezanino: adds 80% usable surface on intermediate floor
  // Level pitch = pallet height + 0.40m (beam structural profile + safety lift clearance)
  const levelPitch = palletHeight + 0.4;
  const estimatedConventionalPositions = Math.round((area * 0.75 / 1.8) * (height / levelPitch));
  const estimatedDriveInPositions = Math.round((area * 0.85 / 1.1) * (height / levelPitch));
  const mezzanineUsableArea = Math.round(area * 0.85);

  const getWhatsappMsg = () => {
    return encodeURIComponent(
      `Olá! Fiz uma simulação no site da PMT LOG para meu armazém de ${area}m² com pé-direito de ${height}m e paletes de ${palletHeight.toFixed(2).replace(".", ",")}m de altura. Gostaria de receber um estudo de layout 2D para o sistema ${systemType.toUpperCase()}.`
    );
  };

  return (
    <section id="simulador" className="relative py-24 lg:py-32 bg-slate-50/70 dark:bg-[#080C16] border-t border-zinc-200 dark:border-white/10 relative z-20 scroll-mt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider font-urbanist">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Capacidade
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight font-urbanist">
            Calcule o Potencial de Estocagem do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-amber-500 dark:from-sky-400 dark:to-amber-400">
              seu Armazém
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Ajuste a área e o pé-direito da sua planta industrial para visualizar uma estimativa preliminar de posições-palete e ganho vertical.
          </p>
        </div>

        {/* Interactive Calculator Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-[#0E1526] border border-zinc-200 dark:border-white/10 space-y-8 flex flex-col justify-between shadow-sm dark:shadow-xl">
            
            {/* Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-urbanist">
                  Área do Armazém (m²)
                </label>
                <span className="text-lg font-semibold text-sky-600 dark:text-sky-400 font-urbanist">
                  {area.toLocaleString("pt-BR")} m²
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
                <span>100 m²</span>
                <span>2.500 m²</span>
                <span>5.000 m²</span>
              </div>
            </div>

            {/* Height Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-urbanist">
                  Pé-Direito Livre (Metros)
                </label>
                <span className="text-lg font-semibold text-amber-600 dark:text-amber-400 font-urbanist">
                  {height} metros
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[6, 8, 10, 12, 14].map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHeight(h)}
                    className={`py-2 rounded-xl text-xs font-semibold font-urbanist border transition-all ${
                      height === h
                        ? "bg-amber-500/20 border-amber-500/60 text-amber-600 dark:text-amber-300 font-bold"
                        : "bg-zinc-100 dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {h}m
                  </button>
                ))}
              </div>
            </div>

            {/* Pallet Height Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-urbanist">
                  Altura da Carga Paletizada
                </label>
                <span className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 font-urbanist">
                  {palletHeight.toFixed(2).replace(".", ",")}m
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { val: 1.2, label: "1,20m", desc: "Fracionada" },
                  { val: 1.5, label: "1,50m", desc: "Média" },
                  { val: 1.8, label: "1,80m", desc: "Padrão PBR" },
                  { val: 2.1, label: "2,10m", desc: "Carga Alta" },
                ].map((p) => (
                  <button
                    key={p.val}
                    type="button"
                    onClick={() => setPalletHeight(p.val)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold font-urbanist border transition-all text-center ${
                      palletHeight === p.val
                        ? "bg-emerald-500/20 border-emerald-500/60 text-emerald-700 dark:text-emerald-300 shadow-sm"
                        : "bg-zinc-100 dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="font-bold">{p.label}</div>
                    <div className="text-[10px] opacity-75 font-normal mt-0.5">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* System Type Selector */}
            <div>
              <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-urbanist block mb-3">
                Sistema de Armazenagem de Interesse:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "porta-paletes", label: "Porta Paletes" },
                  { id: "drive-in", label: "Drive-in" },
                  { id: "mezanino", label: "Mezanino" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSystemType(s.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold font-urbanist border transition-all text-center ${
                      systemType === s.id
                        ? "bg-sky-500/20 border-sky-500 text-sky-700 dark:text-sky-300 shadow-sm"
                        : "bg-zinc-100 dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-zinc-500 leading-relaxed">
              *Estimativa baseada em normas NBR 15524 para paletes padrão PBR (1000 x 1200mm). O projeto executivo final considerará corredores de empilhadeira específicos (patoladas, retráteis ou trilateral).
            </div>
          </div>

          {/* Results Column (Command Center Card) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-[#091E42] via-[#0C2754] to-[#081734] dark:from-[#0B152D] dark:via-[#0E1A38] dark:to-[#0A1124] border border-sky-500/40 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold font-urbanist">
                  Resultado Preliminar da Simulação
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                  Cálculo em Tempo Real
                </span>
              </div>

              {/* Main Estimated Stat */}
              <div>
                <div className="text-sm text-zinc-300 mb-1">
                  Capacidade Estimada (Porta Paletes Convencional):
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white font-urbanist tracking-tight">
                  ~{estimatedConventionalPositions.toLocaleString("pt-BR")}{" "}
                  <span className="text-xl font-normal text-sky-400">posições-palete</span>
                </div>
              </div>

              {/* Secondary Stat: Drive-in Comparison */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-zinc-300 font-medium">
                      Opção com Sistema Drive-in (Alta Densidade):
                    </div>
                    <div className="text-2xl font-semibold text-amber-400 font-urbanist mt-0.5">
                      ~{estimatedDriveInPositions.toLocaleString("pt-BR")} posições
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-semibold font-urbanist">
                    +60% Densidade
                  </span>
                </div>
              </div>

              {/* Secondary Stat: Mezanino Area */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-zinc-300 font-medium">
                      Opção de Mezanino / Multiplicação de Piso:
                    </div>
                    <div className="text-2xl font-semibold text-sky-400 font-urbanist mt-0.5">
                      +{mezzanineUsableArea.toLocaleString("pt-BR")} m² úteis
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-sky-500/20 text-sky-300 text-xs font-semibold font-urbanist">
                    2º Piso Livre
                  </span>
                </div>
              </div>
            </div>

            {/* CTA to send result to WhatsApp */}
            <div className="pt-6 mt-6 border-t border-white/15 space-y-3">
              <a
                href={`https://wa.me/5519999999999?text=${getWhatsappMsg()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm uppercase tracking-wider font-urbanist shadow-lg shadow-emerald-500/20 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-zinc-950" />
                <span>Receber Estudo 2D no WhatsApp</span>
              </a>
              <div className="text-center text-[11px] text-zinc-300">
                Sem custo ou compromisso
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
