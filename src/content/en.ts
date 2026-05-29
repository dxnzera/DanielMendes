import type { Copy } from "./types";

export const enCopy: Copy = {
  headerMeta: "Front-end developer / Brazil",

  nav: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    linkedin: "LinkedIn",
    github: "GitHub",
    toggle: "PT",
  },

  hero: {
    kicker: "Portfolio Index",

    titleLines: ["FRONT-END", "DEVELOPER"],

    copyLines: [
      "Bringing unique visual direction to digital products.",
      "From interface to code, everything should make sense to the user.",
    ],
  },

  about: {
    kicker: "About me",

    titleLines: ["ABOUT", "ME"],

    introLines: [
      "I started with design and carried that vision into front-end.",
      "Today I build interfaces thinking about systems and the people using them.",
    ],

    profileCards: [
      {
        eyebrow: "Journey",

        titleLines: ["From UI to Code"],

        bodyLines: [
          "Learning design before front-end changed the way I see interfaces, visual rhythm and user experience.",
        ],
      },

      {
        eyebrow: "Experience",

        titleLines: ["Design and dev"],

        bodyLines: [
          "Working with design since 2016 and front-end since 2022, connecting visual consistency with clean execution.",
        ],
      },

      {
        eyebrow: "Education",

        titleLines: ["Systems Analysis & Development"],

        bodyLines: [
          "Uniube - ADS 2024-2026",
          "I have always been connected to computers, it was only a matter of time before finding myself in something related to it.",
        ],
      },

      {
        eyebrow: "Communication",

        titleLines: ["No labels"],

        bodyLines: [
          "Comfortable working in Portuguese, while using English frequently in my everyday life.",
        ],
      },
    ],
  },

  projects: {
    kicker: "Projects",

    titleLines: ["SELECTED", "PROJECTS"],

    introLines: [
      "Projects built to explore visual identity, interface systems and user experience.",
    ],

    items: [
      {
        name: "Scenr",

        role: "STREAMING WEB APPLICATION",

        summaryLines: [
          "The perfect app for watching movies and series, guided by motion and interaction, with fluid and unique design.",
        ],

        stack: ["React", "TypeScript", "Tailwind"],

        liveLabel: "Deploy",
        repoLabel: "GitHub",

        liveUrl: "https://dxnzera.github.io/Scenr/#/",

        repoUrl: "https://github.com/dxnzera",
      },

      {
        name: "Lanchê",

        role: "CREATIVE LANDING PAGE",

        summaryLines: [
          "A creative landing page for a unique meal-prep business focused on dietary restrictions, with playful visuals and direct communication.",
        ],

        stack: ["React", "TypeScript", "Tailwind"],

        liveLabel: "Deploy",
        repoLabel: "GitHub",

        liveUrl: "https://dxnzera.github.io/lanche/",

        repoUrl: "https://github.com/dxnzera",
      },

      {
        name: "XiS Tickets",

        role: "MOBILE TICKETING APPLICATION",

        summaryLines: [
          "An app designed to simplify event discovery and ticket purchases, with unique features built around the user experience.",
        ],

        stack: ["Swift", "Design System", "Mobile"],

        liveLabel: "Deploy",
        repoLabel: "GitHub",

        liveUrl: undefined,

        repoUrl: "https://github.com/dxnzera",
      },
    ],
  },

  contact: {
    kicker: "Contact",

    titleLines: ["LET'S WORK", "TOGETHER"],

    introLines: [
      "I like systems with personality, products that leave a lasting impression on the people using them.",
    ],

    practiceItems: [
      {
        eyebrow: "How I work",

        titleLines: ["Design leads,", "Code supports"],

        bodyLines: [
          "I first think about how the interface communicates,",
          "then about how code enables that experience.",
        ],
      },

      {
        eyebrow: "What I value",

        titleLines: ["Design lasts,", "Trends fade"],

        bodyLines: [
          "Design still defines what feels relevant, strong interfaces survive longer than visual trends.",
        ],
      },
    ],

    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",

    localTimeLabel: "Local time",

    footerNote:
      "Front-end developer with a strong design foundation, building modern and memorable interfaces.",

    top: "Back to top",
  },
};
