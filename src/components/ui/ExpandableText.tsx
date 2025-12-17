"use client";

import * as React from "react";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";

type ExpandableTextProps = {
  children: string;
  maxLines?: number;
  className?: string;
};

export function ExpandableText({
  children,
  maxLines = 3,
  className,
}: ExpandableTextProps) {
  const locale = useLocale();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isTruncated, setIsTruncated] = React.useState(false);
  const textRef = React.useRef<HTMLDivElement | null>(null);

  const labels = React.useMemo(() => {
    const isFr = locale === "fr";
    return {
      more: isFr ? "Voir plus" : "See more",
      less: isFr ? "Voir moins" : "See less",
    };
  }, [locale]);

  const clampStyle = React.useMemo<React.CSSProperties>(
    () => ({
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: maxLines,
      overflow: "hidden",
    }),
    [maxLines],
  );

  React.useLayoutEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const measure = () => {
      if (isExpanded) {
        setIsTruncated(false);
        return;
      }

      const overflowing = element.scrollHeight > element.clientHeight + 1;
      setIsTruncated(overflowing);
    };

    const raf = requestAnimationFrame(measure);
    const observer = new ResizeObserver(() => measure());
    observer.observe(element);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [children, isExpanded, maxLines]);

  return (
    <div className="flex w-full min-h-0 flex-1 flex-col items-start">
      <div
        ref={textRef}
        className={cn(
          "w-full min-h-0",
          isExpanded ? "overflow-auto" : "overflow-hidden",
          className,
        )}
        style={isExpanded ? undefined : clampStyle}
      >
        {children}
      </div>

      {(isTruncated || isExpanded) && (
        <button
          type="button"
          onClick={() => setIsExpanded((previous) => !previous)}
          className="mt-1 text-xs font-medium text-accent-a hover:underline"
        >
          {isExpanded ? labels.less : labels.more}
        </button>
      )}
    </div>
  );
}

