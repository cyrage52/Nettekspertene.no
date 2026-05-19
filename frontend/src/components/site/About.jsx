import { useLang } from "@/lib/i18n";

const ABOUT_IMG =
  "https://images.pexels.com/photos/17332725/pexels-photo-17332725.jpeg";

export const About = () => {
  const { t } = useLang();
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-40 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="aspect-[4/5] overflow-hidden bg-[#242424] shimmer-border">
              <img
                src={ABOUT_IMG}
                alt="Nettekspertene studio"
                className="w-full h-full object-cover grayscale-[15%]"
                data-testid="about-image"
              />
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6 font-body">
              ⟶ &nbsp;{t.about.label}
            </p>
            <h2
              data-testid="about-title"
              className="font-display font-light tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-10"
            >
              {t.about.title}
            </h2>
            <div className="space-y-5 max-w-xl">
              <p className="text-base md:text-lg text-white/65 leading-relaxed font-body">
                {t.about.p1}
              </p>
              <p className="text-base md:text-lg text-white/65 leading-relaxed font-body">
                {t.about.p2}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8">
              {[
                { v: t.about.stat1_v, l: t.about.stat1_l },
                { v: t.about.stat2_v, l: t.about.stat2_l },
                { v: t.about.stat3_v, l: t.about.stat3_l },
              ].map((s, i) => (
                <div key={i} data-testid={`about-stat-${i}`}>
                  <div className="font-display text-3xl md:text-5xl text-white font-light tracking-tight">
                    {s.v}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-white/40">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
