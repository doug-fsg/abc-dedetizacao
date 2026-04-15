import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/config/contact";
import { useRevealMotion } from "@/lib/motion";

const Footer = () => {
  const colA = useRevealMotion({ y: 16 });
  const colB = useRevealMotion({ delay: 0.06, y: 16 });
  const colC = useRevealMotion({ delay: 0.12, y: 16 });

  return (
    <footer className="bg-brand-dark py-14">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          <motion.div {...colA}>
            <span className="flex flex-wrap items-center gap-2">
              <img src={logo} alt="ABC Desinfestações" className="h-12 w-auto brightness-0 invert" width={160} height={48} />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Controle de pragas, limpeza e higienização com foco em segurança e transparência no orçamento.
            </p>
          </motion.div>

          <motion.div {...colB}>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/40">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "#servicos", label: "Serviços" },
                { href: "#galeria-contexto", label: "Contexto & pragas" },
                { href: "#sobre", label: "Sobre nós" },
                { href: "#missao", label: "Visão e Missão" },
                { href: "#como-funciona", label: "Como funciona" },
                { href: "#faq", label: "Perguntas frequentes" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="cursor-pointer text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...colC}>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/40">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={PHONE_HREF} className="cursor-pointer text-white/70 hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${EMAIL}`} className="cursor-pointer text-white/70 hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span className="text-white/70">{ADDRESS}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/35">
          © {new Date().getFullYear()} ABC Desinfestações. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
