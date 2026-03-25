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
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-heading text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
