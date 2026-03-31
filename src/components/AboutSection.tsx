import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Serviços alinhados às normas sanitárias vigentes",
  "Orientação sobre produtos e cuidados após o serviço",
  "Documentação e laudos quando aplicável ao contrato",
  "Transparência no orçamento e no escopo do trabalho",
  "Atendimento residencial, comercial e armazéns",
  "Contato direto para agendamento e dúvidas",
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28" id="sobre">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary">Sobre nós</span>
            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              ABC Dedetizações
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Atuamos em higienização de caixas d&apos;água e bebedouros, afastamento de pombos e morcegos, profilaxia em
              silos e expurgo em grãos. Nosso foco é executar cada serviço com clareza, segurança e respeito ao meio
              ambiente — alinhados à missão e aos valores da empresa.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  className="flex items-start gap-3 text-sm text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
