"use client";

import { useEffect, useMemo, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

function scrollToHash() {
  const id = window.location.hash.replace("#", "");
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SnapScrollRoot({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchIsVertical = useRef<boolean | null>(null);

  useEffect(() => {
    // If we land on a URL with a hash (or navigate with hashes),
    // ensure we scroll the snap container rather than the window.
    const handleHashChange = () => {
      requestAnimationFrame(scrollToHash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const getSections = useMemo(
    () => () => {
      const root = ref.current;
      if (!root) return [];
      return Array.from(root.querySelectorAll("section")).filter(
        (el) => (el as HTMLElement).offsetHeight > 0
      ) as HTMLElement[];
    },
    []
  );

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const getClosestIndex = (scrollTop: number) => {
      const sections = getSections();
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      for (let i = 0; i < sections.length; i++) {
        const distance = Math.abs(sections[i].offsetTop - scrollTop);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      }
      return bestIndex;
    };

    const scrollToIndex = (index: number, behavior: ScrollBehavior) => {
      const sections = getSections();
      if (sections.length === 0) return;

      const clampedIndex = Math.max(0, Math.min(index, sections.length - 1));
      const targetTop = sections[clampedIndex]?.offsetTop ?? 0;

      currentIndex.current = clampedIndex;
      isAnimating.current = true;
      root.scrollTo({ top: targetTop, behavior });
      window.setTimeout(() => {
        isAnimating.current = false;
      }, 520);
    };

    currentIndex.current = getClosestIndex(root.scrollTop);

    const onScroll = () => {
      if (isAnimating.current) return;
      currentIndex.current = getClosestIndex(root.scrollTop);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      const touch = event.touches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
      touchIsVertical.current = null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (isAnimating.current) {
        event.preventDefault();
        return;
      }

      const start = touchStart.current;
      if (!start) return;
      const touch = event.touches[0];
      const deltaX = Math.abs(touch.clientX - start.x);
      const deltaY = Math.abs(touch.clientY - start.y);

      if (touchIsVertical.current === null) {
        touchIsVertical.current = deltaY >= deltaX;
      }

      if (touchIsVertical.current) {
        event.preventDefault();
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStart.current;
      const wasVertical = touchIsVertical.current;
      touchStart.current = null;
      touchIsVertical.current = null;

      if (!start || !wasVertical) return;
      if (isAnimating.current) return;

      const touch = event.changedTouches[0];
      const delta = start.y - touch.clientY;
      const threshold = 35;

      if (delta > threshold) {
        scrollToIndex(currentIndex.current + 1, "smooth");
      } else if (delta < -threshold) {
        scrollToIndex(currentIndex.current - 1, "smooth");
      } else {
        scrollToIndex(currentIndex.current, "smooth");
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (isAnimating.current) {
        event.preventDefault();
        return;
      }

      // Ignore trackpad micro-scroll to avoid accidental section changes.
      if (Math.abs(event.deltaY) < 18) return;

      event.preventDefault();
      scrollToIndex(currentIndex.current + (event.deltaY > 0 ? 1 : -1), "smooth");
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    root.addEventListener("touchstart", onTouchStart, { passive: true });
    root.addEventListener("touchmove", onTouchMove, { passive: false });
    root.addEventListener("touchend", onTouchEnd, { passive: true });
    root.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      root.removeEventListener("scroll", onScroll as EventListener);
      root.removeEventListener("touchstart", onTouchStart as EventListener);
      root.removeEventListener("touchmove", onTouchMove as EventListener);
      root.removeEventListener("touchend", onTouchEnd as EventListener);
      root.removeEventListener("wheel", onWheel as EventListener);
    };
  }, [getSections]);

  return (
    <div
      id="snap-scroll-root"
      ref={ref}
      className="h-[100svh] w-full overflow-hidden overscroll-y-none no-scrollbar md:h-[100dvh]"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {children}
    </div>
  );
}
