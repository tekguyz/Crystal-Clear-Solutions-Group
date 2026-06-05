import React from 'react';

export function StepContact({ register, errors }: any) {
  return (
    <div id="step-contact" className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h3 className="text-xl font-bold text-navy mb-4">Where should we reach you?</h3>
      
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">Full Name</label>
        <input 
          type="text"
          autoComplete="name"
          {...register("name")}
          placeholder="John Doe"
          className={`w-full min-h-[44px] p-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky/50 text-sm transition-all bg-surface ${
            errors?.name ? "border-error focus:border-error" : "border-navy/10 focus:border-sky/50"
          }`}
        />
        {errors?.name && <p className="text-error text-xs font-medium mt-1.5">{errors.name.message as string}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Email Address</label>
          <input 
            type="email"
            inputMode="email"
            autoComplete="email"
            {...register("email")}
            placeholder="john@example.com"
            className={`w-full min-h-[44px] p-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky/50 text-sm transition-all bg-surface ${
              errors?.email ? "border-error focus:border-error" : "border-navy/10 focus:border-sky/50"
            }`}
          />
          {errors?.email && <p className="text-error text-xs font-medium mt-1.5">{errors.email.message as string}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Phone Number</label>
          <input 
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            {...register("phone")}
            placeholder="(305) 555-0123"
            className={`w-full min-h-[44px] p-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky/50 text-sm transition-all bg-surface ${
              errors?.phone ? "border-error focus:border-error" : "border-navy/10 focus:border-sky/50"
            }`}
          />
          {errors?.phone && <p className="text-error text-xs font-medium mt-1.5">{errors.phone.message as string}</p>}
        </div>
      </div>
    </div>
  );
}
