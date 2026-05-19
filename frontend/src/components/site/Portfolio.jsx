import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

const VIDEO_1 =
  "https://customer-assets.emergentagent.com/job_4910953a-b040-44aa-b1e5-6f56f5e7d101/artifacts/wgxr6by2_FirstOne.mp4";
const VIDEO_2 =
  "https://customer-assets.emergentagent.com/job_4910953a-b040-44aa-b1e5-6f56f5e7d101/artifacts/kwuhokj2_Secound%20one.mp4";

const AutoVideo = ({ src, testId }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = el.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      data-testid={testId}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className="block w-full h-full object-cover"
    />
  );
};

export const Portfolio = () => {
  const { t } = useLang();
  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="relative py-24 md:py-40 border-t border-white/5 bg-[#1c1c1c]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <p className="md:col-span-3 text-xs tracking-[0.3em] uppercase text-white/40 font-body">
            ⟶ &nbsp;{t.portfolio.label}
          </p>
          <div className="md:col-span-9">
            <h2
              data-testid="portfolio-title"
              className="font-display font-light tracking-tighter text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.02] mb-8 max-w-[900px]"
            >
              {t.portfolio.title}
            </h2>
            <p className="text-base md:text-lg text-white/55 leading-relaxed font-body max-w-2xl">
              {t.portfolio.sub}
            </p>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* Case 1 — wide left aligned */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-2 flex md:flex-col gap-2 md:gap-6 items-baseline md:items-start">
              <span className="font-display text-sm tracking-[0.25em] text-white/30">
                / 01
              </span>
              <span className="text-xs text-white/40 uppercase tracking-widest">
                {t.portfolio.case1_sub}
              </span>
            </div>
            <div className="md:col-span-10">
              <div className="aspect-[16/9] w-full overflow-hidden bg-black shimmer-border">
                <AutoVideo src={VIDEO_1} testId="portfolio-video-1" />
              </div>
              <h3 className="mt-6 font-display text-2xl md:text-4xl tracking-tight font-light text-white">
                {t.portfolio.case1_title}
              </h3>
            </div>
          </div>

          {/* Case 2 — offset right */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-10 md:col-start-2">
              <div className="aspect-[16/9] w-full overflow-hidden bg-black shimmer-border">
                <AutoVideo src={VIDEO_2} testId="portfolio-video-2" />
              </div>
              <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h3 className="font-display text-2xl md:text-4xl tracking-tight font-light text-white">
                  {t.portfolio.case2_title}
                </h3>
                <div className="flex flex-col md:items-end">
                  <span className="font-display text-sm tracking-[0.25em] text-white/30">
                    / 02
                  </span>
                  <span className="text-xs text-white/40 uppercase tracking-widest mt-1">
                    {t.portfolio.case2_sub}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
