import React from "react";
import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { MotionProvider } from "@/components/atoms/MotionProvider";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      title: "Deep tile & grout sealing in corrosive grime",
      desc: "Microscopic cracks harbor toxic bacteria that degrade foundation materials over time."
    },
    {
      title: "Unseen moisture fostering black mold colonies",
      desc: "South Florida humidity accelerates structural rot within hidden drywall cavities."
    },
    {
      title: "Smoke residue acidic etching",
      desc: "Post-fire particulate matter continues to destroy luxury finishes if not chemically neutralized."
    },
    {
      title: "Category 3 water intrusion hazards",
      desc: "Flooding introduces biohazardous materials requiring hospital-grade sanitization protocols."
    },
    {
      title: "HVAC system cross-contamination",
      desc: "Compromised air ducts circulate airborne pathogens throughout your entire property."
    },
    {
      title: "Post-construction hazardous particulates",
      desc: "Invisible silica dust and debris settle into expensive HVAC units and surface finishes."
    }
  ];

  return (
    <SectionWrapper id="problem-section" className="bg-surface relative border-b border-navy-light/5">
      <Container>
        <MotionProvider className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: The Problems */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-navy text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                What Happens When Your Property Is <span className="text-error relative inline-block">Left to the Elements<span className="absolute bottom-1 left-0 w-full h-1.5 bg-error/20 -z-10" /></span>
              </h2>
              <p className="text-ink/75 text-lg leading-relaxed font-medium">
                Time is the enemy of luxury real estate. Minor environmental compromises cascade into catastrophic structural and health hazards without immediate, clinical intervention.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {problems.map((prob, idx) => (
                <div key={idx} className="flex flex-col border-l-4 border-error/80 pl-5 py-1">
                  <div className="flex items-start gap-2.5 mb-2">
                    <AlertTriangle size={18} className="text-error shrink-0 mt-0.5" />
                    <h3 className="text-sm font-bold text-navy leading-tight">{prob.title}</h3>
                  </div>
                  <p className="text-xs text-ink/65 leading-relaxed pl-[28px] font-medium">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The Solution/Pristine Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full rounded-[var(--radius-card)] overflow-hidden shadow-2xl bg-navy-light">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Pristine restored luxury room"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-navy/10 rounded-[var(--radius-card)]" />
            </div>

            {/* Floating Guarantee Badge (shadcn Card style) */}
            <div className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-12 bg-white rounded-xl shadow-xl border border-navy/5 p-5 max-w-[280px] sm:max-w-[320px] z-10">
              <div className="flex items-start gap-4">
                <div className="bg-success/10 p-3 rounded-full shrink-0">
                  <CheckCircle2 size={24} className="text-success" />
                </div>
                <div>
                  <h4 className="text-navy font-bold text-[13px] sm:text-sm uppercase tracking-wider mb-1">
                    All Clear Guarantee
                  </h4>
                  <p className="text-[11px] sm:text-xs text-ink/70 leading-relaxed font-medium">
                    100% molecular decontamination or we re-treat the area at absolutely no cost.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-navy/10 rounded-full blur-2xl -z-10" />
            <div className="absolute top-1/2 -left-16 w-32 h-32 bg-error/10 rounded-full blur-2xl -z-10" />
          </div>

        </MotionProvider>
      </Container>
    </SectionWrapper>
  );
}
