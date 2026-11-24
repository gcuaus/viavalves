'use client';

import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  interactive?: boolean;
}

export function Logo({
  variant = 'dark',
  className = '',
}: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      aria-label="Via Valves Home"
    >
      <span
        className={`grid h-9 w-9 place-items-center rounded-xl text-lg font-black ${
          isLight ? 'bg-white text-[#0b1f3a]' : 'bg-[#0b1f3a] text-white'
        }`}
        aria-hidden="true"
      >
        V
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[15px] font-extrabold tracking-[0.16em] ${
            isLight ? 'text-white' : 'text-[#0b1f3a]'
          }`}
        >
          VIA
        </span>
        <span className="mt-1 block text-[10px] font-bold tracking-[0.34em] text-[#f59e0b]">
          VALVES
        </span>
      </span>
    </Link>
  );
}

export default Logo;
