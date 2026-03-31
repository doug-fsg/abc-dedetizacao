import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernanda S.",
    role: "Vila Mariana, SP",
    initials: "MF",
    text: "Equipe pontual e educada. Resolveram o problema de cupins em um dia. Serviço com garantia e sem sujeira.",
  },
  {
    name: "Carlos Eduardo R.",
    role: "Síndico – Cond. Parque Real",
    initials: "CE",
    text: "Contratamos para o condomínio inteiro. Resultado impecável, moradores muito satisfeitos. Já renovamos o contrato.",
  },
  {
    name: "Ana Paula M.",
    role: "Restaurante Sabor da Casa",
    initials: "AP",
    text: "Rápidos, usam produtos seguros e emitem todos os laudos. Parceria de confiança há 3 anos.",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 md:py-28" id="depoimentos">
      <div className="container">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary">Depoimentos</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            O que dizem nossos clientes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Avaliações reais de quem confia na ABC para casa e negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              className="rounded-xl border border-border bg-card p-6 transition-[border-color,box-shadow] duration-200 hover:border-primary/25 hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <Quote className="h-5 w-5 shrink-0 text-border" aria-hidden />
              </div>
              <div className="mb-4 flex gap-0.5" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" aria-hidden />
                ))}
              </div>
              <p className="text-sm italic leading-relaxed text-foreground">&ldquo;{t.text}&rdquo;</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
