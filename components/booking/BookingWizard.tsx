"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormData } from "@/lib/validations";
import { Container } from "@/components/atoms/Container";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { StepService } from "./StepService";
import { StepDetails } from "./StepDetails";
import { StepContact } from "./StepContact";
import { Loader2, CheckCircle2 } from "lucide-react";

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    mode: "onTouched",
    defaultValues: {
      serviceCategory: "",
      timeframe: "",
      details: "",
      name: "",
      email: "",
      phone: "",
      website: "",
    },
  });

  const { handleSubmit, trigger, watch, setValue, register, formState: { errors } } = form;

  const nextStep = async (fieldsToValidate: (keyof LeadFormData)[]) => {
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        console.error("Submission failed");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <SectionWrapper id="booking-wizard-wrapper" className="bg-surface relative border-b border-navy-light/5">
        <Container>
           <div className="max-w-2xl mx-auto bg-success/10 border border-success/20 p-12 rounded-2xl text-center shadow-lg">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-success/20 rounded-full mb-6">
                <CheckCircle2 size={40} className="text-success" />
             </div>
             <h2 className="text-3xl font-black text-navy tracking-tight mb-4 uppercase">Request Received</h2>
             <p className="text-ink/80 text-lg font-medium">
               Thank you. Our dispatch team is reviewing your details and will contact you shortly to confirm your service.
             </p>
           </div>
        </Container>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="booking-wizard-wrapper" className="bg-sky-light/20 relative border-b border-navy-light/5">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-navy uppercase mb-3">
              Request a <span className="text-sky">Quote</span>
            </h2>
            <p className="text-ink/80 font-medium text-[15px]">
              Complete the form below to claim your 20% discount and secure an assessment.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-[var(--radius-card)] shadow-xl border border-navy/5">
             <div className="flex justify-between items-center mb-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-navy/5 -translate-y-1/2 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-sky transition-all duration-500 ease-in-out" 
                     style={{ width: `${((step - 1) / 2) * 100}%` }} 
                   />
                </div>
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${step >= num ? 'bg-sky text-white border-2 border-white box-content shadow-sm' : 'bg-surface text-muted border-2 border-navy/10 box-content'}`}>
                    {num}
                  </div>
                ))}
             </div>

             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Honeypot */}
                <div className="hidden">
                  <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" />
                </div>

                <div className={step === 1 ? "block" : "hidden"}>
                   <StepService watch={watch} setValue={setValue} errors={errors} />
                   <div className="mt-8 flex justify-end">
                      <button 
                         type="button" 
                         onClick={() => nextStep(["serviceCategory"])} 
                         className="bg-navy text-white min-h-[44px] px-6 py-2.5 rounded-lg font-bold hover:bg-navy-light transition-all active:scale-95 shadow-md shadow-navy/10 cursor-pointer"
                      >
                         Continue
                      </button>
                   </div>
                </div>

                <div className={step === 2 ? "block" : "hidden"}>
                   <StepDetails watch={watch} setValue={setValue} register={register} errors={errors} />
                   <div className="mt-8 flex justify-between">
                      <button 
                         type="button" 
                         onClick={prevStep}
                         className="text-navy font-bold min-h-[44px] px-6 py-2.5 rounded-lg hover:bg-navy/5 border border-navy/10 transition-all active:scale-95 cursor-pointer"
                      >
                         Back
                      </button>
                      <button 
                         type="button" 
                         onClick={() => nextStep(["timeframe"])} 
                         className="bg-navy text-white min-h-[44px] px-6 py-2.5 rounded-lg font-bold hover:bg-navy-light transition-all active:scale-95 shadow-md shadow-navy/10 cursor-pointer"
                      >
                         Continue
                      </button>
                   </div>
                </div>

                <div className={step === 3 ? "block" : "hidden"}>
                   <StepContact register={register} errors={errors} />
                   <div className="mt-8 flex gap-4">
                      <button 
                         type="button" 
                         onClick={prevStep}
                         className="text-navy font-bold min-h-[44px] px-6 py-2.5 rounded-lg hover:bg-navy/5 border border-navy/10 transition-all active:scale-95 cursor-pointer"
                         disabled={isSubmitting}
                      >
                         Back
                      </button>
                      <button 
                         type="submit" 
                         disabled={isSubmitting}
                         className="flex-1 bg-sky hover:bg-sky-dark min-h-[44px] text-white font-bold px-6 py-2.5 rounded-lg flex items-center justify-center transition-all shadow-md shadow-sky/20 active:scale-95 disabled:opacity-70 cursor-pointer"
                      >
                         {isSubmitting ? (
                           <><Loader2 size={18} className="animate-spin mr-2" /> Submitting...</>
                         ) : (
                           "Submit Request"
                         )}
                      </button>
                   </div>
                </div>
             </form>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
