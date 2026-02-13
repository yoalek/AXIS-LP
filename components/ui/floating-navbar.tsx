
"use client";
import React from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  // Removida a lógica de scroll para manter o menu permanentemente visível
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
        className={cn(
          "flex max-w-fit fixed top-8 inset-x-0 mx-auto border border-black/[0.05] dark:border-white/[0.1] rounded-full dark:bg-black bg-white/95 backdrop-blur-md shadow-[0px_10px_30px_-10px_rgba(0,0,0,0.1)] z-[5000] pr-2 pl-8 py-2.5 items-center justify-center space-x-6",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-black transition-colors"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-[14px] font-semibold tracking-tight">{navItem.name}</span>
          </a>
        ))}
        
        <button className="border border-neutral-200 dark:border-white/[0.1] text-sm font-bold relative text-black dark:text-white px-7 py-2.5 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all group overflow-hidden">
          <span>Login</span>
          {/* Blue Glow Accent matching the requested image */}
          <span className="absolute inset-x-0 w-3/4 mx-auto -bottom-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] blur-[0.5px] opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-[1px] bg-blue-500 h-[1px] opacity-50 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
