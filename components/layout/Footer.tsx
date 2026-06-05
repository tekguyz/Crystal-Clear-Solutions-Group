"use client";

import React from "react";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";
import { SITE_DATA } from "@/constants/site-data";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  ArrowUp,
  FileText
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      id="enterprise-footer" 
      className="bg-navy-dark text-white border-t border-navy-light/10 relative overflow-hidden"
    >
      {/* Upper Subtle Grid Gridline Accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky via-navy-light to-sky" />

      {/* Primary Footer content Grid */}
      <Container className="pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1: Brand Info & Identity */}
          <div className="space-y-6" id="footer-col-1">
            <Logo variant="light" />
            <p className="text-sm text-sky-light/80 leading-relaxed max-w-sm">
              South Florida&apos;s premier luxury property restoration and advanced environmental cleanup agency. Restoring peace of mind and pristine architectural integrity 24 hours a day, 365 days a year.
            </p>
            <div className="flex items-center gap-3" id="footer-social-links">
              <a 
                href={SITE_DATA.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy rounded-lg hover:bg-sky hover:text-navy transition-all duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={SITE_DATA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy rounded-lg hover:bg-sky hover:text-navy transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-5" id="footer-col-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-sky font-semibold border-b border-navy-light/20 pb-2">
              Deep Navigation
            </h3>
            <ul className="space-y-3 text-sm text-sky-light/75">
              <li>
                <a 
                  href="#services-section" 
                  onClick={(e) => handleLinkClick(e, "#services-section")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight size={14} className="text-sky group-hover:translate-x-1 transition-transform" />
                  <span>Our Restoration Services</span>
                </a>
              </li>
              <li>
                <a 
                  href="#problem-section" 
                  onClick={(e) => handleLinkClick(e, "#problem-section")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight size={14} className="text-sky group-hover:translate-x-1 transition-transform" />
                  <span>Why Choose Crystal Clear</span>
                </a>
              </li>
              <li>
                <a 
                  href="#area-matrix-section" 
                  onClick={(e) => handleLinkClick(e, "#area-matrix-section")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight size={14} className="text-sky group-hover:translate-x-1 transition-transform" />
                  <span>South Florida Coverage Areas</span>
                </a>
              </li>
              <li>
                <a 
                  href="#reviews-section" 
                  onClick={(e) => handleLinkClick(e, "#reviews-section")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight size={14} className="text-sky group-hover:translate-x-1 transition-transform" />
                  <span>Client Success Stories</span>
                </a>
              </li>
              <li>
                <a 
                  href="#booking-wizard-wrapper" 
                  onClick={(e) => handleLinkClick(e, "#booking-wizard-wrapper")}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group font-semibold text-sky"
                >
                  <ChevronRight size={14} className="text-sky group-hover:translate-x-1 transition-transform" />
                  <span>Schedule Online & Claim Discount</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Professional Services Index */}
          <div className="space-y-5" id="footer-col-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-sky font-semibold border-b border-navy-light/20 pb-2">
              Our Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs text-sky-light/70 font-sans">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-sky rounded-full" />
                <span>Water Extraction & Rapid Dry-Out</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-sky rounded-full" />
                <span>Fire, Soot, & Smoke Reconstruction</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-sky rounded-full" />
                <span>Microbial Mold Remediation & Air Purification</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-sky rounded-full" />
                <span>Hurricane & Dynamic Storm Response</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-sky rounded-full" />
                <span>Luxury Commercial Environmental Care</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 bg-sky rounded-full" />
                <span>Premium Post-Construction Deep Cleaning</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Local Dispatch Trust */}
          <div className="space-y-5" id="footer-col-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-sky font-semibold border-b border-navy-light/20 pb-2">
              Dispatch & Contacts
            </h3>
            <ul className="space-y-4 text-sm text-sky-light/80">
              <li className="flex gap-3">
                <MapPin size={18} className="text-sky flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block font-semibold text-xs text-white uppercase tracking-wider">Fort Lauderdale Headquarters:</span>
                  <address className="not-italic text-xs leading-normal">
                    {SITE_DATA.dispatchHeadquarters}
                  </address>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-sky flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block font-semibold text-xs text-white uppercase tracking-wider">Direct Dispatch Line:</span>
                  <a href={SITE_DATA.phoneHref} className="text-sky hover:underline font-semibold block text-base">
                    {SITE_DATA.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-sky flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block font-semibold text-xs text-white uppercase tracking-wider">Email Inquiry Desk:</span>
                  <a href={SITE_DATA.emailHref} className="text-xs hover:underline text-sky-light break-all">
                    {SITE_DATA.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Dynamic Regional Trust Badges */}
        <div className="mt-16 pt-8 border-t border-navy-light/10 flex flex-wrap justify-between items-center gap-6" id="footer-trust-badges">
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-light/80">
              <ShieldCheck size={18} className="text-sky" />
              <span>State Licensed Restorers</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-light/80">
              <Clock size={18} className="text-sky" />
              <span>Average Response Under 45 Mins</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-light/80">
              <FileText size={18} className="text-sky" />
              <span>Full Insurance Direct Billing</span>
            </div>
          </div>
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-2 bg-navy px-4 py-2.5 rounded-lg border border-navy-light/10 text-xs font-mono uppercase tracking-wider hover:bg-sky hover:text-navy transition-all active:scale-95 cursor-pointer shadow-sm"
            id="footer-scroll-top-btn"
          >
            <span>Top of Page</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom copyright and legal disclosures */}
        <div className="mt-12 pt-6 border-t border-navy-light/5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted/80">
          <div>
            <p>© {currentYear} {SITE_DATA.shortName}. All rights reserved.</p>
            <p className="mt-1 text-[11px] text-muted/65">
              Providing expert toxic materials abatement, luxury decontamination, environmental cleanup, and restoration throughout Florida.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>Licensed & Insured</span>
            <span className="text-white/20">|</span>
            <span>IICRC Certified Cleaners</span>
          </div>
        </div>

      </Container>
    </footer>
  );
}

