import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-sans tracking-[0.15em] uppercase transition-all duration-300',
          {
            'bg-brand-charcoal text-brand-ivory hover:bg-brand-gold hover:text-white': variant === 'primary',
            'bg-brand-gold text-white hover:bg-brand-charcoal hover:text-brand-ivory': variant === 'secondary',
            'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-ivory': variant === 'outline',
            'text-brand-charcoal hover:text-brand-gold': variant === 'ghost',
            'px-6 py-3 text-xs': size === 'sm',
            'px-10 py-4 text-sm': size === 'md',
            'px-12 py-5 text-sm': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export { Button };
