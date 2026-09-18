"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Como escolher entre Porta Paletes Convencional e Sistema Drive-in?",
    answer:
      "A escolha depende do perfil de estoque da sua empresa. O Porta Paletes Convencional oferece 100% de seletividade (acesso direto e imediato a qualquer palete), sendo ideal para operações com grande variedade de SKUs e alto giro. Já o Sistema Drive-in elimina corredores intermediários e compacta a armazenagem, permitindo até 85% de aproveitamento do espaço cúbico, sendo perfeito para indústrias com grandes volumes de um mesmo produto (poucos SKUs).",
    category: "Estruturas",
  },
  {
    question: "A PMT LOG emite Laudo Técnico com ART (CREA) conforme a NBR 15524?",
    answer:
      "Sim, com certeza. Nossos engenheiros periciais realizam inspeções técnicas completas seguindo rigorosamente as diretrizes da ABNT NBR 15524 e normas internacionais EN 15635. O laudo técnico classifica eventuais deformações e não-conformidades por zonas de gravidade (verde, amarela e vermelha) e é emitido acompanhado da respectiva ART (Anotação de Responsabilidade Técnica) junto ao CREA, atendendo plenamente a exigências de auditorias, Ministério do Trabalho e seguradoras.",
    category: "Engenharia & Laudos",
  },
  {
    question: "Como funciona o serviço de remanejamento de armazém sem parar a operação?",
    answer:
      "Executamos o remanejamento em fases planejadas. Nossa equipe desmonta os módulos por setores ou ruas, realiza a revisão técnica dos componentes (identificando montantes ou longarinas danificadas) e efetua a remontagem e fixação com chumbadores químicos/mecânicos e nivelamento a laser no novo layout. Dessa forma, sua expedição continua operando normalmente durante todo o processo.",
    category: "Serviços",
  },
  {
    question: "Qual o ganho real de espaço com a instalação de um Mezanino Industrial?",
    answer:
      "O Mezanino Industrial permite duplicar ou até triplicar a área útil disponível aproveitando o pé-direito vertical do armazém, sem a necessidade de obras civis ou fundações pesadas. A estrutura em aço estrutural suporta cargas de 300 a 1.500 kg/m² e pode ser utilizada tanto para armazenagem e picking manual quanto para áreas administrativas, com total facilidade de desmontagem e ampliação futura.",
    category: "Estruturas",
  },
  {
    question: "Qual é o prazo médio de entrega e montagem das estruturas?",
    answer:
      "Nossos prazos variam conforme a complexidade e volume de posições-palete, mas para projetos padrão a montagem costuma ser concluída em prazos ágeis de 15 a 30 dias úteis. Contamos com equipes próprias de montadores treinados com certificações NR-35 (trabalho em altura) e NR-11 (movimentação de carga), garantindo rapidez com segurança absoluta.",
    category: "Comercial",
  },
  {
    question: "A PMT LOG atende em quais regiões do Brasil?",
    answer:
      "Nossa sede operacional fica estrategicamente em Campinas/SP, no coração do principal polo logístico e rodoviário do estado de São Paulo. Atendemos indústrias, operadores logísticos (3PL) e centros de distribuição em todo o território nacional, com suporte técnico direto de nossa engenharia.",
    category: "Atendimento",
  },
  {
    question: "É possível solicitar um estudo de layout 2D sem custo inicial?",
    answer:
      "Sim! Oferecemos a elaboração do estudo preliminar de layout 2D sem custos nem compromisso. Basta nos fornecer as medidas do galpão (área e pé-direito), o modelo da empilhadeira utilizada e o tipo de palete para que nossos projetistas desenhem a melhor distribuição de corredores e posições-palete.",
    category: "Projetos",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-white dark:bg-[#080C16] border-t border-zinc-200 dark:border-white/10 relative z-20 scroll-mt-20 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider font-urbanist">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire suas Dúvidas
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight font-urbanist">
            Perguntas Frequentes sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-amber-500 dark:from-sky-400 dark:to-amber-400">
              Armazenagem & Engenharia
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Confira as respostas para as principais dúvidas sobre dimensionamento, laudos periciais NBR 15524, remanejamento e montagem de estruturas industriais.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-3xl bg-zinc-50/70 dark:bg-[#0E1526] border border-zinc-200 dark:border-white/10 overflow-hidden transition-all duration-200 shadow-sm dark:shadow-none"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-100/60 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-[11px] font-semibold text-sky-600 dark:text-sky-400 font-urbanist flex-shrink-0 shadow-sm dark:shadow-none">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white font-urbanist">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`p-2 rounded-xl bg-zinc-200/60 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-sky-600 dark:text-sky-400 bg-sky-500/15" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-200/80 dark:border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-50 via-slate-50 to-zinc-50 dark:from-sky-950/40 dark:via-[#0D162B] dark:to-[#0A1020] border border-sky-200 dark:border-sky-500/25 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm dark:shadow-none">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white font-urbanist">
              Não encontrou a resposta para o seu galpão?
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Fale diretamente com nosso setor de engenharia e receba uma análise técnica em minutos.
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider font-urbanist shadow-lg shadow-emerald-500/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
