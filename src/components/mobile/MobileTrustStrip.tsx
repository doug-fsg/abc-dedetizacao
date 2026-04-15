import { Bird, Bug, Droplets, Moon, Rat, Wheat } from "lucide-react";

const categories = [
  { icon: Bug, label: "Insetos" },
  { icon: Rat, label: "Roedores" },
  { icon: Bird, label: "Pombos" },
  { icon: Moon, label: "Morcegos" },
  { icon: Droplets, label: "Água" },
  { icon: Wheat, label: "Grãos & silos" },
];

/**
 * Faixa mobile: rolagem horizontal com snap (uma mão, sem quebrar layout).
 */
const MobileTrustStrip = () => {
  return (
    <section
      className="border-y border-white/10 bg-primary py-4"
      aria-labelledby="mobile-trust-heading"
    >
      <div className="px-4">
        <p id="mobile-trust-heading" className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
          Onde atuamos
        </p>
        <p className="mb-3 text-center text-sm font-medium text-primary-foreground">
          Risco sanitário, infestação e armazenagem
        </p>
        <div className="-mx-1 overflow-x-auto overscroll-x-contain px-1 pb-1 [scrollbar-width:thin]">
          <ul
            className="flex w-max min-w-full snap-x snap-mandatory justify-start gap-2 sm:justify-center"
            aria-label="Tipos de foco atendidos"
          >
            {categories.map(({ icon: Icon, label }) => (
              <li key={label} className="snap-start">
                <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/12 px-3 py-2.5 text-xs font-medium text-primary-foreground">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-white/80" aria-hidden />
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileTrustStrip;
