import { motion } from "framer-motion";
import { Bird, Bug, Droplets, Moon, Rat, Wheat } from "lucide-react";
import { useRevealMotion } from "@/lib/motion";

const categories = [
  { icon: Bug, label: "Insetos" },
  { icon: Rat, label: "Roedores" },
  { icon: Bird, label: "Pombos" },
  { icon: Moon, label: "Morcegos" },
  { icon: Droplets, label: "Água" },
  { icon: Wheat, label: "Grãos & silos" },
];

/**
 * Faixa em bg-primary (teal escuro).
 * Branco em teal #236B51 → 6,8:1 (contraste AA).
 */
const TrustStrip = () => {
  const stripMotion = useRevealMotion({ y: 12, duration: 0.4 });

  return (
    <section className="bg-primary py-3.5 md:py-4" aria-labelledby="trust-strip-heading">
      <div className="container">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs font-medium text-primary-foreground sm:gap-x-3 sm:text-sm md:gap-x-4 lg:flex-nowrap lg:justify-center lg:gap-x-5"
          {...stripMotion}
        >
          <p id="trust-strip-heading" className="shrink-0 text-center leading-snug md:text-left">
            Atuamos onde há risco sanitário ou infestação
          </p>

          <span className="hidden h-4 w-px shrink-0 bg-white/30 sm:block" aria-hidden />

          <ul
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-5 md:gap-x-6"
            aria-label="Tipos de foco atendidos"
          >
            {categories.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 shrink-0 text-white/70 sm:h-4 sm:w-4" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
