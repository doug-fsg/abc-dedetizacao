import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { aboutGalleryImages } from "@/config/aboutGallery";
import { useRevealMotion } from "@/lib/motion";

const features = [
  "Serviços alinhados às normas sanitárias vigentes",
  "Orientação sobre produtos e cuidados após o serviço",
  "Documentação e laudos quando aplicável ao contrato",
  "Transparência no orçamento e no escopo do trabalho",
  "Atendimento residencial, comercial e silos",
  "Contato direto para agendamento e dúvidas",
];

function AboutFeatureRow({ text, index }: { text: string; index: number }) {
  const rowMotion = useRevealMotion({ delay: 0.1 + index * 0.05, x: -10 });

  return (
    <motion.li className="flex items-start gap-3 text-sm text-foreground" {...rowMotion}>
      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
      {text}
    </motion.li>
  );
}

function AboutSideFigure({
  photo,
  index,
}: {
  photo: (typeof aboutGalleryImages)[number];
  index: number;
}) {
  const figMotion = useRevealMotion({ delay: 0.12 + index * 0.06, y: 16 });

  return (
    <motion.figure className="overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-md" {...figMotion}>
      <img
        src={photo.src}
        alt={photo.alt}
        className="aspect-square w-full object-cover sm:aspect-[5/4]"
        loading="lazy"
        decoding="async"
        width={450}
        height={450}
      />
    </motion.figure>
  );
}

const AboutSection = () => {
  const [mainPhoto, ...sidePhotos] = aboutGalleryImages;
  const textCol = useRevealMotion({ duration: 0.5 });
  const galleryCol = useRevealMotion({ duration: 0.55, delay: 0.08, y: 24 });

  return (
    <section className="py-20 md:py-28" id="sobre">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div {...textCol}>
            <span className="text-sm font-medium text-primary">Sobre nós</span>
            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              ABC Desinfestações
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Atuamos em higienização de caixas d&apos;água e bebedouros, afastamento de pombos e morcegos, profilaxia em
              silos e expurgo em grãos. Nosso foco é executar cada serviço com clareza, segurança e respeito ao meio
              ambiente, alinhados à missão e aos valores da empresa.
            </p>

            <ul className="mt-8 max-w-xl space-y-3">
              {features.map((f, i) => (
                <AboutFeatureRow key={f} text={f} index={i} />
              ))}
            </ul>
          </motion.div>

          <motion.div className="grid gap-3 sm:gap-4" {...galleryCol}>
            <figure className="overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-md">
              <img
                src={mainPhoto.src}
                alt={mainPhoto.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
                width={900}
                height={675}
              />
            </figure>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {sidePhotos.map((photo, i) => (
                <AboutSideFigure key={photo.src} photo={photo} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
