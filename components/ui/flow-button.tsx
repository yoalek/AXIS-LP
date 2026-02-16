'use client';
import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from "class-variance-authority";

const flowButtonVariants = cva(
    "group relative flex items-center justify-center gap-1 overflow-hidden rounded-full border-[1.5px] border-[#333333]/40 dark:border-white/20 bg-transparent font-semibold text-[#111111] dark:text-white cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white hover:rounded-[12px] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.95]",
    {
        variants: {
            size: {
                default: "px-8 py-3 text-sm",
                sm: "px-6 py-2 text-xs",
                icon: "h-10 w-10 px-0",
            },
            variant: {
                default: "",
                outline: "border-2",
                ghost: "border-transparent",
            },
        },
        defaultVariants: {
            size: "default",
            variant: "default",
        },
    }
);

export interface FlowButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof flowButtonVariants> {
    text?: string;
    className?: string; // Explicitly add className to resolve potential type conflicts
    onClick?: () => void; // Explicitly add onClick just in case
}

export function FlowButton({ text = "Modern Button", className, size, variant, ...props }: FlowButtonProps) {
    return (
        <button
            className={cn(flowButtonVariants({ size, variant, className }))}
            {...props}
        >
            {/* Left arrow (arr-2) */}
            <ArrowRight
                className="absolute w-4 h-4 left-[-25%] stroke-[#111111] dark:stroke-white fill-none z-[9] group-hover:left-4 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            />

            {/* Text */}
            <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
                {text}
            </span>

            {/* Circle */}
            <span className="bg-[#0369A1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-[50%] opacity-0 group-hover:w-[600px] group-hover:h-[600px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

            {/* Right arrow (arr-1) */}
            <ArrowRight
                className="absolute w-4 h-4 right-4 stroke-[#111111] dark:stroke-white fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            />
        </button>
    );
}
