"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollRoot = document.getElementById("snap-scroll-root");

    const toggleVisibility = () => {
      const scrollY = scrollRoot ? scrollRoot.scrollTop : window.pageYOffset;
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const target: HTMLElement | Window = scrollRoot ?? window;
    target.addEventListener('scroll', toggleVisibility as EventListener);

    return () => target.removeEventListener('scroll', toggleVisibility as EventListener);
  }, []);

  const scrollToTop = () => {
    const scrollRoot = document.getElementById("snap-scroll-root");
    if (scrollRoot) {
      scrollRoot.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/80 text-muted backdrop-blur-lg transition-colors hover:bg-surface hover:text-accent-a sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
          aria-label="Retour en haut"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}
