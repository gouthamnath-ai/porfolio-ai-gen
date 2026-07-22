"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ImageTextProps {
  text?: string;
  subtext?: string;
  className?: string;
}

export const ImageText: React.FC<ImageTextProps> = ({
  text = "Building Intelligent Solutions",
  subtext = "with the World's Leading AI Tools",
  className = "",
}) => {
  return (
    <div className={`relative flex flex-col items-center justify-center text-center p-4 ${className}`}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-black uppercase tracking-tight text-white text-4xl md:text-7xl drop-shadow-[0_4px_25px_rgba(0,0,0,0.98)]"
      >
        {text}
      </motion.h1>
      {subtext && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-5xl font-black uppercase mt-4 text-[#c0fe04] drop-shadow-[0_4px_20px_rgba(0,0,0,0.98)] drop-shadow-[0_0_25px_rgba(192,254,4,0.85)]"
        >
          {subtext}
        </motion.span>
      )}
    </div>
  );
};

export default ImageText;
