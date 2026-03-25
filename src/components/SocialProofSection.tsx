import { Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "5.000+", label: "Clientes Atendidos" },
  { value: "12", label: "Anos de Experiência" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "2h", label: "Tempo Médio de Resposta" },
];

const testimonials = [
  {
    name: "Maria Fernanda S.",
    role: "Moradora - Vila Mariana, SP",
    text: "Tinha um problema sério com cupins e a ABC Dedetização resolveu em um dia. Equipe educada, pontual e o serviço veio com garantia. Super recomendo!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo R.",
    role: "Síndico - Condomínio Parque Real",
    text: "Contratamos para o condomínio inteiro. Resultado impecável, sem cheiro e sem sujeira. Os moradores ficaram muito satisfeitos. Já renovamos o contrato.",
    rating: 5,
  },
  {
    name: "Ana Paula M.",
    role: "Proprietária - Restaurante Sabor da Casa",
    text: "Para restaurante, dedetização é obrigatória. A ABC é rápida, usa produtos seguros e emite todos os laudos necessários. Parceria de confiança!",
    rating: 5,
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="depoimentos">
      <div className="container">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Depoimentos Reais</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Quem contratou, <span className="text-gradient">recomenda.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card rounded-xl p-7 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-cta text-cta" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-foreground text-sm">{t.name}</div>
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
