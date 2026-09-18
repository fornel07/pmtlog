import React from "react";
import { Hero } from "@/components/sections/Hero";
import { MetricsBanner } from "@/components/sections/MetricsBanner";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StorageCalculator } from "@/components/sections/StorageCalculator";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsBanner />
      <ProductsSection />
      <ServicesSection />
      <StorageCalculator />
      <ClientsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
