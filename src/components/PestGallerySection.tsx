import { motion } from "framer-motion";
import { Bug } from "lucide-react";
import { useCardHoverLift, useRevealMotion } from "@/lib/motion";

/**
 * Galeria de contexto: lembra visitantes do problema (pragas/ambientes).
 * antes de passar para conteúdo institucional. Imagens stock (Unsplash).
 */
/** URLs alinhadas ao rótulo (Unsplash). IDs conferidos nas páginas das fotos. */
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
  const tileMotion = useRevealMotion({ delay: index * 0.08, y: 20 });
  const hover = useCardHoverLift();

  return (
    <motion.figure
      className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 sm:aspect-[3/4]"
      {...tileMotion}
      {...hover}
    >
      <img
        src={tile.src}
        alt={tile.alt}
        className="h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100"
        loading="lazy"
        decoding="async"
        width={450}
        height={600}
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-3 pt-12">
        <span className="text-sm font-semibold text-white">{tile.label}</span>
      </figcaption>
    </motion.figure>
  );
}

const PestGallerySection = () => {
  const headingMotion = useRevealMotion({ y: 16 });

  return (
    <section
      className="relative scroll-mt-24 bg-brand-dark py-16 md:py-20"
      id="galeria-contexto"
      aria-labelledby="pest-gallery-heading"
    >
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container relative">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div {...headingMotion}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              <Bug className="h-4 w-4" aria-hidden />
              Contexto real
            </span>
            <h2
              id="pest-gallery-heading"
              className="mt-2 max-w-xl text-2xl font-bold tracking-tight text-white md:text-3xl"
            >
              Sabemos o que invade casa, empresa e silos
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/65 md:text-base">
              Cada ambiente pede método certo, da higienização de água ao controle de morcegos e grãos.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <GalleryTile key={tile.label} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PestGallerySection;
