import { motion } from "framer-motion";
import { Shield, RotateCcw } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 rounded-full bg-cta/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-cta" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Garantia Total ABC Dedetização
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Se as pragas voltarem durante o período de garantia, nós voltamos e refazemos o serviço <strong className="text-cta">sem nenhum custo adicional</strong>. Essa é a nossa promessa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <RotateCcw className="w-5 h-5 text-cta" />
              <span>Retorno gratuito durante a garantia</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <Shield className="w-5 h-5 text-cta" />
              <span>Garantia documentada por escrito</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
