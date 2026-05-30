import { StrictMode, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { COPIES } from "./content";
import type { Copy, Locale, Project, ProfileCard } from "./content/types";
import "./styles.css";

const ASSETS = {
  logo: new URL("../assets/daniel-mendes-logo.png", import.meta.url).href,
  mark: new URL("../assets/favicon.png", import.meta.url).href,
  projectVideos: {
    "Scenr": new URL("../assets/Scenr - Video.mp4", import.meta.url).href,
    "Lanchê": new URL("../assets/Lanche - Video.mp4", import.meta.url).href,
    "XiS Tickets": new URL("../assets/Xis - Video.mov", import.meta.url).href,
  },
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
    <header className="editorial-shell hairline grid min-h-0 grid-cols-[auto_1fr] items-start gap-x-4 gap-y-5 py-4 md:min-h-36 md:grid-cols-[0.9fr_1.1fr_0.9fr] md:gap-5 md:py-5">
      <a className="block w-32 sm:w-36 md:w-36 lg:w-48" href="#top" aria-label="Daniel Mendes home">
        <img src={ASSETS.logo} alt="Daniel Mendes" className="h-auto w-full" />
      </a>
      <nav className="order-3 col-span-2 flex w-full flex-wrap justify-between gap-x-4 gap-y-3 border-t border-cream/10 pt-4 md:order-none md:col-span-1 md:w-auto md:justify-center md:justify-self-center md:gap-6 md:border-0 md:pt-0" aria-label="Primary navigation">
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
      <p className="microcopy max-w-[9.5rem] justify-self-end text-right md:max-w-none">{copy.headerMeta}</p>
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
      <p className="max-w-[30rem] text-base leading-tight text-cream md:col-start-7 md:col-end-13 md:justify-self-end md:text-right md:text-lg">
        <LineStack lines={copyLines} />
      </p>
    </div>
  );
}

function Hero({ copy }: { copy: Copy }) {
  return (
    <section id="top" className="editorial-shell hairline relative grid min-h-0 grid-cols-12 content-start gap-x-5 gap-y-5 overflow-visible pb-8 pt-8 md:min-h-[60vh] md:gap-y-0 md:overflow-visible md:pb-8 md:pt-6">
      <Watermark
        className="right-[-8rem] top-[5rem] h-[28rem] w-[28rem] animate-drift opacity-[0.12] md:right-[-6rem] md:top-[2rem] md:h-[40rem] md:w-[40rem] watermark-fade-right"
        rotate={7}
      />
      <div className="col-span-12 flex items-start justify-between gap-5">
        <p className="section-kicker">{copy.hero.kicker}</p>
      </div>
      <h1 className="display-title col-span-12 max-w-[88rem]">
        <LineStack lines={copy.hero.titleLines} />
      </h1>
      <p className="col-span-12 max-w-[22rem] text-[clamp(1rem,4.6vw,1.25rem)] font-bold leading-[1.05] text-cream md:col-start-8 md:col-end-12 md:mt-5 md:max-w-[34rem] md:text-[clamp(1.1rem,1.55vw,1.85rem)]">
        <LineStack lines={copy.hero.copyLines} />
      </p>
    </section>
  );
}

function AboutCard({ card }: { card: ProfileCard }) {
  return (
    <article className="border border-cream/10 bg-black/20 p-5 md:p-6">
      <p className="microcopy text-acid">{card.eyebrow}</p>
      <h3 className="mt-4 break-words text-[clamp(1.65rem,9vw,2.6rem)] font-black uppercase leading-[0.88] md:text-[clamp(1.8rem,3.2vw,3.4rem)]">
        <LineStack lines={card.titleLines} />
      </h3>
      <p className="mt-5 max-w-none text-sm leading-tight text-bone md:max-w-[20rem] md:text-base">
        <LineStack lines={card.bodyLines} />
      </p>
    </article>
  );
}

function About({ copy }: { copy: Copy }) {
  return (
    <section id="about" className="editorial-shell hairline relative overflow-hidden pb-16 pt-10 md:py-28">
      <SplitHeading
        kicker={copy.about.kicker}
        titleLines={copy.about.titleLines}
        copyLines={copy.about.introLines}
        titleClassName="text-[clamp(2.8rem,15vw,4.9rem)] font-black uppercase leading-[0.86] md:text-[clamp(2.8rem,6vw,7rem)]"
      />
      <div className="mx-auto mt-8 grid max-w-[1100px] gap-5 md:mt-10 md:grid-cols-2 md:gap-8">
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
      <span className="inline-flex min-w-[8rem] flex-1 items-center justify-center border border-cream/20 px-4 py-2 text-[10px] uppercase tracking-normal text-bone/50 md:min-w-24 md:flex-none">
        {label}
      </span>
    );
  }

  return (
    <a
      className="inline-flex min-w-[8rem] flex-1 items-center justify-center border border-acid/40 px-4 py-2 text-[10px] uppercase tracking-normal text-acid transition-colors hover:border-acid hover:bg-acid hover:text-ink md:min-w-24 md:flex-none"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoUrl = ASSETS.projectVideos[project.name as keyof typeof ASSETS.projectVideos];

  return (
    <article className="grid gap-5 border-t border-cream/20 py-8 md:grid-cols-12 md:gap-5 md:py-6">
      <div className="visual-panel grid-glow relative min-h-[18rem] md:col-start-1 md:col-end-7 md:min-h-[28rem]">
        {videoUrl ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40" aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <p className="microcopy text-acid">{String(index + 1).padStart(2, "0")}</p>
          <div>
            <p className="microcopy text-bone">{project.role}</p>
            <p className="mt-3 max-w-[14rem] text-[clamp(2.2rem,15vw,2.2rem)] font-black uppercase leading-[0.88] text-cream md:max-w-[16rem] md:text-[clamp(1.85rem,4vw,2.6rem)]">
              {project.name}
            </p>
          </div>
        </div>
      </div>
      <div className="md:col-start-8 md:col-end-13 md:self-end">
        <p className="section-kicker">{project.role}</p>
        <h3 className="mt-4 text-[clamp(2.4rem,14vw,4rem)] font-black uppercase leading-[0.88] md:text-[clamp(2.2rem,3.8vw,4.9rem)]">
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
    <section id="projects" className="editorial-shell hairline relative overflow-hidden py-16 md:py-28">
      <SplitHeading
        kicker={copy.projects.kicker}
        titleLines={copy.projects.titleLines}
        copyLines={copy.projects.introLines}
        titleClassName="text-[clamp(2.7rem,14vw,5rem)] font-black uppercase leading-[0.86] md:text-[clamp(2.9rem,6.8vw,8rem)]"
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
        <div className="flex flex-col self-start md:col-start-7 md:col-end-13 md:-mt-20 lg:-mt-24">
          <div className="mx-auto flex w-full flex-col items-center md:ml-auto md:w-fit md:items-end">
            <a
              className="block w-[min(82vw,18rem)] md:w-[24rem] lg:w-[28rem]"
              href="#top"
              aria-label="Daniel Mendes home"
            >
              <img src={ASSETS.logo} alt="Daniel Mendes" className="h-auto w-full" />
            </a>
            <div className="mt-8 flex justify-center gap-4 text-[clamp(1.15rem,1.8vw,1.8rem)] font-black uppercase leading-none text-acid md:justify-end">
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
              className="contact-link mt-4 block whitespace-nowrap text-center text-[clamp(1.65rem,8vw,2.45rem)] leading-[0.9] md:text-right md:text-[clamp(2.5rem,5vw,3rem)]"
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
    <footer className="editorial-shell flex flex-col items-center justify-between gap-5 border-t border-cream/20 py-5 text-center md:flex-row md:text-left">
      <p className="microcopy">Daniel Mendes</p>
      <div className="mt-8 flex flex-col items-center self-center text-center">
        <p className="microcopy max-w-[28rem] text-bone">
          {copy.contact.footerNote}
        </p>
        <p className="microcopy mt-2">
          {copy.contact.localTimeLabel} {localTime}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
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
