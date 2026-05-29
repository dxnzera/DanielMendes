import type { Copy } from "./types";

export const ptCopy: Copy = {
  headerMeta: "Front-end developer / Brasil",

  nav: {
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    linkedin: "LinkedIn",
    github: "GitHub",
    toggle: "EN",
  },

  hero: {
    kicker: "Portfólio Index",

    titleLines: ["FRONT-END", "DEVELOPER"],

    copyLines: [
      "Trazendo direção visual única para aplicativos digitais.",
      "Da interface ao código, tudo precisa fazer sentido para quem usa.",
    ],
  },

  about: {
    kicker: "Sobre mim",

    titleLines: ["SOBRE", "MIM"],

    introLines: [
      "Comecei pelo design e levei essa visão para o front-end.",
      "Hoje construo interfaces pensando no sistema e em quem vai usá-lo.",
    ],

    profileCards: [
      {
        eyebrow: "Trajetória",

        titleLines: ["Da UI ao Código"],

        bodyLines: [
          "Aprender design antes do front-end mudou minha forma de enxergar interfaces, ritmo visual e experiência.",
        ],
      },

      {
        eyebrow: "Experiência",

        titleLines: ["Design e dev"],

        bodyLines: [
          "Experiência com design desde 2016, e com front-end desde 2022, conectando consistência visual e execução limpa.",
        ],
      },

      {
        eyebrow: "Formação",

        titleLines: ["Análise e Des. de Sistemas"],

        bodyLines: [
          "Uniube - ADS 2024-2026", "Sempre estive envolvido com computador, foi só questão de tempo até me encontrar em algo relacionado a isso.",
        ],
      },

      {
        eyebrow: "Comunicação",

        titleLines: ["Sem rótulos"],

        bodyLines: [
          "Confortável trabalhando em português, mas utilizo inglês frequentemente no meu dia a dia.",
        ],
      },
    ],
  },

  projects: {
    kicker: "Projetos",

    titleLines: ["PROJETOS", "SECRETOS"],

    introLines: [
      "Projetos construídos para explorar identidade visual, sistema de interface e experiência de usuário.",
    ],

    items: [
      {
        name: "Scenr",

        role: "APLICATIVO WEB DE STREAMING",

        summaryLines: [
          "O aplicativo perfeito para você ver seu filme ou série, visual guiado por movimento e interação, design fluido e único.",
        ],

        stack: ["React", "TypeScript", "Tailwind"],

        liveLabel: "Deploy",
        repoLabel: "GitHub",

        liveUrl: undefined,

        repoUrl: "https://github.com/dxnzera",
      },

      {
        name: "Lanchê",

        role: "LANDING PAGE CRIATIVA",

        summaryLines: [
          "Uma landing page criativa para um negócio único de marmitas para pessoas com restrição alimentar, visual divertido, e comunicação objetiva.",
        ],

        stack: ["React", "TypeScript", "Tailwind"],

        liveLabel: "Deploy",
        repoLabel: "GitHub",

        liveUrl: undefined,

        repoUrl: "https://github.com/dxnzera",
      },

      {
        name: "XiS Tickets",

        role: "APLICATIVO MOBILE DE INGRESSOS",

        summaryLines: [
          "Aplicativo pensado para facilitar a busca de eventos e compra de ingressos, com funcionalidades únicas pensando no usuário.",
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
    kicker: "Contato",

    titleLines: ["VAMOS TRABALHAR JUNTOS"],

    introLines: [
      "Gosto de sistemas com personalidade, e que marque o usuário quando utiliza-o.",
    ],

    practiceItems: [
      {
        eyebrow: "Como trabalho",

        titleLines: ["Design guia,", "Código sustenta"],

        bodyLines: [
          "Penso primeiro em como a interface comunica, depois em como o código permite a experiência.",
        ],
      },

      {
        eyebrow: "O que valorizo",

        titleLines: ["Design dura,", "Tendência passa"],

        bodyLines: [
          "Design continua comandando o que parece relevante, interfaces fortes sobrevivem mais que tendências visuais.",
        ],
      },
    ],

    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",

    localTimeLabel: "Hora local",

    footerNote:
      "Front-end com base forte em design, construindo interfaces modernas e marcantes.",

    top: "Voltar ao topo",
  },
};
