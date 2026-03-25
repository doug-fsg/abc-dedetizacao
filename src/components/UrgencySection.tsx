import { AlertTriangle, Bug, Rat, TreeDeciduous } from "lucide-react";
import { motion } from "framer-motion";

const pains = [
  {
    icon: Bug,
    title: "Baratas e Formigas",
    description: "Contaminam alimentos, transmitem doenças e se multiplicam rapidamente. Cada dia sem ação, o problema dobra.",
  },
  {
    icon: Rat,
    title: "Ratos e Roedores",
    description: "Roem fios elétricos, espalham leptospirose e causam prejuízos estruturais graves ao seu imóvel.",
  },
  {
    icon: TreeDeciduous,
    title: "Cupins",
    description: "Destroem móveis, portas e estruturas silenciosamente. Quando você percebe, o estrago já é enorme.",
  },
  {
    icon: AlertTriangle,
    title: "Mosquitos e Escorpiões",
    description: "Dengue, zika, chikungunya e acidentes com escorpiões colocam sua família em risco real.",
  },
];

const UrgencySection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cta font-semibold text-sm uppercase tracking-wider">Não espere o problema piorar</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mt-3">
            Pragas não esperam. <span className="text-cta">Você também não deveria.</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Cada hora sem tratamento é uma hora a mais para pragas se reproduzirem, contaminarem e destruírem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <pain.icon className="w-10 h-10 text-cta mb-4" />
              <h3 className="text-lg font-bold text-primary-foreground mb-2">{pain.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
