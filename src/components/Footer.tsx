import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import logoDark from "../assets/logo_dark.png";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/config/contact";
import { useRevealMotion } from "@/lib/motion";

const Footer = () => {
  const colA = useRevealMotion({ y: 16 });
  const colB = useRevealMotion({ delay: 0.06, y: 16 });
  const colC = useRevealMotion({ delay: 0.12, y: 16 });

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#galeria-contexto", label: "Contexto & pragas" },
    { href: "#sobre", label: "Sobre nós" },
    { href: "#missao", label: "Visão e Missão" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#faq", label: "Perguntas frequentes" },
  ];

  return (
    <footer className="bg-brand-dark py-10 md:py-14">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">

          <motion.div {...colA}>
            <span className="flex flex-wrap items-center gap-2">
              <img
                src={logoDark}
                alt="ABC Desinfestações"
                className="h-9 w-auto md:h-12"
                width={160}
                height={48}
              />
            </span>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-white/45 md:mt-4 md:max-w-xs md:text-sm md:text-white/60">
              Controle de pragas, limpeza e higienização com foco em segurança e transparência no orçamento.
            </p>
          </motion.div>

          <motion.div {...colB} className="border-t border-white/[0.06] pt-6 md:border-0 md:pt-0">
            <h4 className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/30 md:mb-5 md:text-sm md:font-semibold md:tracking-widest md:text-white/40">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1 md:block md:space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="flex min-h-9 cursor-pointer items-center py-0.5 text-xs text-white/55 transition-colors duration-200 hover:text-white md:min-h-10 md:py-0 md:text-sm md:text-white/70"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...colC} className="border-t border-white/[0.06] pt-6 md:border-0 md:pt-0">
            <h4 className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/30 md:mb-5 md:text-sm md:font-semibold md:tracking-widest md:text-white/40">
              Contato
            </h4>
            <ul className="space-y-2.5 text-xs md:space-y-3 md:text-sm">
              <li className="flex items-start gap-2.5 sm:items-center md:gap-3">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/35 md:mt-0 md:h-4 md:w-4 md:text-accent" aria-hidden />
                <a
                  href={PHONE_HREF}
                  className="min-h-9 cursor-pointer break-all text-white/55 hover:text-white sm:break-normal md:min-h-10 md:text-white/70"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5 sm:items-center md:gap-3">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/35 md:mt-0 md:h-4 md:w-4 md:text-accent" aria-hidden />
                <a
                  href={`mailto:${EMAIL}`}
                  className="min-h-9 cursor-pointer break-all text-white/55 hover:text-white sm:break-normal md:min-h-10 md:text-white/70"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5 md:gap-3">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/35 md:h-4 md:w-4 md:text-accent" aria-hidden />
                <span className="text-white/55 md:text-white/70">{ADDRESS}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-5 text-center text-[0.65rem] leading-snug text-white/30 md:mt-12 md:border-white/10 md:pt-6 md:text-xs md:text-white/35">
          © {new Date().getFullYear()} ABC Desinfestações. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
