"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-" + getAnimationClass(direction));
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      ref.current.style.opacity = "0";
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, direction]);

  function getAnimationClass(dir: string) {
    switch (dir) {
      case "left": return "fade-in-left";
      case "right": return "fade-in-right";
      case "scale": return "scale-in";
      default: return "fade-in-up";
    }
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
