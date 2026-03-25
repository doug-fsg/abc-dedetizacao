import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Os produtos são seguros para crianças e animais de estimação?",
    a: "Sim! Todos os nossos produtos são aprovados pela ANVISA e seguros para uso em ambientes com crianças e pets. Utilizamos técnicas modernas que minimizam qualquer risco.",
  },
  {
    q: "Quanto tempo dura o efeito da dedetização?",
    a: "Depende do tipo de praga e do método aplicado, mas em geral o efeito dura de 3 a 6 meses. Oferecemos planos de manutenção preventiva para proteção contínua.",
  },
  {
    q: "Preciso sair de casa durante o serviço?",
    a: "Na maioria dos casos, não. Nossos métodos permitem que você continue usando o ambiente. Em casos específicos, orientamos uma saída de 2-4 horas.",
  },
  {
    q: "Vocês atendem empresas e condomínios?",
    a: "Sim! Atendemos residências, empresas, restaurantes, condomínios, escolas e indústrias. Emitimos todos os laudos e certificados exigidos pela vigilância sanitária.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Oferecemos garantia por escrito. Se as pragas retornarem durante o período de garantia, voltamos e refazemos o serviço sem custo adicional.",
  },
  {
    q: "Qual o valor do serviço?",
    a: "O valor depende do tipo de praga, tamanho do imóvel e método de tratamento. Fazemos vistoria gratuita e enviamos o orçamento detalhado sem compromisso.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="faq">
      <div className="container max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3">
            Perguntas que nossos clientes fazem
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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
