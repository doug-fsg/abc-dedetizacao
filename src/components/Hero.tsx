import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-pest-control.jpg";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-sm font-medium text-primary bg-secondary px-3 py-1 rounded-full mb-6">
              Controle de Pragas Profissional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-foreground mb-6">
              Ambientes livres de pragas,{" "}
              <span className="text-primary">com segurança.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
              A ABC Dedetização oferece soluções profissionais para residências e empresas. Produtos seguros, equipe certificada e garantia em todos os serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={heroImage}
                alt="Profissional ABC Dedetização realizando serviço"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
            </div>
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-heading text-primary">5.000+</div>
              <div className="text-xs text-muted-foreground">clientes atendidos</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
