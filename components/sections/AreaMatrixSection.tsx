import React from "react";
import { Container } from "@/components/atoms/Container";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { MapPin, Navigation } from "lucide-react";
import { SITE_DATA } from "@/constants/site-data";

export function AreaMatrixSection() {
  const { serviceAreas } = SITE_DATA;

  const regions = [
    { id: "broward", title: "Broward County", cities: serviceAreas.broward },
    { id: "palmBeach", title: "Palm Beach County", cities: serviceAreas.palmBeach },
    { id: "miamiDade", title: "Miami-Dade County", cities: serviceAreas.miamiDade },
  ];

  return (
    <SectionWrapper id="area-matrix-section" className="bg-navy text-white relative overflow-hidden">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-sky/20 rounded-2xl mb-6">
            <Navigation size={28} className="text-sky" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase mb-4 drop-shadow-sm">
            South Florida <span className="text-sky">Dispatch Zones</span>
          </h2>
          <p className="text-sky-light/80 font-medium text-[15px] leading-relaxed max-w-xl mx-auto">
            Strategically deployed from our headquarters at <span className="text-white font-semibold">{SITE_DATA.dispatchHeadquarters}</span> to guarantee a clinical response within 45 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {regions.map((region) => (
            <div key={region.id} className="bg-navy-dark rounded-[var(--radius-card)] p-8 border border-sky/10 shadow-xl hover:border-sky/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-sky/10">
                <MapPin size={24} className="text-sky shrink-0" />
                <h3 className="text-lg font-bold tracking-widest uppercase text-white">{region.title}</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-4">
                {region.cities.map((city) => (
                  <li key={city} className="flex items-center gap-3 text-[14px] text-sky-light/80 font-medium hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky/60 shadow-[0_0_8px_rgba(66,192,251,0.6)]" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
