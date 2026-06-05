"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { MotionProvider } from "@/components/atoms/MotionProvider";
import { SITE_DATA } from "@/constants/site-data";
import { Phone, Star, ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const handleBookingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("booking-wizard-wrapper")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero-section" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-navy-dark">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1697124510483-6de81eb6d493?q=80&w=1170&auto=format&fit=crop"
          alt="Luxury property restoration"
          fill
          priority
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-navy-dark/40 lg:hidden" />
      </div>

      {/* Hero Content */}
      <Container className="relative z-10 pt-24 pb-12 lg:pt-32">
        <MotionProvider delay={0.1} className="max-w-3xl">
          {/* Top Notification Ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-sm">
            <Sparkles size={16} className="text-sky" />
            <span className="text-[11px] sm:text-xs font-mono font-bold text-white tracking-widest uppercase">
              {SITE_DATA.promo.title}: <span className="text-sky">{SITE_DATA.promo.discountText}</span>
            </span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={`fill-sky text-sky ${i === 4 ? 'opacity-90' : ''}`} />
              ))}
            </div>
            <span className="text-sm font-medium text-sky-light/90">
              <span className="text-white font-bold">{SITE_DATA.rating}</span>/5 Google Rating ({SITE_DATA.reviewCount} Reviews)
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white leading-[1.05] mb-6 drop-shadow-sm">
            The Gold Standard in <span className="text-sky block sm:inline">Property Restoration</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-sky-light/80 leading-relaxed font-medium mb-10 max-w-2xl drop-shadow-sm">
            South Florida&apos;s premier commercial and luxury residential environmental cleanup agency. We recover, restore, and protect your investments 24/7.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={handleBookingClick}
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wider min-h-[44px] h-14 px-8 bg-sky hover:bg-sky-light text-navy transition-all shadow-lg shadow-sky/20 active:scale-95 cursor-pointer"
            >
              Book Instant Restoration
              <ArrowRight size={18} className="ml-2" />
            </button>
            <a 
              href={SITE_DATA.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wider min-h-[44px] h-14 px-8 bg-navy/40 border border-sky/30 backdrop-blur-sm text-sky hover:bg-sky/20 transition-all active:scale-95"
            >
              <Phone size={18} className="mr-2" />
              Call {SITE_DATA.phone}
            </a>
          </div>
        </MotionProvider>
      </Container>
    </section>
  );
}
