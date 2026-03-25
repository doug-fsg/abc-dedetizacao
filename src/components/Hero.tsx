import { Button } from "@/components/ui/button";
import { Shield, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-pest-control.jpg";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20dedetização.";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Profissional ABC Dedetização" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cta/20 border border-cta/30 px-4 py-1.5 text-sm font-medium text-cta mb-6">
              <Shield className="w-4 h-4" />
              Atendimento em até 2 horas
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Pragas invadindo{" "}
            <span className="text-cta">sua casa?</span>{" "}
            Nós eliminamos o problema — de vez.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A <strong className="text-primary-foreground">ABC Dedetização</strong> protege sua família e seu patrimônio com tratamentos seguros, rápidos e com garantia. Sem pragas. Sem preocupações.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="cta" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Quero um Orçamento Grátis
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="#servicos">Conheça Nossos Serviços</a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-6 text-primary-foreground/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="flex items-center gap-2">✅ Produtos aprovados pela ANVISA</span>
            <span className="flex items-center gap-2">✅ +5.000 clientes atendidos</span>
            <span className="flex items-center gap-2">✅ Garantia por escrito</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
