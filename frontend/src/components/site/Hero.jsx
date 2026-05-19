import { useLang } from "@/lib/i18n";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/4910953a-b040-44aa-b1e5-6f56f5e7d101/images/f3e9f2c9eae666c23004ec68e0c92a3ce69aa87fd13014f47c18120ede1a7a3b.png";

export const Hero = () => {
  const { t } = useLang();

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Subtle bg texture */}
      <div
        className="absolute inset-0 opacity-[0.18] bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/40 via-[#1a1a1a]/30 to-[#1a1a1a]" />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-10 lg:px-16 pb-20 md:pb-32 pt-32">
        <p
          className="float-in text-xs tracking-[0.3em] uppercase text-white/40 mb-8 font-body"
          data-testid="hero-eyebrow"
        >
          ⟶ &nbsp;{t.hero.eyebrow}
        </p>

        <h1
          className="float-in float-in-delay-1 font-display font-light tracking-tighter text-white text-5xl sm:text-7xl lg:text-[8rem] leading-[0.95] max-w-[1100px]"
          data-testid="hero-title"
        >
          {t.hero.title_1}
          <br />
          <span className="text-white/50">{t.hero.title_2}</span>
        </h1>

        <div className="float-in float-in-delay-2 mt-12 grid md:grid-cols-12 gap-8 items-end">
          <p
            className="md:col-span-5 md:col-start-7 text-base md:text-lg text-white/60 leading-relaxed font-body"
            data-testid="hero-lede"
          >
            {t.hero.lede}
          </p>
        </div>

        <div className="float-in float-in-delay-3 mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            data-testid="hero-cta-primary"
            className="group inline-flex items-center gap-3 h-12 px-6 rounded-full bg-white text-[#1a1a1a] font-medium text-sm hover:bg-white/90 transition-all"
          >
            {t.hero.primary}
            <ArrowUpRight
              size={16}
              strokeWidth={2.25}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#portfolio"
            data-testid="hero-cta-secondary"
            className="inline-flex items-center gap-3 h-12 px-6 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            {t.hero.secondary}
          </a>
        </div>
      </div>

      <a
        href="#services"
        className="hidden md:flex absolute bottom-8 right-8 z-10 items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40 hover:text-white/70 transition-colors"
        data-testid="hero-scroll-indicator"
      >
        Scroll
        <ArrowDown size={14} className="animate-pulse" />
      </a>
    </section>
  );
};

export default Hero;
