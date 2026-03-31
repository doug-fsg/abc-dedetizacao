import { motion } from "framer-motion";
import { ArrowRight, Bug, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_ORCAMENTO } from "@/config/contact";

const CtaSection = () => {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--brand-forest)) 100%)" }}
      id="contato"
    >
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />

      <div className="container relative max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-white/70">
            <Bug className="h-4 w-4 text-accent opacity-90" aria-hidden />
            Entre em contato
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            Viva sem medo da infestação
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Fale com a ABC Dedetizações e receba um orçamento personalizado — sem compromisso, sem burocracia.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-md transition-all duration-200 hover:brightness-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Falar pelo WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
