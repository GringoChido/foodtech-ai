interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => (
  <span
    className={`inline-block rounded-full bg-sage/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sage ${className}`}
  >
    {children}
  </span>
);
