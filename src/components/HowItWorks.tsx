import { motion } from "framer-motion";
import { ClipboardList, Search, SprayCan, ThumbsUp } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Contato", desc: "Fale conosco pelo WhatsApp ou formulário. Respondemos em minutos." },
  { icon: Search, title: "Vistoria Gratuita", desc: "Nossa equipe avalia o local e identifica as pragas e pontos críticos." },
  { icon: SprayCan, title: "Tratamento", desc: "Aplicamos o melhor método com produtos seguros e eficazes." },
  { icon: ThumbsUp, title: "Garantia", desc: "Você recebe garantia por escrito. Se voltar, tratamos de novo — grátis." },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-muted" id="como-funciona">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-info font-semibold text-sm uppercase tracking-wider">Simples e Rápido</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Como funciona?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Em 4 passos simples, sua casa ou empresa fica livre de pragas.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-info/10 flex items-center justify-center mx-auto mb-4 relative">
                <s.icon className="w-8 h-8 text-info" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cta text-cta-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
