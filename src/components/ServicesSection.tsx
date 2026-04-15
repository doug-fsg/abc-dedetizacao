import { motion } from "framer-motion";
import { Bird, Bug, Droplets, Filter, Moon, Package, Wheat } from "lucide-react";
import { useCardHoverLift, useRevealMotion } from "@/lib/motion";

const services = [
  {
    icon: Droplets,
    title: "Higienização de Caixas d'Água",
    description:
      "Caixa limpa e desinfetada, na sua casa ou no trabalho. Laudo entra quando combinarmos no orçamento.",
    color: "bg-brand-blue/15 text-brand-blue",
  },
  {
    icon: Filter,
    title: "Higienização de Bebedouros",
    description: "Limpeza caprichada e filtro novo, água boa para quem usa o bebedouro todo dia.",
    color: "bg-secondary text-primary",
  },
  {
    icon: Bird,
    title: "Afastamento de Pombos",
    description: "Menos pombo no telhado, sem crueldade. Método humano e que costuma durar.",
    color: "bg-accent/15 text-accent-foreground",
  },
  {
    icon: Moon,
    title: "Afastamento de Morcegos",
    description: "Resolvemos com segurança para você e para o animal, dentro do que a lei permite.",
    color: "bg-brand-blue/15 text-brand-blue",
  },
  {
    icon: Package,
    title: "Profilaxia em Silos",
    description: "Cuidamos do silo antes da praga chegar, com seu grão mais protegido desde o início.",
    color: "bg-secondary text-primary",
  },
  {
    icon: Wheat,
    title: "Expurgo em Grãos",
    description: "Quando o grão já está com problema no silo ou no estoque, tratamos com o método adequado.",
    color: "bg-accent/15 text-accent-foreground",
  },
];

type ServiceItem = (typeof services)[number];

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const cardMotion = useRevealMotion({ delay: index * 0.06, y: 24 });
  const cardHover = useCardHoverLift();

  return (
    <motion.div
      className="group rounded-xl border border-border border-t-2 border-t-primary/40 bg-card p-6 shadow-none transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-md"
      {...cardMotion}
      {...cardHover}
    >
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${item.color}`}>
        <item.icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mb-2 text-base font-semibold text-foreground font-body">{item.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
    </motion.div>
  );
}

const ServicesSection = () => {
  const headerMotion = useRevealMotion();

  return (
    <section className="bg-muted/40 py-20 md:py-28" id="servicos">
      <div className="container">
        <motion.div className="mb-14 max-w-2xl" {...headerMotion}>
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
            <Moon className="h-5 w-5" />
            <Droplets className="h-5 w-5" />
            <Wheat className="h-5 w-5" />
            <span className="text-xs font-medium text-muted-foreground">Água, morcegos, silos e pragas ocultas</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} item={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
