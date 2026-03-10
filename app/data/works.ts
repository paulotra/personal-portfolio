export type GalleryColumnItem = {
  type: string;
  src: string;
  width: "100%" | "50%";
  height?: string;
};
export type GalleryMockupItem = { src: string; width: "100%" };
export type ProjectGallery = {
  left: GalleryColumnItem[];
  right: GalleryColumnItem[];
  mockups: GalleryMockupItem[];
};

export const works = [
  {
    slug: "rocket-flow",
    title: "Rocket Flow",
    image: "/images/projects/rocketflow.svg",
    imageClass: "max-h-16",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
      { variant: "dev", label: "FE Development" },
    ],
    siteUrl: "https://www.rocketflow.nl/",
    projectUrl: "#",
    sections: [
      {
        heading: "Brand Refinement & Marketing Assets",
        body: "Audited and refined the company's existing logo, adjusting the spacing and proportions to achieve perfect visual balance. To help the brand scale in the real world, I designed tangible assets including office door mockups, signages, and a versatile library of reusable patterns for their ongoing marketing efforts.",
      },
      {
        heading: "UI/UX & Frontend Polish",
        body: "The initial iteration of the Rocket Flow website was built using Claude Code. While functional, it was highly generic and entirely disconnected from the brand's identity. I led a comprehensive overhaul of the UI and frontend, polishing the codebase and redesigning the interface from the ground up. I replaced the templated look with a bespoke, original design language that visually sets them apart while maintaining strict usability standards.",
      },
    ],
    gallery: {
      left: [
        {
          type: "image",
          src: "/images/projects/rocket-flow/1.png",
          width: "100%",
          height: "479px",
        },
        {
          type: "image",
          src: "/images/projects/rocket-flow/2.png",
          width: "50%",
        },
        {
          type: "image",
          src: "/images/projects/rocket-flow/3.png",
          width: "50%",
        },
        {
          type: "image",
          src: "/images/projects/rocket-flow/4.png",
          width: "50%",
        },
        {
          type: "image",
          src: "/images/projects/rocket-flow/5.png",
          width: "50%",
        },
      ],
      right: [
        {
          type: "image",
          src: "/images/projects/rocket-flow/6.png",
          width: "100%",
        },
        {
          type: "image",
          src: "/images/projects/rocket-flow/7.png",
          width: "100%",
        },
        {
          type: "image",
          src: "/images/projects/rocket-flow/8.png",
          width: "100%",
        },
      ],
      mockups: [
        {
          src: "/images/projects/rocket-flow/9.png",
          width: "100%",
        },
        {
          src: "/images/projects/rocket-flow/10.png",
          width: "100%",
        },
      ],
    },
  },
  {
    slug: "prophetx",
    title: "ProphetX",
    image: "/images/projects/prophetx.svg",
    imageClass: "max-h-16",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
      { variant: "dev", label: "FE Development" },
    ],
    siteUrl: "https://www.prophetx.co/",
    projectUrl: "#",
  },
  {
    slug: "coach-talk",
    title: "Coach Talk",
    image: "/images/projects/coachtalk.svg",
    imageClass: "max-h-[140px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: "https://cloudmazing.coach-talk.nl/login",
    projectUrl: "#",
  },
  {
    slug: "vloer-offerte",
    title: "Vloer Offerte",
    image: "/images/projects/vloer.svg",
    imageClass: "max-h-16",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: "https://vloer-offerte.nl/",
    projectUrl: "#",
  },
  {
    slug: "cloudmazing",
    title: "Cloudmazing",
    image: "/images/projects/cloudmazing.svg",
    imageClass: "max-h-[140px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
      { variant: "dev", label: "FE Development" },
    ],
    siteUrl: null,
    projectUrl: "#",
  },
  {
    slug: "123declaratie",
    title: "123declaratie",
    image: "/images/projects/123.svg",
    imageClass: "max-h-16",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: "https://123declaratie.nl/",
    projectUrl: "#",
  },
  {
    slug: "tenancy",
    title: "Tenancy",
    image: "/images/projects/tenancy.svg",
    imageClass: "max-h-16",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: "https://tenancy.dev/",
    projectUrl: "#",
  },
  {
    slug: "elated",
    title: "Elated",
    image: "/images/projects/elated.svg",
    imageClass: "max-h-16",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: null,
    projectUrl: "#",
  },
  {
    slug: "lff-industrial",
    title: "LFF Industrial",
    image: "/images/projects/anchor-capital.svg",
    imageClass: "max-h-[100px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
      { variant: "dev", label: "FE Development" },
    ],
    siteUrl: "https://lffindustrial.com/",
    projectUrl: "#",
  },
  {
    slug: "int-dashboard",
    title: "Int Dashboard",
    image: "/images/projects/int-dashboard.svg",
    imageClass: "max-h-[80px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: null,
    projectUrl: "#",
  },
  {
    slug: "ocam",
    title: "Ocam",
    image: "/images/projects/ocam.svg",
    imageClass: "max-h-[90px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
      { variant: "dev", label: "FE Development" },
    ],
    siteUrl: null,
    projectUrl: "#",
  },
  {
    slug: "arlon-antonius-portfolio",
    title: "Arlon Antonius Portfolio",
    image: "/images/projects/arlon.svg",
    imageClass: "max-h-[130px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: "#",
    projectUrl: "#",
  },
  {
    slug: "blomstra",
    title: "Blomstra",
    image: "/images/projects/blomstra.svg",
    imageClass: "max-h-[150px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: "#",
    projectUrl: "#",
  },
  {
    slug: "camp-diego-garcia",
    title: "Camp Diego Garcia",
    image: "/images/projects/cdg.svg",
    imageClass: "max-h-[160px]",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: "#",
    projectUrl: "#",
  },
  {
    slug: "extiverse",
    title: "Extiverse",
    image: "/images/projects/extiverse.svg",
    imageClass: "max-h-[70px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: "#",
    projectUrl: "#",
  },
  {
    slug: "hyn-portfolio",
    title: "Hyn (Portfolio)",
    image: "/images/projects/hyn.svg",
    imageClass: "max-h-[120px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: "https://hyn.me",
    projectUrl: "#",
  },
  {
    slug: "lms",
    title: "LMS",
    image: "/images/projects/lms.svg",
    imageClass: "max-h-[120px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: "#",
    projectUrl: "#",
  },
  {
    slug: "naks-choice",
    title: "Nak's Choice",
    image: "/images/projects/naks.svg",
    imageClass: "max-h-[70px]",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: "#",
    projectUrl: "#",
  },
  {
    slug: "threat-note",
    title: "Threat Note",
    image: "/images/projects/threat-note.svg",
    imageClass: "max-h-[70px]",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: "#",
    projectUrl: "#",
  },
  {
    slug: "tickets",
    title: "Tickets",
    image: "/images/projects/tickets.svg",
    imageClass: "max-h-[90px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
      { variant: "dev", label: "FE Development" },
    ],
    siteUrl: "#",
    projectUrl: "#",
  },
  {
    slug: "well-played",
    title: "Well Played",
    image: "/images/projects/wellplayed.svg",
    imageClass: "h-[80px]",
    badges: [
      { variant: "brand", label: "Logo" },
      { variant: "ui", label: "UI + UX" },
    ],
    siteUrl: "#",
    projectUrl: "#",
  },
];
