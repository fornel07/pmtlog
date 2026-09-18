"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    system: "Porta Paletes",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${formData.name} da empresa ${formData.company || "N/D"}.\n` +
      `Cidade: ${formData.city || "Campinas/SP"}\n` +
      `Interesse: ${formData.system}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Mensagem: ${formData.notes || "Solicito orçamento de estruturas de armazenagem."}`
    );

    // Redirect to WhatsApp after short delay
    setTimeout(() => {
      window.open(`https://wa.me/5519999999999?text=${msg}`, "_blank");
    }, 800);
  };

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-slate-50/70 dark:bg-[#060912] border-t border-zinc-200 dark:border-white/10 relative z-20 scroll-mt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider font-urbanist">
                <Mail className="w-3.5 h-3.5" />
                Fale com Nossos Especialistas
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight font-urbanist">
                Vamos Otimizar o seu Armazém?
              </h2>

              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Envie as medidas da sua planta ou agende uma visita técnica presencial com nossos engenheiros para receber um estudo de layout 2D completo.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0E1526] border border-zinc-200 dark:border-white/10 flex items-start gap-4 shadow-sm dark:shadow-none">
                <div className="p-3 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold font-urbanist">
                    Sede Operacional
                  </div>
                  <div className="text-base font-semibold text-zinc-900 dark:text-white font-urbanist mt-0.5">
                    Campinas, SP
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Atendimento e montagem em todo o território nacional
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0E1526] border border-zinc-200 dark:border-white/10 flex items-start gap-4 shadow-sm dark:shadow-none">
                <div className="p-3 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold font-urbanist">
                    E-mail Comercial
                  </div>
                  <a
                    href="mailto:comercial@pmtlog.com"
                    className="text-base font-semibold text-zinc-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-urbanist mt-0.5 block"
                  >
                    comercial@pmtlog.com
                  </a>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Propostas comerciais e editais técnicos
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0E1526] border border-zinc-200 dark:border-white/10 flex items-start gap-4 shadow-sm dark:shadow-none">
                <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold font-urbanist">
                    Canal WhatsApp
                  </div>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors font-urbanist mt-0.5 block"
                  >
                    Falar com Engenheiro de Vendas
                  </a>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Atendimento imediato
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0E1526] border border-zinc-200 dark:border-white/10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white font-urbanist">
                    Solicitação Encaminhada!
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                    Redirecionando você para o atendimento técnico via WhatsApp com todos os dados preenchidos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white font-urbanist">
                      Solicite seu Orçamento Rápido
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Preencha os campos abaixo para receber uma estimativa técnica personalizada.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-urbanist block mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:border-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-urbanist block mb-1.5">
                        Empresa / Indústria
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ex: Logística Brasil S.A."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-urbanist block mb-1.5">
                        E-mail de Contato *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu.email@empresa.com.br"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:border-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-urbanist block mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(19) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-urbanist block mb-1.5">
                        Cidade e Estado da Instalação
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Ex: Campinas / SP"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:border-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-urbanist block mb-1.5">
                        Estrutura ou Serviço de Interesse
                      </label>
                      <select
                        value={formData.system}
                        onChange={(e) => setFormData({ ...formData, system: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#090E1A] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white text-sm focus:border-sky-500 focus:outline-none"
                      >
                        <option value="Porta Paletes">Porta Paletes Convencional</option>
                        <option value="Drive-in">Drive-in / Drive-through</option>
                        <option value="Mezanino">Mezanino / Piso Elevado</option>
                        <option value="Mini Porta Paletes">Mini Porta Paletes (Picking)</option>
                        <option value="Inspeção Técnica">Inspeção Técnica NBR 15524</option>
                        <option value="Remanejamento">Remanejamento de Estruturas</option>
                        <option value="Adequações Industriais">Adequações Industriais & Proteções</option>
                        <option value="Consultoria Logística">Consultoria & Layout 2D</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-urbanist block mb-1.5">
                      Detalhes Adicionais (Pé-direito, Área em m², Carga estimada)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Descreva o tamanho do galpão, tipo de mercadoria ou qualquer necessidade específica..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:border-sky-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm uppercase tracking-wider font-urbanist shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Enviar Solicitação de Orçamento</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
