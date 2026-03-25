import { motion } from "framer-motion";
import { Bug, Rat, TreeDeciduous, Zap, SprayCan, Shield } from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "Desinsetização",
    description: "Controle de baratas, formigas, pulgas e traças com métodos seguros e eficazes.",
    color: "bg-secondary text-primary",
  },
  {
    icon: Rat,
    title: "Desratização",
    description: "Eliminação e prevenção de ratos e roedores com iscas profissionais.",
    color: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: TreeDeciduous,
    title: "Descupinização",
    description: "Tratamento especializado contra cupins de solo e madeira seca.",
    color: "bg-secondary text-primary",
  },
  {
    icon: Zap,
    title: "Controle de Mosquitos",
    description: "Nebulização e larvicida para prevenção de dengue, zika e chikungunya.",
    color: "bg-brand-yellow/15 text-accent-foreground",
  },
  {
    icon: SprayCan,
    title: "Sanitização",
    description: "Desinfecção profissional de ambientes contra bactérias, vírus e fungos.",
    color: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: Shield,
    title: "Controle Preventivo",
    description: "Planos de manutenção periódica para manter seu espaço sempre protegido.",
    color: "bg-secondary text-primary",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="servicos">
      <div className="container">
        <motion.div
          className="max-w-lg mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 leading-tight">
            Soluções para cada tipo de praga
          </h2>
          <p className="text-muted-foreground mt-4">
            Oferecemos tratamentos completos com produtos aprovados pela ANVISA, seguros para sua família e pets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className={`w-11 h-11 rounded-lg ${s.color} flex items-center justify-center mb-4`}>
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-body">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
