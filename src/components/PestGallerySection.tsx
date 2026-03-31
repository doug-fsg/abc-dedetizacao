import { motion } from "framer-motion";
import { Bug } from "lucide-react";

/**
 * Galeria de contexto — lembra visitantes do problema (pragas/ambientes)
 * antes de passar para conteúdo institucional. Imagens stock (Unsplash).
 */
const tiles = [
  {
    src: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=900&q=80",
    alt: "Roedor em ambiente interno — exemplo de infestação",
    label: "Roedores",
  },
  {
    src: "https://images.unsplash.com/photo-1628352081506-83ef47b2b80b?auto=format&fit=crop&w=900&q=80",
    alt: "Inseto em superfície — controle de insetos rastejadores",
    label: "Insetos",
  },
  {
    src: "https://images.unsplash.com/photo-1444464666168-49d895b8bcd7?auto=format&fit=crop&w=900&q=80",
    alt: "Pombo em ambiente urbano",
    label: "Aves urbanas",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    alt: "Armazenamento de grãos — profilaxia e expurgo",
    label: "Armazéns & grãos",
  },
];

const PestGallerySection = () => {
  return (
    <section
      className="relative scroll-mt-24 bg-brand-dark py-16 md:py-20"
      id="galeria-contexto"
      aria-labelledby="pest-gallery-heading"
    >
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container relative">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              <Bug className="h-4 w-4" aria-hidden />
              Contexto real
            </span>
            <h2
              id="pest-gallery-heading"
              className="mt-2 max-w-xl text-2xl font-bold tracking-tight text-white md:text-3xl"
            >
              Sabemos o que invade casa, empresa e armazém
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/65 md:text-base">
              Cada ambiente pede método certo — de higienização de água ao controle de aves e grãos.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <motion.figure
              key={tile.label}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 sm:aspect-[3/4]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={450}
                height={600}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-3 pt-12">
                <span className="text-sm font-semibold text-white">{tile.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PestGallerySection;
