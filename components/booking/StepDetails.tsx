import React from 'react';

export function StepDetails({ watch, setValue, register, errors }: any) {
  const timeframe = watch("timeframe");
  const timeframes = ["Emergency (ASAP)", "Within 24 Hours", "This Week", "Flexible"];

  return (
    <div id="step-details" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div>
        <h3 className="text-xl font-bold text-navy mb-4">How soon do you need service?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {timeframes.map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => setValue("timeframe", tf, { shouldValidate: true })}
              className={`p-3 min-h-[48px] text-sm font-semibold rounded-xl border text-center transition-all focus-ring ${
                timeframe === tf
                ? "border-sky bg-sky-light/20 ring-2 ring-sky/50 text-navy" 
                : "border-navy/10 text-ink/80 hover:border-sky/50 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-sky/30"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
        {errors?.timeframe && (
          <p className="text-error text-xs font-medium mt-2">{errors.timeframe.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Additional Details (Optional)</label>
        <textarea 
          {...register("details")}
          rows={3}
          placeholder="Briefly describe your situation..."
          className="w-full p-4 border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky/50 focus-ring focus:border-sky/50 text-sm placeholder:text-muted transition-all resize-none bg-surface"
        />
      </div>
    </div>
  );
}
