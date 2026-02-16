import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-[#0369A1] text-white hover:bg-[#0369A1]/90 shadow-lg shadow-[#0369A1]/20 hover:shadow-xl hover:shadow-[#0369A1]/30 hover:-translate-y-0.5 transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg shadow-destructive/20 hover:shadow-xl hover:shadow-destructive/30 hover:-translate-y-0.5 transition-all duration-300",
        outline:
          "border border-input bg-background hover:bg-[#0369A1] hover:text-white hover:border-[#0369A1] transition-colors duration-300",
        secondary:
          "bg-transparent border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0369A1]/10 hover:text-[#0369A1] hover:-translate-y-0.5 dark:border-white dark:text-white dark:hover:bg-white/10",
        ghost: "hover:bg-[#0369A1]/10 hover:text-[#0369A1]",
        link: "text-[#0369A1] underline-offset-4 hover:underline",
        expandIcon:
          "group relative text-primary-foreground bg-[#0369A1] hover:bg-[#0369A1]/90 shadow-lg shadow-[#0369A1]/20 hover:shadow-xl hover:shadow-[#0369A1]/30 transition-all duration-300",
        ringHover:
          "bg-[#0369A1] text-primary-foreground transition-all duration-300 hover:bg-[#0369A1]/90 hover:ring-2 hover:ring-[#0369A1]/90 hover:ring-offset-2 shadow-lg shadow-[#0369A1]/20",
        shine:
          "bg-[#0369A1] text-white hover:bg-[#0369A1]/90 shadow-lg shadow-[#0369A1]/20 hover:shadow-xl hover:shadow-[#0369A1]/30 hover:-translate-y-0.5 transition-all duration-300",
        gooeyRight:
          "bg-[#0369A1] text-white hover:bg-[#0369A1]/90 shadow-lg shadow-[#0369A1]/20 hover:shadow-xl hover:shadow-[#0369A1]/30 hover:-translate-y-0.5 transition-all duration-300",
        gooeyLeft:
          "bg-[#0369A1] text-white hover:bg-[#0369A1]/90 shadow-lg shadow-[#0369A1]/20 hover:shadow-xl hover:shadow-[#0369A1]/30 hover:-translate-y-0.5 transition-all duration-300",
        linkHover1:
          "relative after:absolute after:bg-[#0369A1] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",
        linkHover2:
          "relative after:absolute after:bg-[#0369A1] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define ButtonProps as a type intersection to ensure variant and size are correctly inferred.
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    Icon?: React.ElementType;
    iconPlacement?: "left" | "right";
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      Icon,
      iconPlacement,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "group")}
        ref={ref}
        {...props}
      >
        {Icon && iconPlacement === "left" && (
          <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:pr-2 group-hover:opacity-100 flex items-center justify-center">
            <Icon size={18} />
          </div>
        )}
        <Slottable>{props.children}</Slottable>
        {Icon && iconPlacement === "right" && (
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:pl-2 group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center">
            <Icon size={18} />
          </div>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };