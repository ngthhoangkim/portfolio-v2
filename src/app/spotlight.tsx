"use client";

import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="mouse-spotlight" aria-hidden="true" />;
}
