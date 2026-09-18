"use client";

import React from "react";
import { Award, CheckCircle, PackageCheck, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function MetricsBanner() {
  const icons = [Award, CheckCircle, PackageCheck, MapPin];

  return (
    <section className="relative py-12 bg-white dark:bg-[#0A0F1D] border-y border-zinc-200 dark:border-white/10 relative z-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY_INFO.stats.map((stat, idx) => {
            const Icon = icons[idx] || Award;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/5 hover:border-sky-500/30 transition-all duration-300 group shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight font-urbanist">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200 font-urbanist mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
