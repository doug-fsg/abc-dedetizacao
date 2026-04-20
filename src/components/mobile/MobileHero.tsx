import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Shield } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_ORCAMENTO } from "@/config/contact";
import { EASE_OUT } from "@/lib/motion";

/**
 * Hero só para mobile: fluxo vertical, CTAs grandes (zona do polegar),
 * sem imagem pesada — alinhado a mobile-design (touch-first, performance).
 */
const MobileHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-brand-dark pb-10 pt-[calc(5rem+env(safe-area-inset-top,0px))]"
      aria-labelledby="mobile-hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-16 top-24 h-48 w-48 rounded-full bg-brand-teal/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-lg px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90">
            <Shield className="h-3.5 w-3.5 text-accent" aria-hidden />
            ABC Desinfestações
          </span>

          <h1
            id="mobile-hero-heading"
            className="text-balance text-[1.75rem] font-bold leading-[1.12] tracking-tight text-white"
          >
            Proteção <span className="text-accent">eficaz</span> contra pragas
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/75">
            Orçamento pelo WhatsApp. Atendimento em Uruguaiana e região — residencial, comercial e silos.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={WHATSAPP_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3.5 text-base font-bold text-accent-foreground shadow-lg active:scale-[0.98] motion-reduce:active:scale-100"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              Pedir orçamento no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-white/25 bg-white/5 px-4 py-3.5 text-base font-semibold text-white active:bg-white/10"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-sm font-medium text-white/85"
            >
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              Ligar: {PHONE_DISPLAY}
            </a>
          </div>

          <ul className="mt-8 space-y-3 text-sm text-white/70" aria-label="Destaques do atendimento">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              Normas sanitárias e segurança no serviço
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              Transparência no orçamento e no escopo
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              Laudos e relatórios quando combinados
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileHero;
