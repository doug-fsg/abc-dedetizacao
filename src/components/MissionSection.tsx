import { motion } from "framer-motion";
import { Eye, Rocket, Star } from "lucide-react";
import { useCardHoverLift, useRevealMotion } from "@/lib/motion";

const items = [
  {
    icon: Eye,
    title: "Visão",
    content:
      "Ser a melhor empresa em Controle de Pragas, Limpeza e Higienização.",
  },
  {
    icon: Rocket,
    title: "Missão",
    content:
      "Entregar um serviço com Excelência, comprometido com a saúde e o bem estar de todos, preservando sempre o meio Ambiente.",
  },
  {
    icon: Star,
    title: "Valores",
    content: "Excelência · Qualidade · Transparência · Inovação",
  },
];

/**
 * Gradiente das fotos da empresa: teal escuro para azul teal.
 * Combinação visual idêntica ao material de marketing real.
 */
const cardGradient =
  "linear-gradient(135deg, hsl(195 58% 30%) 0%, hsl(160 46% 24%) 100%)";

type MissionItem = (typeof items)[number];

function MissionCard({ item, index }: { item: MissionItem; index: number }) {
  const cardMotion = useRevealMotion({ delay: index * 0.08, y: 24, duration: 0.5 });
  const hover = useCardHoverLift();

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl p-8"
      style={{ background: cardGradient }}
      {...cardMotion}
      {...hover}
    >
      {/* Círculo decorativo superior direito, como nas fotos */}
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/8"
        aria-hidden
      />
      {/* Círculo decorativo inferior esquerdo */}
      <div
        className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-accent/12"
        aria-hidden
      />

      {/* Ícone */}
      <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20">
        <item.icon className="h-5 w-5 text-accent" aria-hidden />
      </div>

      {/* Título em ouro bold, como nos cartazes */}
      <h3 className="relative mb-4 text-2xl font-bold text-accent">
        {item.title}
      </h3>

      {/* Conteúdo em branco */}
      <p className="relative text-base leading-relaxed text-white/85">
        {item.content}
      </p>
    </motion.div>
  );
}

const MissionSection = () => {
  const headingMotion = useRevealMotion();

  return (
    <section className="py-20 md:py-28" id="missao">
      <div className="container">
        <motion.div className="mb-14 text-center" {...headingMotion}>
          <span className="text-sm font-medium text-primary">Nossa identidade</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            O que nos move
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <MissionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
