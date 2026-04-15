import { useEffect, useState } from "react";

/** Breakpoint alinhado ao `md` do Tailwind (768px): mobile = &lt; 768px */
const QUERY = "(max-width: 767px)";

function getInitialMatches(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * Para decidir entre LP mobile-first (layout dedicado) e LP desktop.
 * Estado inicial vem de matchMedia no cliente (SPA) para evitar flash incorreto.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(getInitialMatches);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
