const categories = ["Insetos", "Roedores", "Pombos", "Morcegos", "Água", "Grãos & silos"];

/** Faixa mínima — âmbitos de atuação sem peso visual. */
const PestIconStrip = () => {
  return (
    <section
      className="border-y border-border/50 bg-background py-3 md:py-3.5"
      aria-labelledby="pest-strip-heading"
    >
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:flex-wrap sm:gap-x-0 sm:gap-y-1 sm:text-left">
          <p
            id="pest-strip-heading"
            className="px-1 text-[0.8125rem] leading-snug text-muted-foreground sm:shrink-0 sm:px-0 sm:pr-1"
          >
            Atuamos onde há risco sanitário ou infestação
          </p>

          <ul
            className="flex max-w-prose flex-wrap items-center justify-center gap-x-0 gap-y-1 text-[0.8125rem] leading-relaxed text-muted-foreground sm:max-w-none sm:justify-start sm:border-l sm:border-border/35 sm:pl-5"
            aria-label="Tipos de foco atendidos"
          >
            {categories.map((label) => (
              <li
                key={label}
                className="flex items-center before:px-2 before:text-muted-foreground/40 before:content-['·'] first:before:hidden"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PestIconStrip;
