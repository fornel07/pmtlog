"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Produtos", href: "#produtos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Simulador", href: "#simulador" },
    { name: "Clientes", href: "#clientes" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#080C16]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/10 shadow-md shadow-zinc-900/5 dark:shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Light/Dark adaptive images */}
          <Link href="/" className="relative flex items-center group">
            <div className="relative h-10 w-44 sm:h-12 sm:w-48">
              <Image
                src="/assets/pmtlog-logo-dark.png"
                alt="PMT LOG - Soluções de Armazenagem"
                fill
                priority
                className="object-contain object-left group-hover:brightness-110 transition-all duration-300 block dark:hidden"
              />
              <Image
                src="/assets/pmtlog-logo-white.png"
                alt="PMT LOG - Soluções de Armazenagem"
                fill
                priority
                className="object-contain object-left group-hover:brightness-110 transition-all duration-300 hidden dark:block"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-400 font-urbanist transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area: Theme Toggle + CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 ml-6 xl:ml-8 pl-6 border-l border-zinc-200 dark:border-white/10">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* WhatsApp CTA */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider font-urbanist transition-all duration-200 shadow-sm hover:shadow-emerald-500/10"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Quote CTA */}
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-semibold uppercase tracking-wider font-urbanist transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:-translate-y-0.5"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions (Theme toggle + Menu toggle) */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-white dark:bg-[#0A0F1D] border border-zinc-200 dark:border-white/10 rounded-2xl space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors font-urbanist"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold font-urbanist"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-500 text-white text-sm font-semibold font-urbanist shadow-lg shadow-sky-500/25"
              >
                <span>Solicitar Orçamento Técnico</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
