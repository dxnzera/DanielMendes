import { StrictMode, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { COPIES } from "./content";
import type { Copy, Locale, Project, ProfileCard } from "./content/types";
import "./styles.css";

const ASSETS = {
  logo: new URL("../assets/daniel-mendes-logo.png", import.meta.url).href,
  mark: new URL("../assets/favicon.png", import.meta.url).href,
};

const LINKS = {
  linkedin: "https://www.linkedin.com/in/dxnzera/",
  github: "https://github.com/dxnzera",
  email: "dxnzera@gmail.com",
};

function useLocalTime(): string {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en", {
          timeZone: "America/Sao_Paulo",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    };

    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return time;
}

function Watermark({ className, rotate }: { className: string; rotate: number }) {
  return (
    <div
      className={`watermark ${className}`}
      style={{ "--mark-rotate": `${rotate}deg` } as CSSProperties}
      aria-hidden="true"
    >
      <img src={ASSETS.mark} alt="" />
    </div>
  );
}

function LineStack({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <>
      {lines.map((line, index) => (
        <span className={`block ${className}`} key={`${line}-${index}`}>
          {line}
        </span>
      ))}
    </>
  );
}

function Header({
  copy,
  locale,
  onToggleLocale,
}: {
  copy: Copy;
  locale: Locale;
  onToggleLocale: () => void;
}) {
  return (
    <header className="editorial-shell hairline grid min-h-28 grid-cols-[1fr_auto] items-start gap-5 py-5 md:min-h-36 md:grid-cols-[0.9fr_1.1fr_0.9fr]">
      <a className="block w-28 md:w-36 lg:w-48" href="#top" aria-label="Daniel Mendes home">
        <img src={ASSETS.logo} alt="Daniel Mendes" className="h-auto w-full" />
      </a>
      <nav className="order-3 flex flex-wrap gap-6 md:order-none md:justify-self-center" aria-label="Primary navigation">
        <a className="nav-link" href="#about">{copy.nav.about}</a>
        <a className="nav-link" href="#projects">{copy.nav.projects}</a>
        <a className="nav-link" href="#contact">{copy.nav.contact}</a>
        <a className="nav-link text-acid" href={LINKS.linkedin} target="_blank" rel="noreferrer">
          {copy.nav.linkedin}
        </a>
        <a className="nav-link text-acid" href={LINKS.github} target="_blank" rel="noreferrer">
          {copy.nav.github}
        </a>
        <button className="nav-link text-acid" type="button" onClick={onToggleLocale}>
          {locale === "en" ? "PT" : "EN"}
        </button>
      </nav>
      <p className="microcopy justify-self-end text-right">{copy.headerMeta}</p>
    </header>
  );
}

function SplitHeading({
  kicker,
  titleLines,
  copyLines,
  titleClassName,
}: {
  kicker: string;
  titleLines: string[];
  copyLines: string[];
  titleClassName: string;
}) {
  return (
    <div className="grid gap-7 md:grid-cols-12 md:gap-5">
      <p className="section-kicker md:col-start-1 md:col-end-3">{kicker}</p>
      <h2 className={`${titleClassName} md:col-start-1 md:col-end-6`}>
        <LineStack lines={titleLines} />
      </h2>
      <p className="max-w-[30rem] text-lg leading-tight text-cream md:col-start-7 md:col-end-13 md:justify-self-end md:text-right">
        <LineStack lines={copyLines} />
      </p>
    </div>
  );
}

function Hero({ copy }: { copy: Copy }) {
  return (
    <section id="top" className="editorial-shell hairline relative grid min-h-[72vh] grid-cols-12 gap-x-5 overflow-visible pb-8 pt-6 md:min-h-[78vh]">
      <Watermark
        className="right-[-6rem] top-[2rem] h-[40rem] w-[40rem] animate-drift opacity-[0.12] watermark-fade-right"
        rotate={7}
      />
      <div className="col-span-12 flex items-start justify-between gap-5">
        <p className="section-kicker">{copy.hero.kicker}</p>
      </div>
      <h1 className="display-title col-span-12 max-w-[88rem]">
        <LineStack lines={copy.hero.titleLines} />
      </h1>
      <p className="col-span-12 mt-4 max-w-[34rem] text-[clamp(1.1rem,1.55vw,1.85rem)] font-bold leading-[1.05] text-cream md:mt-5 md:col-start-8 md:col-end-12">
        <LineStack lines={copy.hero.copyLines} />
      </p>
    </section>
  );
}

function AboutCard({ card }: { card: ProfileCard }) {
  return (
    <article className="border border-cream/10 bg-black/20 p-5 md:p-6">
      <p className="microcopy text-acid">{card.eyebrow}</p>
      <h3 className="mt-4 text-[clamp(1.8rem,3.2vw,3.4rem)] font-black uppercase leading-[0.88]">
        <LineStack lines={card.titleLines} />
      </h3>
      <p className="mt-5 max-w-[20rem] text-sm leading-tight text-bone md:text-base">
        <LineStack lines={card.bodyLines} />
      </p>
    </article>
  );
}

function About({ copy }: { copy: Copy }) {
  return (
    <section id="about" className="editorial-shell hairline relative overflow-hidden py-24 md:py-28">
      <SplitHeading
        kicker={copy.about.kicker}
        titleLines={copy.about.titleLines}
        copyLines={copy.about.introLines}
        titleClassName="text-[clamp(2.8rem,6vw,7rem)] font-black uppercase leading-[0.86]"
      />
      <div className="mx-auto mt-10 grid max-w-[1100px] gap-6 md:grid-cols-2 md:gap-8">
        {copy.about.profileCards.map((card) => (
          <AboutCard key={card.eyebrow} card={card} />
        ))}
      </div>
    </section>
  );
}

function LinkPill({
  label,
  href,
  active = true,
}: {
  label: string;
  href?: string;
  active?: boolean;
}) {
  if (!href || !active) {
    return (
      <span className="inline-flex min-w-24 items-center justify-center border border-cream/20 px-4 py-2 text-[10px] uppercase tracking-normal text-bone/50">
        {label}
      </span>
    );
  }

  return (
    <a
      className="inline-flex min-w-24 items-center justify-center border border-acid/40 px-4 py-2 text-[10px] uppercase tracking-normal text-acid transition-colors hover:border-acid hover:bg-acid hover:text-ink"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="grid gap-5 border-t border-cream/20 py-6 md:grid-cols-12 md:gap-5 md:py-6">
      <div className="visual-panel grid-glow relative min-h-[22rem] md:col-start-1 md:col-end-7 md:min-h-[28rem]">
        <Watermark className="right-[-12%] top-[-10%] h-[80%] w-[80%] animate-drift opacity-[0.15]" rotate={index % 2 === 0 ? 12 : -8} />
        <div className="dot-matrix absolute inset-x-8 bottom-8 h-28 opacity-20" aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <p className="microcopy text-acid">{String(index + 1).padStart(2, "0")}</p>
          <div>
            <p className="microcopy text-bone">{project.role}</p>
            <p className="mt-3 max-w-[16rem] text-[clamp(1.85rem,4vw,4.6rem)] font-black uppercase leading-[0.88] text-cream">
              {project.name}
            </p>
          </div>
        </div>
      </div>
      <div className="self-end md:col-start-8 md:col-end-13">
        <p className="section-kicker">{project.role}</p>
        <h3 className="mt-4 text-[clamp(2.2rem,3.8vw,4.9rem)] font-black uppercase leading-[0.88]">
          {project.name}
        </h3>
        <p className="mt-5 max-w-[28rem] text-base leading-tight text-bone md:text-lg">
          <LineStack lines={project.summaryLines} />
        </p>
        <ul className="mt-8 grid grid-cols-3 gap-2 border-t border-cream/20 pt-4 text-[10px] uppercase leading-tight text-cream/80">
          {project.stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkPill label={project.liveLabel} href={project.liveUrl} active={Boolean(project.liveUrl)} />
          <LinkPill label={project.repoLabel} href={project.repoUrl} active={Boolean(project.repoUrl)} />
        </div>
      </div>
    </article>
  );
}

function Projects({ copy }: { copy: Copy }) {
  return (
    <section id="projects" className="editorial-shell hairline relative overflow-hidden py-24 md:py-28">
      <SplitHeading
        kicker={copy.projects.kicker}
        titleLines={copy.projects.titleLines}
        copyLines={copy.projects.introLines}
        titleClassName="text-[clamp(2.9rem,6.8vw,8rem)] font-black uppercase leading-[0.86]"
      />
      <div className="mt-10">
        {copy.projects.items.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Contact({ copy }: { copy: Copy }) {
  return (
    <section id="contact" className="editorial-shell relative overflow-visible py-10">
      <Watermark
        className="right-[-6rem] top-[2rem] h-[40rem] w-[40rem] animate-drift opacity-[0.12] watermark-fade-right"
        rotate={-10}
      />
      <SplitHeading
        kicker={copy.contact.kicker}
        titleLines={copy.contact.titleLines}
        copyLines={copy.contact.introLines}
        titleClassName="text-[clamp(3.8rem,9.5vw,11rem)] font-black uppercase leading-[0.82]"
      />
      <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-5">
        <div className="md:col-start-1 md:col-end-7">
          <div className="grid gap-6 md:grid-cols-2">
            {copy.contact.practiceItems.map((item) => (
              <article
                className="border border-cream/10 bg-black/20 p-5 md:p-6"
                key={item.eyebrow}
              >
                <p className="microcopy text-acid">
                  {item.eyebrow}
                </p>

                <h3 className="mt-3 text-[clamp(1.8rem,3.2vw,3.0rem)] font-black uppercase leading-[0.88]">
                  <LineStack lines={item.titleLines} />
                </h3>

                <p className="mt-4 max-w-[20rem] text-sm leading-tight text-bone">
                  <LineStack lines={item.bodyLines} />
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="md:col-start-7 md:col-end-13 flex flex-col self-start md:-mt-20 lg:-mt-24">
          <div className="ml-auto flex w-fit flex-col items-end">
            <a
              className="block w-[min(100%,20rem)] md:w-[24rem] lg:w-[28rem]"
              href="#top"
              aria-label="Daniel Mendes home"
            >
              <img src={ASSETS.logo} alt="Daniel Mendes" className="h-auto w-full" />
            </a>
            <div className="mt-8 flex justify-end gap-4 text-[clamp(1.15rem,1.8vw,1.8rem)] font-black uppercase leading-none text-acid">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                {copy.contact.linkedinLabel}
              </a>

              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                {copy.contact.githubLabel}
              </a>
            </div>
            <a
              className="contact-link mt-4 block whitespace-nowrap text-right text-[clamp(2.5rem,5vw,3rem)] leading-[0.9]"
              href={`mailto:${LINKS.email}`}
            >
              {LINKS.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ copy, localTime }: { copy: Copy; localTime: string }) {
  return (
    <footer className="editorial-shell flex flex-wrap items-center justify-between gap-5 border-t border-cream/20 py-5">
      <p className="microcopy">Daniel Mendes</p>
      <div className="mt-8 flex flex-col items-center self-center text-center">
        <p className="microcopy max-w-[28rem] text-bone">
          {copy.contact.footerNote}
        </p>
        <p className="microcopy mt-2">
          {copy.contact.localTimeLabel} {localTime}
        </p>
      </div>
      <div className="flex flex-wrap gap-5">
        <a className="nav-link text-acid" href={LINKS.linkedin} target="_blank" rel="noreferrer">
          {copy.nav.linkedin}
        </a>
        <a className="nav-link text-acid" href={LINKS.github} target="_blank" rel="noreferrer">
          {copy.nav.github}
        </a>
        <a className="nav-link" href="#top">
          {copy.contact.top}
        </a>
      </div>
    </footer>
  );
}

function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = COPIES[locale];
  const localTime = useLocalTime();

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none grid-glow opacity-35" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_22%,rgba(186,255,33,0.18),transparent_22rem),radial-gradient(circle_at_90%_34%,rgba(88,255,168,0.12),transparent_26rem)]" aria-hidden="true" />
      <div className="relative z-10">
        <Header copy={copy} locale={locale} onToggleLocale={() => setLocale(locale === "en" ? "pt" : "en")} />
        <main>
          <Hero copy={copy} />
          <About copy={copy} />
          <Projects copy={copy} />
          <Contact copy={copy} />
        </main>
        <Footer copy={copy} localTime={localTime}/>
      </div>
    </>
  );
}

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
