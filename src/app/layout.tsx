import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WarehouseCanvas } from "@/components/3d/WarehouseCanvas";
import { ScreenLoader } from "@/components/ui/ScreenLoader";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "PMT LOG | Soluções de Armazenagem & Estruturas Industriais",
  description:
    "Projetos sob medida para otimizar o seu armazém. Porta Paletes, Drive-in, Mezaninos, Mini Porta Paletes, Inspeção Técnica NBR 15524 e Remanejamento. Sede em Campinas/SP com atendimento nacional.",
  keywords: [
    "porta paletes",
    "drive in",
    "mezanino industrial",
    "mini porta paletes",
    "armazenagem",
    "inspeção nbr 15524",
    "remanejamento de estruturas",
    "campinas",
    "logística",
    "PMT LOG",
  ],
  authors: [{ name: "PMT LOG" }],
  openGraph: {
    title: "PMT LOG | Soluções de Armazenagem & Estruturas Industriais",
    description:
      "Projetos sob medida para otimizar o seu armazém. Sistemas de alta densidade e engenharia intralogística em todo o Brasil.",
    url: "https://www.pmtlog.com",
    siteName: "PMT LOG",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-[#080C16] text-zinc-900 dark:text-white min-h-screen relative antialiased selection:bg-sky-500/30 selection:text-sky-400 transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScrollProvider>
            <ScreenLoader />
            <WarehouseCanvas />
            <Navbar />
            <main className="relative z-20">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
