import { Award, FileCheck, Shield } from "lucide-react";

const items = [
  { icon: Shield, label: "Boas práticas e legislação aplicável" },
  { icon: FileCheck, label: "Documentação quando prevista no serviço" },
  { icon: Award, label: "Orçamento e escopo acordados por escrito" },
];

/**
 * Faixa de credibilidade em bg-primary (teal escuro).
 * Branco em teal #236B51 → 6,8:1 ✓ AA
 */
const TrustStrip = () => {
  return (
    <section className="bg-primary py-4" aria-label="Compromissos com o cliente">
      <div className="container">
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-2">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 text-sm font-medium text-primary-foreground"
            >
              <Icon className="h-4 w-4 shrink-0 text-white/70" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStrip;
