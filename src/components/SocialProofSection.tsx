import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernanda S.",
    role: "Vila Mariana, SP",
    text: "Equipe pontual e educada. Resolveram o problema de cupins em um dia. Serviço com garantia e sem sujeira.",
  },
  {
    name: "Carlos Eduardo R.",
    role: "Síndico – Cond. Parque Real",
    text: "Contratamos para o condomínio inteiro. Resultado impecável, moradores muito satisfeitos. Já renovamos o contrato.",
  },
  {
    name: "Ana Paula M.",
    role: "Restaurante Sabor da Casa",
    text: "Rápidos, usam produtos seguros e emitem todos os laudos. Parceria de confiança há 3 anos.",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 md:py-28" id="depoimentos">
      <div className="container">
        <motion.div
          className="max-w-lg mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2">
            O que dizem nossos clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
