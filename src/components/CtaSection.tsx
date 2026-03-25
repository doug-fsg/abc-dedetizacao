import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20dedetização.";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-cta blur-3xl -top-48 -right-48" />
        <div className="absolute w-64 h-64 rounded-full bg-info blur-3xl -bottom-32 -left-32" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Não deixe as pragas tomarem conta. Aja agora!
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Fale com a <strong className="text-primary-foreground">ABC Dedetização</strong> e receba um orçamento grátis em minutos. Atendimento rápido, profissional e com garantia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="tel:+5511999999999">
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
