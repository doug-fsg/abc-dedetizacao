import { Shield, Clock, Leaf, Award, CheckCircle, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Respondemos em até 2 horas e agendamos no mesmo dia. Emergências? Atendemos imediatamente.",
  },
  {
    icon: Shield,
    title: "Garantia por Escrito",
    description: "Se as pragas voltarem dentro do período de garantia, voltamos sem custo adicional.",
  },
  {
    icon: Leaf,
    title: "Produtos Seguros",
    description: "Todos os produtos são aprovados pela ANVISA. Seguros para crianças, pets e o meio ambiente.",
  },
  {
    icon: Award,
    title: "Equipe Certificada",
    description: "Técnicos treinados e certificados com mais de 10 anos de experiência no controle de pragas.",
  },
  {
    icon: CheckCircle,
    title: "Sem Sujeira, Sem Cheiro",
    description: "Métodos modernos que não deixam resíduos. Você pode usar o ambiente logo após o serviço.",
  },
  {
    icon: HeartHandshake,
    title: "Orçamento Transparente",
    description: "Preço justo, sem surpresas. Você sabe exatamente o que está pagando antes de fechar.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="beneficios">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Por que a ABC Dedetização?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Mais do que dedetizar: <span className="text-gradient">proteger quem você ama.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="group bg-card rounded-xl p-7 border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-lg bg-success-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <b.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
