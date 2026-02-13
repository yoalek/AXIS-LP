
"use client"

import * as React from "react"
import { motion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

interface CounterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  start?: number;
  end: number;
  duration?: number;
  className?: string;
  fontSize?: number;
  trigger?: boolean;
}

export const Counter = ({
  start = 0,
  end,
  duration = 2,
  className,
  fontSize = 40,
  trigger = false,
  ...rest
}: CounterProps) => {
  const [value, setValue] = React.useState(start);
  const height = fontSize;

  React.useEffect(() => {
    if (!trigger) return;
    
    if (value < end) {
        const steps = Math.max(end - start, 1);
        const intervalTime = (duration / steps) * 1000;
        
        const timeout = setTimeout(() => {
            setValue((prev) => prev + 1);
        }, Math.max(intervalTime, 10));

        return () => clearTimeout(timeout);
    }
  }, [value, end, start, duration, trigger]);

  return (
    <div
      style={{ fontSize, height }}
      {...rest}
      className={cn(
        "inline-flex overflow-hidden leading-none text-primary font-bold items-center align-middle",
        className
      )}
    >
      {value >= 100000 && <Digit place={100000} value={value} height={height} />}
      {value >= 10000 && <Digit place={10000} value={value} height={height} />}
      {value >= 1000 && <Digit place={1000} value={value} height={height} />}
      {value >= 100 && <Digit place={100} value={value} height={height} />}
      {value >= 10 && <Digit place={10} value={value} height={height} />}
      <Digit place={1} value={value} height={height} />
    </div>
  );
};

function Digit({ place, value, height }: { place: number; value: number; height: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace, {
    stiffness: 100,
    damping: 15,
  });

  React.useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums flex items-center">
      {[...Array(10)].map((_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

function Number({ mv, number, height }: { mv: MotionValue; number: number; height: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = (latest as number) % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center h-full leading-none"
    >
      {number}
    </motion.span>
  );
}
