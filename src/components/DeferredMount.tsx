import { lazy, Suspense, useEffect, useMemo, useRef, useState, type ComponentType } from "react";

type DeferredMountProps = {
  load: () => Promise<{ default: ComponentType }>;
  /** Reserva espaço antes do mount para reduzir CLS */
  minHeight?: string;
  rootMargin?: string;
};

/**
 * Monta o chunk só quando o bloco entra (ou está perto) da viewport.
 * Reduz JS inicial e trabalho de parse em seções abaixo da dobra.
 */
export function DeferredMount({
  load,
  minHeight = "1px",
  rootMargin = "280px 0px",
}: DeferredMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const LazyComponent = useMemo(() => lazy(load), [load]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? (
        <Suspense fallback={null}>
          <LazyComponent />
        </Suspense>
      ) : null}
    </div>
  );
}
