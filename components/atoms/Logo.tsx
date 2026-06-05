import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ variant = 'dark', className = '', iconOnly = false }: LogoProps) {
  const isLight = variant === 'light';
  
  // Dynamic color assignments to ensure readable luxury aesthetics on both light/dark wrappers
  const navyColor = isLight ? '#FFFFFF' : '#1B365D';
  const navyDarkColor = isLight ? '#E0F2FE' : '#162A45';
  const skyColor = '#42C0FB';
  const strokeColor = isLight ? '#162A45' : '#FFFFFF';
  
  // Text classes matching Tailwind theme configuration
  const navyTextClass = isLight ? 'text-white' : 'text-navy';
  const skyTextClass = 'text-sky';
  const subtitleTextClass = isLight ? 'text-sky-light/80' : 'text-navy-light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="logo-root">
      {/* High-fidelity, luxury architectural SVG emblem wrapper */}
      <svg 
        viewBox="0 0 800 500" 
        className="h-11 w-auto flex-shrink-0"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        id="logo-svg-emblem"
      >
        {/* BACKGROUND COMMERCIAL HIGH RISES (Luminous Sky/Cyan Variant) */}
        <path d="M260 380V190H340V380H260Z" fill={`url(#cyan-gradient-${variant})`} opacity="0.85" />
        {/* Left Tower Horizontal Glass Lines */}
        <path d="M270 210H330M270 230H330M270 250H330M270 270H330M270 290H330M270 310H330M270 330H330M270 350H330" stroke={strokeColor} strokeWidth="3" opacity="0.6" />

        <path d="M460 380V190H540V380H460Z" fill={`url(#cyan-gradient-${variant})`} opacity="0.85" />
        {/* Right Tower Horizontal Glass Lines */}
        <path d="M470 210H530M470 230H530M470 250H530M470 270H530M470 290H530M470 310H530M470 330H530M470 350H530" stroke={strokeColor} strokeWidth="3" opacity="0.6" />

        {/* CENTER PRIMARY TOWER (Deep Corporate Navy / Off-White variant) */}
        <path d="M348 385V120H452V385H348Z" fill={`url(#navy-gradient-${variant})`} />
        {/* Vertical Architectural Insets */}
        <path d="M370 120V385M400 120V385M430 120V385" stroke={strokeColor} strokeWidth="5" />

        {/* BROOM CLEANING SWEEPS / SPARKLES (Lateral sweeps) */}
        {/* Left Broom Flare */}
        <path d="M180 340C210 340 240 375 250 410C210 415 185 385 180 340Z" fill={skyColor} />
        <line x1="180" y1="340" x2="250" y2="410" stroke={skyColor} strokeWidth="3" />
        {/* Right Broom Flare */}
        <path d="M620 340C590 340 560 375 550 410C590 415 615 385 620 340Z" fill={skyColor} />
        <line x1="620" y1="340" x2="550" y2="410" stroke={skyColor} strokeWidth="3" />

        {/* Bubbles & Sparkles representing absolute disinfection purity */}
        <circle cx="196" cy="415" r="8" fill={skyColor} opacity="0.7" />
        <circle cx="205" cy="435" r="12" fill={skyColor} opacity="0.5" />
        <circle cx="188" cy="445" r="6" fill={skyColor} opacity="0.6" />
        <circle cx="604" cy="415" r="8" fill={skyColor} opacity="0.7" />
        <circle cx="595" cy="435" r="12" fill={skyColor} opacity="0.5" />
        <circle cx="612" cy="445" r="6" fill={skyColor} opacity="0.6" />
        
        {/* Diamond Sparkle Stars (Detailed residential & commercial shine) */}
        <path d="M220 360Q220 370 230 370Q220 370 220 380Q220 370 210 370Q220 370 220 360Z" fill={skyColor} />
        <path d="M245 330Q245 340 255 340Q245 340 245 350Q245 340 235 340Q245 340 245 330Z" fill={skyColor} />
        <path d="M580 360Q580 370 590 370Q580 370 580 380Q580 370 570 370Q580 370 580 360Z" fill={skyColor} />
        <path d="M555 330Q555 340 565 340Q555 340 555 350Q555 340 545 340Q555 340 555 330Z" fill={skyColor} />

        {/* FOREGROUND RESIDENTIAL GABLE ROOF LINES */}
        {/* Far Left Roof Gable */}
        <polygon points="180,455 255,395 330,455" fill={isLight ? '#FFFFFF' : '#1B365D'} stroke={strokeColor} strokeWidth="4" />
        <rect x="247" y="432" width="16" height="16" fill={strokeColor} />
        <line x1="255" y1="432" x2="255" y2="448" stroke={isLight ? '#111827' : '#1B365D'} strokeWidth="2" />
        <line x1="247" y1="440" x2="263" y2="440" stroke={isLight ? '#111827' : '#1B365D'} strokeWidth="2" />

        {/* Center-Left Overlapping Roof Gable */}
        <polygon points="260,455 365,370 470,455" fill={isLight ? '#DBEAFE' : '#162A45'} stroke={strokeColor} strokeWidth="4" />
        <path d="M365 390Q365 395 370 395Q365 395 365 400Q365 395 360 395Q365 395 365 390Z" fill={strokeColor} />

        {/* Center-Right Overlapping Roof Gable */}
        <polygon points="330,455 435,370 540,455" fill={isLight ? '#FFFFFF' : '#1B365D'} stroke={strokeColor} strokeWidth="4" />
        <path d="M435 390Q435 395 440 395Q435 395 435 400Q435 395 430 395Q435 395 435 390Z" fill={strokeColor} />

        {/* Far Right Roof Gable */}
        <polygon points="470,455 545,395 620,455" fill={isLight ? '#DBEAFE' : '#162A45'} stroke={strokeColor} strokeWidth="4" />
        <rect x="537" y="432" width="16" height="16" fill={strokeColor} />
        <line x1="545" y1="432" x2="545" y2="448" stroke={isLight ? '#111827' : '#162A45'} strokeWidth="2" />
        <line x1="537" y1="440" x2="553" y2="440" stroke={isLight ? '#111827' : '#162A45'} strokeWidth="2" />

        {/* DYNAMIC GRADIENT DEFITIONS based on variant to maximize contrast */}
        <defs>
          <linearGradient id={`navy-gradient-${variant}`} x1="348" y1="120" x2="452" y2="385" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={navyColor} />
            <stop offset="100%" stopColor={navyDarkColor} />
          </linearGradient>
          <linearGradient id={`cyan-gradient-${variant}`} x1="260" y1="190" x2="340" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#42C0FB" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col select-none leading-none">
          <div className="flex items-center gap-1 font-sans text-xl md:text-2xl font-black tracking-tight">
            <span className={navyTextClass}>CRYSTAL</span>
            <span className={skyTextClass}>CLEAR</span>
          </div>
          <span className={`text-[9px] md:text-[10px] font-mono tracking-[0.25em] font-bold mt-1 uppercase ${subtitleTextClass}`}>
            Solutions Group
          </span>
        </div>
      )}
    </div>
  );
}
