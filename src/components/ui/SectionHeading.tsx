import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  subtitle, 
  align = 'left', 
  className,
  dark = false
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'flex flex-col gap-5',
      {
        'items-start text-left': align === 'left',
        'items-center text-center': align === 'center',
        'items-end text-right': align === 'right',
      },
      className
    )}>
      {eyebrow && (
        <span className={cn(
          "font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase",
          dark ? "text-brand-gold" : "text-brand-gold"
        )}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        "font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15]",
        dark ? "text-white" : "text-brand-charcoal"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "font-sans text-sm md:text-base max-w-xl leading-loose font-light",
          dark ? "text-white/70" : "text-brand-charcoal/70"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
