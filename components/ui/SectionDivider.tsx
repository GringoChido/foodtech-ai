interface SectionDividerProps {
  fillColor: string;
  position: 'top' | 'bottom';
  className?: string;
}

export const SectionDivider = ({ fillColor, position, className = '' }: SectionDividerProps) => (
  <div className={`w-full overflow-hidden leading-[0] ${className}`}>
    <svg
      className="relative block w-full h-[30px] md:h-[60px]"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {position === 'top' ? (
        <polygon points="0,60 1440,0 1440,60 0,60" fill={fillColor} />
      ) : (
        <polygon points="0,0 1440,0 0,60" fill={fillColor} />
      )}
    </svg>
  </div>
);
