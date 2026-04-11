interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: "navy" | "charcoal" | "cream" | "sage";
}

const bgClasses: Record<string, string> = {
  navy: "bg-navy text-cream",
  charcoal: "bg-charcoal text-cream",
  cream: "bg-cream text-navy",
  sage: "bg-sage text-navy",
};

export const SectionWrapper = ({
  children,
  id,
  className = "",
  bg = "navy",
}: SectionWrapperProps) => (
  <section
    id={id}
    className={`py-20 md:py-28 lg:py-32 ${bgClasses[bg]} ${className}`}
  >
    {children}
  </section>
);
