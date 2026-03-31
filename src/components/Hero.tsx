import { motion } from "framer-motion";
import { ArrowRight, Award, Bird, Bug, Clock, Droplets, Rat, Shield } from "lucide-react";
import heroImage from "../assets/hero-pest-control.jpg";
import { WHATSAPP_ORCAMENTO } from "@/config/contact";

const trustPills = [
  { icon: Shield, label: "Normas sanitárias e segurança" },
  { icon: Clock, label: "Agendamento pelo WhatsApp" },
  { icon: Award, label: "Detalhes acordados no orçamento" },
];

const heroWatermarks: { Icon: typeof Bug; className: string }[] = [
  { Icon: Bug, className: "right-[8%] top-[12%] h-16 w-16 opacity-[0.07] sm:h-[4.5rem] sm:w-[4.5rem]" },
  { Icon: Rat, className: "left-[10%] bottom-[32%] h-12 w-12 opacity-[0.07] sm:h-16 sm:w-16" },
  { Icon: Bird, className: "right-[20%] bottom-[18%] h-11 w-11 opacity-[0.06] sm:h-14 sm:w-14" },
  { Icon: Droplets, className: "left-[14%] top-[22%] h-10 w-10 opacity-[0.06] sm:h-14 sm:w-14" },
];

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary/80 via-background to-accent/15 pb-10 pt-24 md:pb-14 md:pt-28">
      <div className="container relative">
        <motion.div
          className="grid overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-brand-dark shadow-2xl md:min-h-[560px] md:grid-cols-2 lg:min-h-[600px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Coluna esquerda — texto e CTAs */}
          <div className="relative flex flex-col px-6 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-14">
            {heroWatermarks.map(({ Icon, className }, i) => (
              <Icon key={i} className={`pointer-events-none absolute text-white ${className}`} aria-hidden />
            ))}
            <div
              className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-brand-teal/20 blur-3xl"
              aria-hidden
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
                <a
                  href={WHATSAPP_ORCAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-semibold text-accent-foreground shadow-md transition-all duration-200 hover:brightness-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:w-auto"
                >
                  Agende seu serviço
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:w-auto"
                >
                  Conhecer serviços
                </a>
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

          {/* Coluna direita — imagem em altura total, sem “caixa” no meio */}
          <motion.div
            className="relative min-h-[300px] w-full md:min-h-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
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
