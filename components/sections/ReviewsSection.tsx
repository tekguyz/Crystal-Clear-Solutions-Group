import React from "react";
import { Container } from "@/components/atoms/Container";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { Star, ShieldCheck } from "lucide-react";
import { SITE_DATA } from "@/constants/site-data";

export function ReviewsSection() {
  const reviews = [
    { name: "Stam Ehad", text: "Incredible response time! Crystal Clear arrived within 45 minutes of my emergency water leak call. They stopped the damage immediately and dried out the entire floor flawlessly." },
    { name: "Hila Koren", text: "Highly professional team. The mold remediation was thorough, and their clean-up left absolutely zero debris. My luxury home smells completely fresh again. Worth every penny." },
    { name: "Noa Baruk", text: "The definitive standard for deep cleaning in South Florida. We used them for a massive post-construction property and their attention to detail on the tile and grout was simply unmatched." }
  ];

  return (
    <SectionWrapper id="reviews-section" className="bg-surface relative border-b border-navy-light/5">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-navy uppercase mb-4">
            Validated <span className="text-sky">Excellence</span>
          </h2>
          <p className="text-ink/80 font-medium text-[15px] leading-relaxed">
            Join dozens of satisfied luxury property owners who trust {SITE_DATA.shortName} with their most critical environmental restorations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-[var(--radius-card)] border border-navy/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-sky text-sky group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${j * 50}ms` }} />
                ))}
              </div>
              <p className="text-ink/75 text-[15px] leading-relaxed mb-8 flex-1 italic font-medium">
                &quot;{rev.text}&quot;
              </p>
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-navy/5">
                <span className="font-bold text-navy text-sm uppercase tracking-wider">{rev.name}</span>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-success/10 rounded-md">
                  <ShieldCheck size={14} className="text-success" />
                  <span className="text-[10px] font-bold text-success uppercase tracking-widest">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href={SITE_DATA.googleBusinessUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-sky transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-sky pb-1"
          >
            Read All {SITE_DATA.reviewCount} Google Reviews &rarr;
          </a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
