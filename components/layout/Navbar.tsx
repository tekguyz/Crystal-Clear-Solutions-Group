"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/atoms/Logo";
import { Container } from "@/components/atoms/Container";
import { SITE_DATA } from "@/constants/site-data";
import { Phone, Menu, X, ChevronRight, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services-section" },
    { name: "Why Us", href: "#problem-section" },
    { name: "Service Areas", href: "#area-matrix-section" },
    { name: "Reviews", href: "#reviews-section" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookingClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const bookingSection = document.getElementById("booking-wizard-wrapper");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Upper 24/7 Dispatch Utility Bar */}
      <div 
        id="top-emergency-bar" 
        className="w-full bg-navy text-white py-2.5 border-b border-navy-light/20 text-xs font-mono relative z-50 overflow-hidden"
      >
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 tracking-wide text-center sm:text-left">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sky font-semibold uppercase tracking-wider">Emergency Dispatch:</span>
            <span>24/7 Luxury Water, Fire & Mold Restoration Experts</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={SITE_DATA.phoneHref} 
              className="flex items-center gap-1.5 text-sky-light hover:text-white transition-colors font-medium active:scale-95"
              id="top-emergency-phone-link"
            >
              <Phone size={13} className="text-sky animate-bounce" />
              <span>{SITE_DATA.phone}</span>
            </a>
            <span className="hidden md:inline-block text-white/40">|</span>
            <span className="hidden md:flex items-center gap-1 text-white/75">
              <Sparkles size={11} className="text-sky" />
              <span>Licensed & Insured</span>
            </span>
          </div>
        </Container>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-md border-b border-navy/10 py-3 shadow-sm"
            : "bg-surface/50 backdrop-blur-xs border-b border-transparent py-5"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo Identity */}
          <a href="#" className="focus:outline-none" id="nav-logo-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo variant="dark" />
          </a>

          {/* Desktop Links Grid */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-ink/80 hover:text-navy transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4" id="desktop-navbar-ctas">
            <a
              href={SITE_DATA.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-navy bg-sky-light hover:bg-sky/25 border border-sky/30 min-h-[44px] px-3.5 py-2 rounded-lg transition-all active:scale-95"
              id="desktop-phone-call-btn"
            >
              <Phone size={14} className="text-navy" />
              <span>{SITE_DATA.phone}</span>
            </a>
            <button
              onClick={handleBookingClick}
              className="bg-navy hover:bg-navy-light text-white text-sm font-bold min-h-[44px] px-5 py-2 rounded-lg transition-all shadow-md shadow-navy/10 hover:shadow-lg hover:shadow-navy/20 active:scale-95 cursor-pointer"
              id="desktop-quote-nav-btn"
            >
              Book Service
            </button>
          </div>

          {/* Mobile Hamburg Toggle Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={SITE_DATA.phoneHref}
              className="flex items-center justify-center bg-sky-light border border-sky/30 min-h-[44px] min-w-[44px] p-2.5 rounded-lg text-navy active:scale-95"
              aria-label="Call Emergency Dispatch"
              id="mobile-phone-call-tap"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-lg border border-navy/10 hover:bg-navy/5 text-navy transition-all focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              id="mobile-hamburger-toggle"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Animated Full Screen Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy-dark/60 backdrop-blur-xs z-40 lg:hidden"
              id="mobile-menu-backdrop"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden flex flex-col border-l border-navy/10"
              id="mobile-menu-drawer"
            >
              {/* Drawer Top Header section */}
              <div className="p-5 border-b border-navy/5 flex items-center justify-between">
                <Logo variant="dark" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-md hover:bg-navy/5 text-navy/70 border border-navy/5"
                  id="mobile-drawer-close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Special Summer cleaning notification inside the mobile menu */}
              <div className="m-5 p-4 rounded-xl bg-orange-50 border border-orange-200/50 flex gap-3">
                <AlertCircle size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-orange-850 uppercase tracking-wide">
                    {SITE_DATA.promo.title}
                  </h4>
                  <p className="text-[11px] text-orange-750 font-medium mt-0.5">
                    Claim {SITE_DATA.promo.discountText} when booking online today!
                  </p>
                </div>
              </div>

              {/* Drawer Nav Links */}
              <div className="flex-1 overflow-y-auto px-5 py-2 space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted font-bold px-3 py-1">
                  Navigation
                </p>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleLinkClick(e, link.href);
                    }}
                    className="flex items-center justify-between min-h-[44px] px-3 py-3 rounded-lg hover:bg-navy/5 font-sans font-medium text-ink hover:text-navy transition-all group"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} className="text-muted/60 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Drawer Sticky Bottom CTAs */}
              <div className="p-5 border-t border-navy/5 bg-surface space-y-3.5">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase text-muted font-bold">
                    Need Emergency Help?
                  </p>
                  <p className="text-[11px] text-navy/70">
                    Average field response time is under 45 minutes of dispatch.
                  </p>
                </div>
                
                <a
                  href={SITE_DATA.phoneHref}
                  className="flex items-center justify-center gap-2 w-full min-h-[44px] py-3 bg-sky-light text-navy font-bold border border-sky/40 rounded-xl transition-all active:scale-95"
                  id="mobile-drawer-call-btn"
                >
                  <Phone size={16} className="text-navy" />
                  <span>Call {SITE_DATA.phone}</span>
                </a>

                <button
                  onClick={handleBookingClick}
                  className="w-full min-h-[44px] py-3 bg-navy hover:bg-navy-light text-white font-bold rounded-xl transition-all shadow-md cursor-pointer text-center block"
                  id="mobile-drawer-book-btn"
                >
                  Book Instant Restoration
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

