export type Locale = "en" | "pt";

export type LineBlock = string[];

export type ProfileCard = {
  eyebrow: string;
  titleLines: LineBlock;
  bodyLines: LineBlock;
};

export type Project = {
  name: string;
  role: string;
  summaryLines: LineBlock;
  stack: string[];
  liveLabel: string;
  repoLabel: string;
  liveUrl?: string;
  repoUrl?: string;
};

export type Copy = {
  headerMeta: string;
  nav: {
    about: string;
    projects: string;
    contact: string;
    linkedin: string;
    github: string;
    toggle: string;
  };
  hero: {
    kicker: string;
    titleLines: LineBlock;
    copyLines: LineBlock;
  };
  about: {
    kicker: string;
    titleLines: LineBlock;
    introLines: LineBlock;
    profileCards: ProfileCard[];
  };
  projects: {
    kicker: string;
    titleLines: LineBlock;
    introLines: LineBlock;
    items: Project[];
  };
  contact: {
    kicker: string;
    titleLines: LineBlock;
    introLines: LineBlock;
    practiceItems: ProfileCard[];
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    localTimeLabel: string;
    footerNote: string;
    top: string;
  };
};
