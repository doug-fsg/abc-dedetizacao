import { Bug, Rat, TreeDeciduous, Zap, SprayCan } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bug,
    title: "Desinsetização",
    targets: "Baratas, formigas, pulgas, traças",
    description: "Eliminamos insetos com tratamento profundo em todos os ambientes. Resultado visível em 24h.",
  },
  {
    icon: Rat,
    title: "Desratização",
    targets: "Ratos, camundongos, roedores",
    description: "Controle completo com iscas profissionais e vedação de pontos de entrada.",
  },
  {
    icon: TreeDeciduous,
    title: "Descupinização",
    targets: "Cupins de solo e madeira seca",
    description: "Tratamento especializado que protege a estrutura do seu imóvel a longo prazo.",
  },
  {
    icon: Zap,
    title: "Controle de Mosquitos",
    targets: "Aedes aegypti, pernilongos",
    description: "Nebulização e larvicida para eliminar focos e prevenir doenças como dengue e zika.",
  },
  {
    icon: SprayCan,
    title: "Sanitização de Ambientes",
    targets: "Bactérias, vírus, fungos",
    description: "Desinfecção profissional para residências, empresas e condomínios.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted" id="servicos">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-info font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Soluções completas para <span className="text-gradient">cada tipo de praga</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-card rounded-xl p-7 border border-border hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-14 h-14 rounded-xl bg-info/10 flex items-center justify-center mb-5 group-hover:bg-info/20 transition-colors">
                <s.icon className="w-7 h-7 text-info" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{s.title}</h3>
              <span className="text-xs text-secondary font-medium">{s.targets}</span>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
