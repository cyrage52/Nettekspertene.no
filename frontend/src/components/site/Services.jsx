import { useLang } from "@/lib/i18n";

export const Services = () => {
  const { t } = useLang();
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-40 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <p className="md:col-span-3 text-xs tracking-[0.3em] uppercase text-white/40 font-body">
            ⟶ &nbsp;{t.services.label}
          </p>
          <h2
            data-testid="services-title"
            className="md:col-span-9 font-display font-light tracking-tighter text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.02] max-w-[900px]"
          >
            {t.services.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 border-t border-l border-white/10">
          {t.services.items.map((item, idx) => (
            <article
              key={item.n}
              data-testid={`service-${idx}`}
              className="group relative p-8 md:p-12 lg:p-16 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="font-display text-sm tracking-[0.25em] text-white/30">
                  {item.n}
                </span>
                <span className="block h-2 w-2 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl tracking-tight font-light text-white mb-4">
                {item.t}
              </h3>
              <p className="text-sm md:text-base text-white/55 leading-relaxed font-body max-w-md">
                {item.d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
