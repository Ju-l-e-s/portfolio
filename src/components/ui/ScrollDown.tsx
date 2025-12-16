"use client";

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface ScrollDownProps {
  href: string;
}

export function ScrollDown({ href }: ScrollDownProps) {
  return (
    <Link
      href={href}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden cursor-pointer animate-bounce text-muted hover:text-accent-a md:block"
      aria-label="Faire défiler vers le bas"
    >
      <ChevronDown size={32} />
    </Link>
  );
}
