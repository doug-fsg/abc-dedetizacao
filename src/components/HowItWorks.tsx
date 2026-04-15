import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, Search, SprayCan, ThumbsUp } from "lucide-react";
import { WHATSAPP_ORCAMENTO } from "@/config/contact";
import { useCardHoverLift, useCtaMotion, useRevealMotion } from "@/lib/motion";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Contato",
    desc: "Fale pelo WhatsApp ou telefone e combine o horário que preferir.",
  },
  {
    icon: Search,
    step: "02",
    title: "Vistoria",
    desc: "Avaliamos o local e definimos o método adequado ao serviço contratado.",
  },
  {
    icon: SprayCan,
    step: "03",
    title: "Execução",
    desc: "Realizamos o trabalho com orientações de segurança e uso do ambiente após a visita.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Encerramento",
    desc: "Entregamos o que foi combinado (relatório, laudo, recomendações) conforme o orçamento.",
  },
];

type Step = (typeof steps)[number];

function StepCard({ step, index }: { step: Step; index: number }) {
  const stepMotion = useRevealMotion({ delay: index * 0.07, y: 16 });
  const hover = useCardHoverLift();

  return (
    <motion.article
      className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.07] sm:p-6"
      {...stepMotion}
      {...hover}
    >
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-2xl font-bold tabular-nums text-accent">{step.step}</span>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/15">
            <step.icon className="h-6 w-6 text-accent" aria-hidden />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/65">{step.desc}</p>
      </div>
    </motion.article>
  );
}

const HowItWorks = () => {
  const introMotion = useRevealMotion({ duration: 0.5 });
  const ctaMotion = useRevealMotion({ delay: 0.25, y: 12 });
  const ctaPress = useCtaMotion();

  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 md:py-24 lg:py-28" id="como-funciona">
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/8 blur-3xl"
        aria-hidden
      />
      <div className="container relative">
        <motion.div className="mx-auto mb-12 max-w-2xl text-center md:mb-16" {...introMotion}>
          <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Como funciona
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Do contato ao encerramento, em quatro passos
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            Processo transparente, sem surpresas no orçamento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <StepCard key={s.title} step={s} index={i} />
          ))}
        </div>

        <motion.div className="mt-12 text-center md:mt-14" {...ctaMotion}>
          <motion.a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-semibold text-accent-foreground shadow-md transition-[filter,box-shadow] duration-200 hover:brightness-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:w-auto"
            {...ctaPress}
          >
            Solicitar orçamento agora
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
