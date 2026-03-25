import { motion } from "framer-motion";
import { ClipboardList, Search, SprayCan, ThumbsUp } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Contato", desc: "Entre em contato pelo WhatsApp ou formulário." },
  { icon: Search, step: "02", title: "Vistoria", desc: "Avaliamos o local e identificamos o problema." },
  { icon: SprayCan, step: "03", title: "Tratamento", desc: "Aplicamos o método ideal com produtos seguros." },
  { icon: ThumbsUp, step: "04", title: "Garantia", desc: "Você recebe garantia por escrito do serviço." },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="como-funciona">
      <div className="container">
        <motion.div
          className="text-center max-w-lg mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary">Como Funciona</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2">
            Simples e rápido
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-4xl font-heading text-border">{s.step}</span>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mt-3 mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 font-body">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
