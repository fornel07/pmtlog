"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function ScreenLoader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 1.5s loader to ensure WebGL textures & shaders are initialized smoothly
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 400);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070A12]/95 backdrop-blur-2xl transition-opacity duration-400 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center space-y-6">
        {/* Glowing Aura behind logo */}
        <div className="absolute -inset-8 bg-sky-500/20 blur-3xl rounded-full animate-pulse" />

        {/* Logo Image */}
        <div className="relative h-16 w-56 sm:h-20 sm:w-64">
          <Image
            src="/assets/pmtlog-logo-white.png"
            alt="PMT LOG"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
