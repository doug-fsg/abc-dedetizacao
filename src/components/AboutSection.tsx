import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Produtos aprovados pela ANVISA",
  "Equipe certificada e treinada",
  "Atendimento em até 24 horas",
  "Garantia por escrito em todos os serviços",
  "Sem cheiro e sem sujeira",
  "Laudos e certificados para empresas",
];

const stats = [
  { value: "12", label: "anos de experiência" },
  { value: "5k+", label: "clientes atendidos" },
  { value: "98%", label: "de satisfação" },
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28" id="sobre">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary">Sobre a ABC Dedetização</span>
            <h2 className="text-3xl md:text-4xl text-foreground mt-2 leading-tight">
              Proteção profissional para quem importa
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Há mais de 12 anos no mercado, a ABC Dedetização combina tecnologia e experiência para oferecer o melhor controle de pragas. Trabalhamos com responsabilidade, transparência e foco total na segurança do seu ambiente.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f, i) => (
                <motion.li 
                  key={f} 
                  className="flex items-center gap-3 text-sm text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div 
                key={s.label} 
                className="bg-secondary rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-heading text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
