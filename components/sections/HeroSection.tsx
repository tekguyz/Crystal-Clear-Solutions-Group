// components/sections/HeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { MotionProvider } from "@/components/atoms/MotionProvider";
import { SITE_DATA } from "@/constants/site-data";
import { Phone, Star, ArrowRight, ShieldCheck, Clock, Building } from "lucide-react";

export function HeroSection() {
  const handleBookingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("booking-wizard-wrapper")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero-section" 
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-navy-dark pt-20"
    >
      {/* Visual Workspace Matrix: Handles Asymmetric Exposure across Large Screens */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* The Core Image Layer */}
        <Image 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury property estate masterfully restored"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[65%_center]"
          referrerPolicy="no-referrer"
        />
        
        {/* High-End Linear Architectural Gradients */}
        {/* Desktop Mirror Overlay: Completely isolates left text from right focal imagery */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 via-navy/70 to-transparent w-full" />
        
        {/* Mobile Safe Masking: Ensures clear reading contrast across small devices */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy-dark/85 to-navy-dark/95" />
      </div>

      {/* Hero Interactive Workspace Container */}
      <Container className="relative z-10 w-full py-12 sm:py-16 lg:py-24 flex items-center">
        {/* Asymmetric Width Lock: Contains copy strictly within the left 55% on desktop */}
        <div className="w-full lg:max-w-[55%] flex flex-col items-start text-left">
          
          {/* Top Promotional Ribbon Element */}
          <MotionProvider delay={0.05}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy/60 border border-white/10 backdrop-blur-xl mb-6 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-sky animate-pulse" />
              <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.15em] text-sky-light uppercase">
                {SITE_DATA.promo.title}: <span className="text-sky font-black">{SITE_DATA.promo.discountText}</span>
              </span>
            </div>
          </MotionProvider>

          {/* Social Verification Metric Grid */}
          <MotionProvider delay={0.15}>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-0.5 bg-navy-dark/40 px-2 py-1 rounded-md border border-white/5 backdrop-blur-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-sky text-sky" />
                ))}
              </div>
              <div className="h-4 w-px bg-white/20 hidden sm:block" />
              <p className="text-xs sm:text-sm font-sans tracking-wide text-surface/90">
                <span className="text-sky font-extrabold text-base pr-1">{SITE_DATA.rating}</span> 
                Google Rating ({SITE_DATA.reviewCount} Verified Reviews)
              </p>
            </div>
          </MotionProvider>

          {/* Luxury Enterprise Headline Row */}
          <MotionProvider delay={0.25}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tight text-white leading-[1.08] mb-6">
              The Gold Standard <br className="hidden sm:inline" /> in{" "}
              <span className="bg-gradient-to-r from-sky to-sky-light bg-clip-text text-transparent">
              Property Restoration
              </span> & Cleanups
            </h1>
          </MotionProvider>

          {/* Structured Informational Copy */}
          <MotionProvider delay={0.35}>
            <p className="text-base sm:text-lg lg:text-xl text-surface/80 leading-relaxed tracking-wide font-normal mb-8 max-w-xl">
              South Florida&apos;s premier corporate and luxury residential environmental asset cleanup agency. We deploy rapid-response crews to recover, deep clean, and safeguard your investments.
            </p>
          </MotionProvider>

          {/* Action Call endpoints (CTAs) */}
          <MotionProvider delay={0.45} className="w-full">
            <div className="flex flex-col w-full sm:flex-row sm:w-auto items-center gap-4 mb-12">
              <button 
                onClick={handleBookingClick}
                className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold uppercase tracking-wider min-h-[48px] h-14 px-8 bg-sky hover:bg-sky-dark text-navy font-black transition-all shadow-md shadow-sky/10 hover:shadow-sky/20 active:scale-[0.98] cursor-pointer focus-ring"
              >
                Instant Quote Request
                <ArrowRight size={16} className="ml-2 stroke-[2.5]" />
              </button>
              
              <a 
                href={SITE_DATA.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold uppercase tracking-wider min-h-[48px] h-14 px-8 bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all active:scale-[0.98] focus-ring"
              >
                <Phone size={16} className="mr-2 text-sky" />
                Call Dispatch Office
              </a>
            </div>
          </MotionProvider>

          {/* Core Trust Feature Matrix Grid */}
          <MotionProvider delay={0.55} className="w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-navy/50 border border-white/5 text-sky">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">Fully Certified</h4>
                  <p className="text-xs text-muted mt-0.5">Licensed, Bonded & Insured</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-navy/50 border border-white/5 text-sky">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">24/7 Rapid Priority</h4>
                  <p className="text-xs text-muted mt-0.5">Emergency Dispatch Response</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-navy/50 border border-white/5 text-sky">
                  <Building size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">Tri-County Hub</h4>
                  <p className="text-xs text-muted mt-0.5">Commercial & Residential</p>
                </div>
              </div>
            </div>
          </MotionProvider>

        </div>
      </Container>

      {/* Decorative Interactive Scroll Cue (Hidden on Mobile viewports) */}
      <div className="hidden lg:flex flex-col items-center gap-1.5 absolute bottom-6 left-1/2 -translate-x-1/2 select-none z-10 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-bold font-mono">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}