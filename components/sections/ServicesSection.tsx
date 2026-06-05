"use client";

import React, { useState } from 'react';
import { Container } from "@/components/atoms/Container";
import { MotionProvider } from "@/components/atoms/MotionProvider";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceTabs } from "@/components/services/ServiceTabs";
import { Sofa, Wind, Sparkles, Home, Fan, LayoutGrid, Brush, Droplets } from "lucide-react";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("Upholstery & Furniture");

  const categories = [
    "Upholstery & Furniture",
    "Floor & Carpet",
    "Ventilation & Maintenance",
    "General Property Cleaning"
  ];

  const allServices = {
    "Upholstery & Furniture": [
      { id: "u1", title: "Sofa & Couch Deep Cleaning", desc: "Advanced extraction of pet dander, allergens, and ingrained soil from luxury fabrics.", icon: <Sofa size={26} strokeWidth={1.5} />, promo: true },
      { id: "u2", title: "Mattress Sanitization", desc: "Hospital-grade UV and steam treatment to eliminate dust mites and accumulated biomatter.", icon: <Home size={26} strokeWidth={1.5} />, promo: false },
      { id: "u3", title: "Leather Rejuvenation", desc: "pH-balanced cleaning and conditioning to restore suppleness and prevent cracking.", icon: <Sparkles size={26} strokeWidth={1.5} />, promo: true },
    ],
    "Floor & Carpet": [
      { id: "f1", title: "Hot Water Extraction", desc: "Industrial steam extraction to penetrate carpet fibers and remove heavy traffic stains.", icon: <Droplets size={26} strokeWidth={1.5} />, promo: true },
      { id: "f2", title: "Tile & Grout Restoration", desc: "High-pressure alkaline washing with color-matched sealant application.", icon: <LayoutGrid size={26} strokeWidth={1.5} />, promo: false },
      { id: "f3", title: "Hardwood Polish & Buff", desc: "Non-abrasive surface cleaning preserving original wood finish while extracting deep dirt.", icon: <Brush size={26} strokeWidth={1.5} />, promo: false },
    ],
    "Ventilation & Maintenance": [
      { id: "v1", title: "HVAC Duct Sweeping", desc: "Negative air pressure cleaning to remove circulating dust and respiratory irritants.", icon: <Fan size={26} strokeWidth={1.5} />, promo: true },
      { id: "v2", title: "Dryer Vent Clearing", desc: "Fire-hazard prevention via complete lint extraction extending appliance lifespan.", icon: <Wind size={26} strokeWidth={1.5} />, promo: false },
    ],
    "General Property Cleaning": [
      { id: "g1", title: "Post-Construction Clean", desc: "Removal of fine silica dust and localized debris following major renovations.", icon: <Sparkles size={26} strokeWidth={1.5} />, promo: false },
      { id: "g2", title: "Routine Janitorial", desc: "Contracted commercial maintenance ensuring pristine daily environmental conditions.", icon: <Home size={26} strokeWidth={1.5} />, promo: true },
    ]
  };

  const activeServices = allServices[activeCategory as keyof typeof allServices] || [];

  return (
    <SectionWrapper id="services-section" className="bg-surface/50 relative border-b border-navy-light/5">
      <Container>
        <MotionProvider delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-navy uppercase mb-3">
              Precision <span className="text-sky">Capabilities</span>
            </h2>
            <p className="text-ink/80 font-medium text-[15px] leading-relaxed">
              Explore our comprehensive suite of industrial-grade restoration and deep cleaning capabilities, deployed by certified technicians.
            </p>
          </div>
        </MotionProvider>

        {/* Sticky Tabs Navigation */}
        <div className="sticky top-[68px] sm:top-[76px] z-30 bg-surface/95 backdrop-blur-md pt-2 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 lg:mb-8 border-b border-navy/5">
          <ServiceTabs 
            categories={categories} 
            activeCategory={activeCategory} 
            onSelect={setActiveCategory} 
          />
        </div>

        {/* Dynamic Matrix Render Grid */}
        <MotionProvider delay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[320px]">
          {activeServices.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.desc}
              icon={service.icon}
              hasPromo={service.promo}
            />
          ))}
        </MotionProvider>
      </Container>
    </SectionWrapper>
  );
}
