import { useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";

/** Ease-out para entrada na viewport (animation-guide.md) */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_REVEAL = { once: true, margin: "0px 0px -10% 0px" } as const;

export function revealTransition(delay = 0, duration = 0.45): Transition {
  return { duration, delay, ease: EASE_OUT };
}

type RevealOpts = {
  delay?: number;
  duration?: number;
  /** Deslocamento vertical inicial (padrão 20) */
  y?: number;
  /** Se definido, anima eixo X em vez de Y */
  x?: number;
};

/**
 * Props para whileInView: respeita prefers-reduced-motion.
 */
export function useRevealMotion(opts: RevealOpts = {}) {
  const { delay = 0, duration = 0.45, y = 20, x } = opts;
  const reduced = useReducedMotion();

  if (reduced) {
    return {
      initial: { opacity: 1, y: 0, x: 0 } as const,
      whileInView: { opacity: 1, y: 0, x: 0 } as const,
      viewport: { once: true as const },
      transition: { duration: 0 },
    };
  }

  const initial =
    x !== undefined ? ({ opacity: 0, x, y: 0 } as const) : ({ opacity: 0, y, x: 0 } as const);

  return {
    initial,
    whileInView: { opacity: 1, y: 0, x: 0 } as const,
    viewport: VIEWPORT_REVEAL,
    transition: { duration, delay, ease: EASE_OUT },
  };
}

export function useHeroCardMotion() {
  const reduced = useReducedMotion();
  if (reduced) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: EASE_OUT },
  };
}

export function useHeroImageMotion() {
  const reduced = useReducedMotion();
  if (reduced) {
    return {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.12, ease: EASE_OUT },
  };
}

/** Hover / tap em CTAs (transform apenas) */
export function useCtaMotion() {
  const reduced = useReducedMotion();
  if (reduced) return {};
  return {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
  };
}

export function useNavbarDrawerMotion() {
  const reduced = useReducedMotion();
  if (reduced) return { transition: { duration: 0 } };
  return { transition: { duration: 0.2, ease: EASE_OUT } };
}

export function useWhatsAppFloatMotion() {
  const reduced = useReducedMotion();
  if (reduced) {
    return {
      initial: { scale: 1, opacity: 1 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0 },
    };
  }
  return {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { delay: 0.8, type: "spring", stiffness: 260, damping: 20 },
  };
}

/** Leve lift em cards interativos */
export function useCardHoverLift() {
  const reduced = useReducedMotion();
  if (reduced) return {};
  return { whileHover: { y: -4 } };
}

/**
 * Flutuação contínua (decoração): só translateY, loop lento.
 * Desligado com prefers-reduced-motion.
 */
export function useAmbientFloat(index: number) {
  const reduced = useReducedMotion();
  if (reduced) return {};
  const yCycle: number[] = [0, -10, 0];
  return {
    animate: { y: yCycle },
    transition: {
      duration: 5.5 + index * 0.35,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.4,
    } as Transition,
  };
}

/** Pulso bem leve no “glow” do hero (só scale) */
export function useAmbientGlowPulse() {
  const reduced = useReducedMotion();
  if (reduced) return {};
  const scaleCycle: number[] = [1, 1.07, 1];
  return {
    animate: { scale: scaleCycle },
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    } as Transition,
  };
}
