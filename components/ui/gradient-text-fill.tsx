"use client";

import React from "react";

export interface GradientTextProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const GradientText: React.FC<GradientTextProps> = ({
  as: Component = "h1",
  className = "",
  children,
}) => {
  return (
    <Component
      className={`bg-gradient-to-r from-[#19ff95] via-[#00f5ff] to-[#c0fe04] bg-clip-text text-transparent filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] ${className}`}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </Component>
  );
};

export default GradientText;
