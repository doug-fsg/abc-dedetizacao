import { motion } from "framer-motion";
import { Bird, Bug, Droplets, Filter, Moon, Package, Wheat } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Higienização de Caixas d'Água",
    description: "Higienização e desinfecção completa de caixas d'água residenciais e comerciais, com laudo ao final do serviço.",
    color: "bg-brand-blue/15 text-brand-blue",
  },
  {
    icon: Filter,
    title: "Higienização de Bebedouros",
    description: "Higienização e desinfecção de bebedouros com troca de filtros, garantindo água limpa e segura para consumo.",
    color: "bg-secondary text-primary",
  },
  {
    icon: Bird,
    title: "Afastamento de Pombos",
    description: "Controle e afastamento humanitário de pombos com métodos eficazes e duradouros para ambientes urbanos.",
    color: "bg-accent/15 text-accent-foreground",
  },
  {
    icon: Moon,
    title: "Afastamento de Morcegos",
    description: "Tratamento especializado para afastamento de morcegos de forma segura, respeitando a legislação ambiental.",
    color: "bg-brand-blue/15 text-brand-blue",
  },
  {
    icon: Package,
    title: "Profilaxia em Silos",
    description: "Tratamento preventivo em silos para proteção de grãos armazenados contra pragas e contaminações.",
    color: "bg-secondary text-primary",
  },
  {
    icon: Wheat,
    title: "Expurgo em Grãos",
    description: "Fumigação e expurgo especializado em grãos para eliminação de insetos e pragas em armazéns e estoques.",
    color: "bg-accent/15 text-accent-foreground",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-muted/40 py-20 md:py-28" id="servicos">
      <div className="container">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary">Nossos serviços</span>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Soluções especializadas em higiene e controle
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada serviço é planejado conforme sua necessidade. Laudos, relatórios ou condições comerciais específicas
            combinamos no orçamento.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-primary/70" aria-hidden>
            <Bug className="h-5 w-5" />
            <Bird className="h-5 w-5" />
            <Droplets className="h-5 w-5" />
            <Wheat className="h-5 w-5" />
            <span className="text-xs font-medium text-muted-foreground">Água, aves, armazéns e pragas ocultas</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group rounded-xl border border-border border-t-2 border-t-primary/40 bg-card p-6 shadow-none transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${s.color}`}>
                <s.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground font-body">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
