import { motion } from "framer-motion";
import { Bug } from "lucide-react";
import { useRevealMotion } from "@/lib/motion";

/**
 * Galeria de contexto: lembra visitantes do problema (pragas/ambientes).
 * Visual minimalista (mobile e desktop): sem hover, legenda discreta, tratamento suave na foto.
 */
const tiles = [
  {
    src: "https://images.unsplash.com/photo-1688577985002-049d8059c022?auto=format&fit=crop&w=1060&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Dois roedores próximos a sementes em superfície, exemplo de infestação",
    label: "Roedores",
  },
  {
    src: "https://images.unsplash.com/photo-1567479403609-5711aa5e0ef6?auto=format&fit=crop&w=900&q=80",
    alt: "Barata em superfície, controle de insetos rastejadores",
    label: "Insetos",
  },
  {
    src: "https://images.unsplash.com/photo-1658663072432-b1f76adf30af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Morcego em ambiente natural, controle e afastamento em ambientes urbanos e rurais",
    label: "Morcegos",
  },
  {
    src: "https://images.unsplash.com/photo-1684607961356-1d99dc31aee2?auto=format&fit=crop&w=900&q=80",
    alt: "Fileira de silos metálicos em área rural, grãos e armazenagem",
    label: "Silos & grãos",
  },
];

type Tile = (typeof tiles)[number];

function GalleryTile({ tile, index }: { tile: Tile; index: number }) {
  const tileMotion = useRevealMotion({ delay: index * 0.05, y: 8, duration: 0.4 });

  return (
    <motion.figure className="flex flex-col" {...tileMotion}>
        <div className="overflow-hidden rounded-md border border-white/[0.05] bg-white/[0.02]">
        <img
          src={tile.src}
          alt={tile.alt}
          className="aspect-[4/3] w-full object-cover grayscale-[0.45] opacity-[0.82] contrast-[0.88] sm:aspect-[16/9]"
          loading="lazy"
          decoding="async"
          width={450}
          height={253}
        />
      </div>
      <figcaption className="mt-2 border-t border-white/[0.06] pt-2 sm:mt-3 sm:pt-3">
        <span className="block text-[0.6rem] font-normal uppercase leading-tight tracking-[0.14em] text-white/35 sm:text-[0.65rem] sm:tracking-[0.18em]">
          {tile.label}
        </span>
      </figcaption>
    </motion.figure>
  );
}

const PestGallerySection = () => {
  const headingMotion = useRevealMotion({ y: 12 });

  return (
    <section
      className="relative scroll-mt-24 bg-brand-dark py-14 md:py-20"
      id="galeria-contexto"
      aria-labelledby="pest-gallery-heading"
    >
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div {...headingMotion}>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent/90">
              <Bug className="h-3.5 w-3.5" aria-hidden />
              Contexto
            </span>
            <h2
              id="pest-gallery-heading"
              className="mt-3 max-w-xl text-lg font-medium tracking-tight text-white/95 md:text-2xl"
            >
              Sabemos o que invade casa, empresa e silos
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/45 md:text-[0.9375rem] md:text-white/50">
              Cada ambiente pede método certo, da higienização de água ao controle de morcegos e grãos.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-8">
          {tiles.map((tile, i) => (
            <GalleryTile key={tile.label} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PestGallerySection;
