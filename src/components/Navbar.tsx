import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";
import { WHATSAPP_INFO } from "@/config/contact";
import { useNavbarDrawerMotion } from "@/lib/motion";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria-contexto", label: "Pragas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const drawerMotion = useNavbarDrawerMotion();

  return (
    <div className="fixed top-4 left-4 right-4 z-50 flex justify-center px-0 sm:px-2 pointer-events-none">
      <nav
        className="pointer-events-auto w-full max-w-6xl rounded-2xl border border-border bg-background/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
        aria-label="Principal"
      >
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex cursor-pointer items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <img src={logo} alt="ABC Desinfestação" className="h-12 w-auto sm:h-14" width={180} height={56} />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_INFO}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-none transition-opacity duration-200 hover:opacity-90"
            >
              Orçamento grátis
            </a>
          </div>

          <button
            type="button"
            className="cursor-pointer rounded-md p-2 text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              className="overflow-hidden border-t border-border md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              {...drawerMotion}
            >
              <div className="container space-y-1 py-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block cursor-pointer rounded-md py-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                href={WHATSAPP_INFO}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block cursor-pointer rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground transition-opacity duration-200 hover:opacity-90"
                >
                  Orçamento grátis
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
