import { useLang } from "@/lib/i18n";

export const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-white/10 bg-[#1a1a1a]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-6">
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[0.95]">
              Nettekspertene
              <span className="text-white/30">.no</span>
            </h3>
            <p className="mt-6 text-white/55 max-w-md font-body">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-9">
            <p className="text-xs uppercase tracking-widest text-white/35 mb-4">
              {t.footer.sections.nav}
            </p>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-white/35 mb-4">
              {t.footer.sections.contact}
            </p>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <a
                  href="mailto:Contact@Nettekspertene.no"
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  Contact@Nettekspertene.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/40 font-body">
          <p>
            © {year} Nettekspertene. {t.footer.rights}
          </p>
          <p data-testid="footer-org">
            <span className="uppercase tracking-widest text-white/35 mr-2">
              {t.footer.org}
            </span>
            <span className="text-white/70">937 733 615</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
