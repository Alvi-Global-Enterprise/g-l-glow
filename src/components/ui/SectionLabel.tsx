interface SectionLabelProps {
  label: string;
  className?: string;
  lineClassName?: string;
  dotClassName?: string;
}

export function SectionLabel({
  label,
  className = "",
  lineClassName = "bg-[#FFC475]",
  dotClassName = "bg-[#FFC475]",
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className={`size-2.5 shrink-0 rounded-full ${dotClassName}`} />
      <span className="font-[family-name:var(--font-questrial)] text-lg tracking-[0.07em] text-black/50 md:text-2xl">
        {label}
      </span>
      <span className={`h-0.5 min-w-0 flex-1 ${lineClassName}`} />
    </div>
  );
}
