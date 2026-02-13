
"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    text?: string;
    className?: string;
}

function Text_03({
    text = "Hover me",
    className = "",
}: AnimatedTextProps) {
    return (
        <motion.span
            className={cn(
                "w-full inline-block cursor-pointer transition-all",
                className
            )}
            whileHover="hover"
            initial="initial"
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block whitespace-pre"
                    variants={{
                        initial: {
                            y: 0,
                            scale: 1,
                        },
                        hover: {
                            y: -4,
                            scale: 1.1,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                                delay: index * 0.015, // Velocidade ajustada para textos mais longos
                            },
                        },
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
}

export { Text_03 }
