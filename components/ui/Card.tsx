interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
}

const variantClasses = {
  dark: "bg-charcoal border border-white/10 text-cream shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl",
  light: "bg-white border border-navy/5 text-navy shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl",
};

export const Card = ({ children, className = "", variant = "dark" }: CardProps) => (
  <div className={`rounded-2xl p-6 md:p-8 ${variantClasses[variant]} ${className}`}>
    {children}
  </div>
);
