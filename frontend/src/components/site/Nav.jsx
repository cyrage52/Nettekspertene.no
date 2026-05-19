import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

export const Nav = () => {
  const { lang, t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services, id: "services" },
    { href: "#portfolio", label: t.nav.portfolio, id: "portfolio" },
    { href: "#about", label: t.nav.about, id: "about" },
    { href: "#contact", label: t.nav.contact, id: "contact" },
  ];

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#1a1a1a]/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="font-display text-base md:text-lg tracking-tight font-medium text-white hover:text-white/80 transition-colors"
        >
          Nettekspertene
          <span className="text-white/30">.no</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              data-testid={`nav-link-${l.id}`}
              className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-body"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            data-testid="language-toggle"
            aria-label="Toggle language"
            className="group relative h-9 px-1 flex items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <span
              className={`absolute top-1 bottom-1 w-9 rounded-full bg-white transition-transform duration-300 ease-out ${
                lang === "no" ? "translate-x-0" : "translate-x-9"
              }`}
            />
            <span
              className={`relative z-10 w-9 text-xs font-medium text-center tracking-wider transition-colors ${
                lang === "no" ? "text-[#1a1a1a]" : "text-white/50"
              }`}
              data-testid="lang-no"
            >
              NO
            </span>
            <span
              className={`relative z-10 w-9 text-xs font-medium text-center tracking-wider transition-colors ${
                lang === "en" ? "text-[#1a1a1a]" : "text-white/50"
              }`}
              data-testid="lang-en"
            >
              EN
            </span>
          </button>

          <a
            href="#contact"
            data-testid="nav-cta"
            className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white text-[#1a1a1a] text-sm font-medium hover:bg-white/90 transition-colors"
          >
            {t.nav.cta}
            <ArrowUpRight size={14} strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
