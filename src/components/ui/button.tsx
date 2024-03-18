import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap font-code uppercase tracking-wider rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-color-1",
  {
    variants: {
      variant: {
        default: "text-n-1",
        white: "text-n-8",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  link?: boolean;
  white?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      link = false,
      white = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return link ? (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    ) : (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>

        {ButtonSvg(white)}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

const ButtonSvg = (white: boolean) => (
  <>
    <svg
      className="absolute left-0 top-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
      />
    </svg>
    <svg
      className="absolute left-[1.3125rem] top-0 w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <polygon
          fill="white"
          fillRule="nonzero"
          points="100 0 100 44 0 44 0 0"
        />
      ) : (
        <>
          <polygon
            fill="url(#btn-top)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 42 100 44 0 44 0 42"
          />
          <polygon
            fill="url(#btn-bottom)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
          />
        </>
      )}
    </svg>
    <svg
      className="absolute right-0 top-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
      />
    </svg>
  </>
);
