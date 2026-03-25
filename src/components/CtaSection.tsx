import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28" id="contato">
      <div className="container">
        <motion.div
          className="bg-primary rounded-2xl p-10 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-primary-foreground leading-tight">
            Pronto para um ambiente livre de pragas?
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-md mx-auto">
            Fale com a ABC Dedetização e receba um orçamento personalizado sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Falar pelo WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Ligar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
