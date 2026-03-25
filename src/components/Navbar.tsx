import { useState } from "react";
import { Shield, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20dedetização.";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-cta" />
          <span className="text-lg font-bold text-primary-foreground">ABC Dedetização</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-primary-foreground/70 hover:text-cta transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="cta" size="sm" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4" />
              Orçamento Grátis
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-primary border-t border-primary-foreground/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="container py-4 space-y-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-primary-foreground/70 hover:text-cta py-2">
                  {l.label}
                </a>
              ))}
              <Button variant="cta" size="default" className="w-full" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4" />
                  Orçamento Grátis
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
