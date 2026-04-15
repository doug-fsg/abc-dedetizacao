import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Bird,
  Bug,
  Clock,
  Droplets,
  Filter,
  Moon,
  Package,
  Rat,
  Shield,
  SprayCan,
  Warehouse,
  Wheat,
} from "lucide-react";
import heroImage from "../assets/hero-pest-control.jpg";
import { WHATSAPP_ORCAMENTO } from "@/config/contact";
import {
  useAmbientFloat,
  useAmbientGlowPulse,
  useCtaMotion,
  useHeroCardMotion,
  useHeroImageMotion,
} from "@/lib/motion";

const trustPills = [
  { icon: Shield, label: "Normas sanitárias e segurança" },
  { icon: Clock, label: "Agendamento pelo WhatsApp" },
  { icon: Award, label: "Detalhes acordados no orçamento" },
];

/** Marca d’água: ícones pequenos, baixa opacidade, posições espalhadas na coluna de texto */
const wm = "h-6 w-6 opacity-[0.045] sm:h-7 sm:w-7 sm:opacity-[0.055]";

const heroWatermarks: { Icon: typeof Bug; className: string }[] = [
  { Icon: Bug, className: `right-[4%] top-[8%] ${wm}` },
  { Icon: Rat, className: `left-[6%] bottom-[26%] ${wm}` },
  { Icon: Bird, className: `right-[14%] bottom-[16%] ${wm}` },
  { Icon: Droplets, className: `left-[10%] top-[14%] ${wm}` },
  { Icon: Moon, className: `left-[4%] top-[36%] ${wm}` },
  { Icon: Wheat, className: `right-[8%] top-[34%] ${wm}` },
  { Icon: Filter, className: `left-[18%] bottom-[12%] ${wm}` },
  { Icon: Package, className: `right-[6%] bottom-[36%] ${wm}` },
  { Icon: Warehouse, className: `left-[22%] top-[6%] ${wm}` },
  { Icon: SprayCan, className: `left-[14%] bottom-[38%] ${wm}` },
];

function HeroWatermark({
  Icon,
  className,
  index,
}: {
  Icon: (typeof heroWatermarks)[number]["Icon"];
  className: string;
  index: number;
}) {
  const float = useAmbientFloat(index);
  return (
    <motion.span
      className={`pointer-events-none absolute inline-flex text-white ${className}`}
      aria-hidden
      {...float}
    >
      <Icon className="h-full w-full" aria-hidden />
    </motion.span>
  );
}

const Hero = () => {
  const heroCard = useHeroCardMotion();
  const heroImageReveal = useHeroImageMotion();
  const ctaPrimary = useCtaMotion();
  const ctaSecondary = useCtaMotion();
  const glowPulse = useAmbientGlowPulse();

  return (
    <section className="relative bg-gradient-to-br from-secondary/80 via-background to-accent/15 pb-10 pt-24 md:pb-14 md:pt-28">
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          className="grid overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-brand-dark shadow-2xl md:min-h-[560px] md:grid-cols-2 lg:min-h-[600px]"
          {...heroCard}
        >
          {/* Coluna esquerda: texto e CTAs */}
          <div className="relative flex flex-col px-6 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-14">
            {heroWatermarks.map(({ Icon, className }, i) => (
              <HeroWatermark key={i} Icon={Icon} className={className} index={i} />
            ))}
            <motion.div
              className="pointer-events-none absolute -left-24 top-0 h-56 w-56 origin-center rounded-full bg-brand-teal/20 blur-3xl"
              aria-hidden
              {...glowPulse}
            />

            <div className="relative">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-sm font-medium text-white/85 backdrop-blur-sm">
                <Shield className="h-3.5 w-3.5 text-accent" aria-hidden />
                Controle de pragas profissional
              </span>

              <h1 className="mb-8 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.15rem]">
              Proteção{" "}
                <span className="text-accent">eficaz</span>
                {" "}contra pragas.
              </h1>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <motion.a
                  href={WHATSAPP_ORCAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-semibold text-accent-foreground shadow-md transition-[filter,box-shadow] duration-200 hover:brightness-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:w-auto"
                  {...ctaPrimary}
                >
                  Agende seu serviço
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </motion.a>
                <motion.a
                  href="#servicos"
                  className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:w-auto"
                  {...ctaSecondary}
                >
                  Conhecer serviços
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10">
                {trustPills.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna direita: imagem em altura total, sem “caixa” no meio */}
          <motion.div className="relative min-h-[300px] w-full md:min-h-0" {...heroImageReveal}>
            <img
              src={heroImage}
              alt="Profissional em serviço de controle de pragas e higienização com equipamento e EPI"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
              width={1800}
              height={1200}
              loading="eager"
              decoding="async"
            />
            {/* Fusão suave com o bloco escuro à esquerda */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/35 to-transparent md:via-brand-dark/25"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-brand-dark/20 md:from-brand-dark/35" aria-hidden />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
