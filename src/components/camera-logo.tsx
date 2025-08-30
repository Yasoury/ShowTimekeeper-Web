import { cn } from '@/lib/utils';
import logoImageDark from '@/assets/logo.png';
import logoImageWhite from '@/assets/logo-white.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

export function Logo({ className, size = 'md', variant = 'dark' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  // Use white logo for dark theme (which is our default theme)
  const logoSrc = variant === 'dark' ? logoImageWhite : logoImageDark;

  return (
    <img
      src={logoSrc}
      alt="Show Timekeeper Logo"
      className={cn(
        'object-contain',
        sizeClasses[size],
        className
      )}
    />
  );
}
