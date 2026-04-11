import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-sage text-navy font-semibold hover:bg-sage-hover focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
  secondary:
    "bg-navy text-white font-semibold hover:bg-charcoal focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-cream border border-cream/30 hover:border-cream/60 hover:bg-white/5 font-medium",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, as, href, ...props }, ref) => {
    const classes = `inline-flex items-center justify-center rounded-lg transition-colors duration-200 min-h-[44px] min-w-[44px] cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (as === "a" && href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
