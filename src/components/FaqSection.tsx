import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Os produtos são seguros para crianças e pets?",
    a: "Sim. Todos os produtos utilizados são aprovados pela ANVISA e seguros para ambientes com crianças e animais de estimação.",
  },
  {
    q: "Quanto tempo dura o efeito?",
    a: "Depende do tipo de praga e método aplicado, mas em geral o efeito dura de 3 a 6 meses. Oferecemos planos de manutenção preventiva.",
  },
  {
    q: "Preciso sair de casa durante o serviço?",
    a: "Na maioria dos casos, não. Nossos métodos permitem o uso normal do ambiente. Quando necessário, orientamos uma saída de 2 a 4 horas.",
  },
  {
    q: "Vocês atendem empresas e condomínios?",
    a: "Sim. Atendemos residências, empresas, restaurantes, condomínios e indústrias. Emitimos laudos e certificados exigidos pela vigilância sanitária.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Todos os serviços possuem garantia por escrito. Se as pragas retornarem no período, refazemos o serviço sem custo adicional.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="faq">
      <div className="container max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary">Dúvidas</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline font-body">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
