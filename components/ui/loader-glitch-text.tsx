"use client";

import React from "react";

export interface LoaderGlitchTextProps {
  text?: string;
  subtext?: string;
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export const LoaderGlitchText: React.FC<LoaderGlitchTextProps> = ({
  text = "BUILDING INTELLIGENT SOLUTIONS",
  subtext = "WITH THE WORLD'S LEADING AI TOOLS",
  intensity = "medium",
  className = "text-5xl font-bold tracking-widest text-foreground",
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-4 select-none">
      {/* Title Glitch */}
      <div className="relative group inline-block">
        <h1
          data-text={text}
          className={`relative z-10 font-bold uppercase tracking-widest text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.98)] ${className}`}
        >
          {text}
        </h1>
        <span
          aria-hidden="true"
          className="absolute inset-0 z-0 font-bold uppercase tracking-widest text-[#00f5ff] opacity-75 pointer-events-none translate-x-[2px] translate-y-[-1px] animate-pulse"
        >
          {text}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 z-0 font-bold uppercase tracking-widest text-[#ff0055] opacity-75 pointer-events-none translate-x-[-2px] translate-y-[1px] animate-pulse"
        >
          {text}
        </span>
      </div>

      {/* Yellow Subtext Glitch */}
      {subtext && (
        <div className="relative mt-4 inline-block">
          <p
            data-text={subtext}
            className="relative z-10 text-2xl md:text-4xl font-extrabold uppercase tracking-widest text-[#c0fe04] drop-shadow-[0_0_20px_rgba(192,254,4,0.8)]"
          >
            {subtext}
          </p>
          <span
            aria-hidden="true"
            className="absolute inset-0 z-0 text-2xl md:text-4xl font-extrabold uppercase tracking-widest text-[#00f5ff] opacity-75 pointer-events-none translate-x-[2px] translate-y-[-1px] animate-pulse"
          >
            {subtext}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 z-0 text-2xl md:text-4xl font-extrabold uppercase tracking-widest text-[#ff0055] opacity-75 pointer-events-none translate-x-[-2px] translate-y-[1px] animate-pulse"
          >
            {subtext}
          </span>
        </div>
      )}
    </div>
  );
};

export default LoaderGlitchText;
