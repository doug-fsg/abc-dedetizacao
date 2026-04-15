import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRevealMotion } from "@/lib/motion";

const faqs = [
  {
    q: "Os produtos são seguros para crianças e pets?",
    a: "Utilizamos produtos e métodos adequados a cada tipo de serviço e à legislação vigente. Orientações de segurança, tempo de reentrada e cuidados após a aplicação são informadas no ato, conforme o caso.",
  },
  {
    q: "Quanto tempo dura o efeito?",
    a: "Varia conforme o serviço (higienização de caixas d’água, afastamento de pombos ou morcegos, tratamento em silos etc.) e o ambiente. Prazos e necessidade de manutenção são explicados no orçamento.",
  },
  {
    q: "Preciso esvaziar ou interromper o uso de alguma área?",
    a: "Depende do serviço contratado. Quando houver restrição de acesso ou ventilação, informamos antes da execução.",
  },
  {
    q: "Vocês emitem laudo ou relatório?",
    a: "Quando o serviço prevê documentação (por exigência do contrato ou do tipo de trabalho), informamos no orçamento o que será entregue ao final.",
  },
  {
    q: "Existe garantia ou retrabalho?",
    a: "Quaisquer condições de garantia, retrabalho ou visita adicional, quando aplicáveis, ficam descritas no orçamento ou contrato que você assinar.",
  },
];

function FaqAccordionRow({ faq, index }: { faq: (typeof faqs)[number]; index: number }) {
  const rowMotion = useRevealMotion({ delay: index * 0.1, x: -10 });

  return (
    <motion.div {...rowMotion}>
      <AccordionItem value={`faq-${index}`} className="rounded-xl border border-border bg-card px-5">
        <AccordionTrigger className="cursor-pointer text-left text-sm font-semibold text-foreground hover:no-underline font-body">
          {faq.q}
        </AccordionTrigger>
        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
          {faq.a}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}

const FaqSection = () => {
  const titleMotion = useRevealMotion();
  const accordionWrap = useRevealMotion({ y: 20 });

  return (
    <section className="bg-muted/50 py-20 md:py-28" id="faq">
      <div className="container max-w-2xl">
        <motion.div className="mb-12 text-center" {...titleMotion}>
          <span className="text-sm font-medium text-primary">Dúvidas</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div {...accordionWrap}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <FaqAccordionRow key={f.q} faq={f} index={i} />
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
