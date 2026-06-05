import React from 'react';
import { Sofa, Droplets, Fan, Sparkles } from "lucide-react";

export function StepService({ watch, setValue, errors }: any) {
  const category = watch("serviceCategory");

  const services = [
    { id: "Upholstery & Furniture", icon: <Sofa size={24} /> },
    { id: "Floor & Carpet", icon: <Droplets size={24} /> },
    { id: "Ventilation & Maintenance", icon: <Fan size={24} /> },
    { id: "General Property Cleaning", icon: <Sparkles size={24} /> },
  ];

  return (
    <div id="step-service" className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h3 className="text-xl font-bold text-navy mb-4">What do you need help with?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((svc) => (
          <button
            key={svc.id}
            type="button"
            onClick={() => setValue("serviceCategory", svc.id, { shouldValidate: true })}
            className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
              category === svc.id 
                ? "border-sky bg-sky-light/20 ring-2 ring-sky/50" 
                : "border-navy/10 hover:border-sky/50 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-sky/30"
            }`}
          >
            <div className={`${category === svc.id ? "text-sky" : "text-navy/60"}`}>
              {svc.icon}
            </div>
            <span className={`font-semibold text-sm ${category === svc.id ? "text-navy" : "text-ink/80"}`}>{svc.id}</span>
          </button>
        ))}
      </div>
      {errors?.serviceCategory && (
        <p className="text-error text-xs font-medium mt-2">{errors.serviceCategory.message as string}</p>
      )}
    </div>
  );
}
