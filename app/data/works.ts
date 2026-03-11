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
    sections: [
      {
        heading: "The Approach",
        body: "Joining as Employee #0 required building the platform's entire visual and technical foundation from the ground up. The approach involved rapid prototyping and strong design thinking to turn early product concepts into usable engineering builds. The focus was on moving quickly during the early startup stages while establishing a robust, scalable architecture that could grow with the business.",
      },
      {
        heading: "Brand Conception",
        body: "Conceptualized and designed the ProphetX logo and overall brand identity, establishing the visual language for the company from day one.",
      },
      {
        heading: "Product Design (UI/UX)",
        body: "Translated abstract product concepts into wireframes, high-fidelity prototypes, and cohesive user experiences that bridged the gap between ideation and execution.",
      },
      {
        heading: "Technical Leadership & FE Dev",
        body: "Built the web infrastructure from scratch, managing the technical heavy lifting so leadership could focus on business growth. Led the frontend engineering efforts, ensuring code quality, seamless component structure, and feature delivery.",
      },
    ],
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
    sections: [
      {
        heading: "Brand & Logo Conception",
        body: "Designed a smart, relevant logo that cleverly integrates a microphone and a chat icon, perfectly capturing the essence of the platform. I collaborated closely with the client to fine-tune the color palette, ensuring the final visual identity matched their exact vision and resonated with their target audience.",
      },
      {
        heading: "UI/UX & Design System",
        body: "Architected the complete user flow from the ground up, specifically mapping out the journeys for coaching clients, training modules, and consultation bookings. I built responsive, high-fidelity designs for both web and mobile interfaces. To maintain visual consistency and speed up future development, I also created and applied a comprehensive design system with standardized components and clear interactive flows.",
      },
    ],
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
    sections: [
      {
        heading: "Brand Identity & Logo",
        body: 'Crafted a smart, minimalist logo centered around the letter "V". By styling the initial to resemble tiling and presenting it at a specific isometric angle, the mark cleverly doubles as a visual representation of a floor platform, instantly tying the brand identity to the service it provides.',
      },
      {
        heading: "UI/UX & Platform Design",
        body: "Architected the end-to-end user experience, starting from an engaging landing page all the way through a robust internal application. I designed highly functional flows that allow users to calculate floor areas, generate precise project quotations, issue receipts, and track ongoing projects seamlessly. I delivered cohesive, responsive interfaces for both web and mobile, completely underpinned by a strict design system to ensure long-term consistency and scalability.",
      },
    ],
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
    sections: [
      {
        heading: "Brand Identity & Logo",
        body: "Designed a dynamic logo combining a cloud and a lightning bolt to symbolize modern tech and fast performance. Beyond just the logo, I developed a comprehensive branding package, including custom patterns and varied mockups, giving the client a versatile toolkit to use across their other marketing canvases and materials.",
      },
      {
        heading: "UI/UX Design",
        body: "Focused exclusively on crafting a high-converting, visually engaging landing page. The design prioritized clear messaging, strong visual hierarchy, and a layout that naturally guides the user's eye down the page.",
      },
      {
        heading: "Frontend Development",
        body: "Brought the landing page to life by writing the markup entirely from scratch using raw HTML, CSS, and vanilla JavaScript. I engineered custom, fluid animations without relying on heavy libraries, ensuring the page was not only interactive and polished but also incredibly fast and performant.",
      },
    ],
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
    sections: [
      {
        heading: "Brand Identity & Logo",
        body: 'Designed a clean, straightforward logo featuring the text "123" cleverly integrated with a path that resembles a road. This visual metaphor directly communicates both the concept of business travel and the clear, step-by-step simplicity of the platform itself.',
      },
      {
        heading: "UI/UX & Platform Architecture",
        body: "Architected the complete user journey for tracking and computing business travel expenses, including specific flows for logging food and accommodation. The standout feature I designed was a seamless Google Calendar integration, allowing users to automatically extract their meeting schedules and directly input associated costs. A comprehensive, high-fidelity designs for both web and mobile platforms, ensuring a consistent experience on the go. This included building out a robust design system to standardize all UI components, as well as designing an engaging landing page to drive conversions.",
      },
    ],
  },
  {
    slug: "tenancy",
    title: "Tenancy",
    image: "/images/projects/tenancy.svg",
    imageClass: "max-h-16",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: "https://tenancy.dev/",
    projectUrl: "#",
    sections: [
      {
        heading: "The Approach",
        body: "This project holds a special place in my portfolio as my first major design engagement back in 2017. The objective was to execute a meaningful rebrand, starting from a raw, hand-drawn concept provided directly by the client. The approach was highly collaborative, taking their initial vision and applying structural balance, geometric precision, and professional polish to create a mark that visually captured the team's core mission.",
      },
      {
        heading: "Brand Refinement & Symbolism",
        body: "Evolved a client's initial sketch into a clean, well-proportioned logo that thoughtfully merges three key visual elements into a single, cohesive mark:",
      },
      {
        heading: "The Home",
        body: 'Symbolizes the core concept of digital "tenancy," representing the isolated, secure space or environment assigned to each user or tenant.',
      },
      {
        heading: "The Letter 'T'",
        body: "Serves as a strong typographic anchor, instantly tying the visual identity to the brand name.",
      },
      {
        heading: "The Upward Arrow",
        body: "Integrates a subtle directional cue within the negative space to represent continuous growth, forward progress, and scaling upward.",
      },
    ],
  },
  {
    slug: "elated",
    title: "Elated",
    image: "/images/projects/elated.svg",
    imageClass: "max-h-16",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: null,
    projectUrl: "#",
    sections: [
      {
        heading: "Brand Identity & Logo Design",
        body: "Engineered a clever, multi-layered logo designed to evoke the fun side of programming. The mark seamlessly merges three distinct concepts:",
      },
      {
        heading: 'The Letter "e"',
        body: "A clear, typographic nod to the Elated name.",
      },
      {
        heading: "A Happy Emoji",
        body: "Forms the overall shape of the mark, instantly communicating the community's core mission of happiness, support, and motivation.",
      },
      {
        heading: "A Terminal Icon",
        body: "A classic, familiar symbol that instantly connects with the developer target audience.",
      },
      {
        heading: "Comprehensive Visual System",
        body: "Expanded the core logo into a full branding package to ensure a consistent community experience. This included designing custom branded patterns, defining clear rules for icon usage, and creating a series of realistic mockups to visualize how the brand lives across different touchpoints.",
      },
    ],
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
    sections: [
      {
        heading: "Brand & Logo Refinement",
        body: "Conducted a precise audit of their existing logo, carefully adjusting the stroke weights and spatial balance to ensure it looked sharp, proportional, and highly legible across all digital and print mediums.",
      },
      {
        heading: "UI/UX Design",
        body: "Translated the client's specific design inspirations into a clean, cohesive user interface. The focus was on creating a seamless, professional layout that builds trust and clearly communicates their industrial offerings.",
      },
      {
        heading: "Development & CMS Handoff",
        body: "Built and deployed the fully responsive website on Squarespace. A major focus of the development phase was structuring the backend to be exceptionally client-friendly, ensuring their team could easily maintain the site, update content quickly, and manage their online presence without needing ongoing technical support.",
      },
    ],
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
    sections: [
      {
        heading: "Brand Conception & Symbolism",
        body: "Designed a cohesive, multi-layered logo that visually translates the company's technical expertise and mission to streamline operations. The mark merges three distinct concepts:",
      },
      {
        heading: "Dashboard Icon / 4 Squares",
        body: "Represents the core product—custom dashboards—while symbolizing control, management, and organized data solutions for B2B clients.",
      },
      {
        heading: 'The "ID" Initials',
        body: "Seamlessly integrated the letters into the geometric structure to personalize the mark and reinforce strong brand recognition.",
      },
      {
        heading: "3D Blocks & Tech Nod",
        body: "Utilized 3D building blocks to convey stability, structure, and reliability. As a smart, subtle nod to their engineering stack, the isometric design draws inspiration from the Laravel logo, aligning their visual identity perfectly with the robust framework powering their applications.",
      },
    ],
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
    sections: [
      {
        heading: "UI/UX Modernization & Handoff",
        body: "Led the redesign of the legacy interface, giving it a clean, modern aesthetic. I migrated and structured the entire design system within Figma, establishing a single source of truth. This meticulous organization made it incredibly convenient for the development team to extract assets, understand component states, and implement the designs accurately.",
      },
      {
        heading: "Frontend Engineering",
        body: "Actively contributed to the Vue.js codebase. My development efforts were heavily focused on building out new, robust features and conducting deep-dive bug fixes to ensure the application was not only visually refreshed but also highly stable and performant.",
      },
    ],
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
    sections: [
      {
        heading: "Brand Identity & Logo Design",
        body: "Created a bespoke logo specifically tailored to anchor the portfolio's visual identity. This mark served as the foundational design system, directly informing the typography, spacing, and structural elements of the entire UI.",
      },
      {
        heading: "UI/UX & Visual Design",
        body: "Architected the complete user interface, presenting the client with fully realized variations for both dark and light modes. To elevate the user experience and create a sense of depth and interactivity, I strategically integrated floating 3D elements throughout the layout, giving the portfolio a dynamic, cutting-edge aesthetic.",
      },
    ],
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
    sections: [
      {
        heading: "Brand Concept & Symbolism",
        body: 'Designed a bespoke logo directly inspired by the anatomy of a flower. I carefully abstracted its organic shapes into a clean, scalable mark that retains its natural, welcoming feel while remaining highly professional. Expanded the central floral motif into a complete branding package. This involved establishing a cohesive color palette and design system that allows the brand to naturally "bloom" across various digital and physical touchpoints, ensuring a consistent and memorable brand experience.',
      },
    ],
  },
  {
    slug: "camp-diego-garcia",
    title: "Camp Diego Garcia",
    image: "/images/projects/cdg.svg",
    imageClass: "max-h-[160px]",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: "#",
    projectUrl: "#",
    sections: [
      {
        heading: "Brand Conception & Symbolism",
        body: 'As a personal family project, the creative direction was highly collaborative and passion-driven. The final emblem perfectly encapsulates the warmth and energy of a family-run surf camp. Crafted a meaningful, multifaceted logo that cleverly weaves together the core elements of the camp\'s experience. I integrated the "DG" initials with the fluid, dynamic motion of a wave and the grounded, welcoming shape of a tent.',
      },
    ],
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
    sections: [
      {
        heading: "Brand Identity & Logo Design",
        body: 'Engineered a clever, astronomy-inspired logo built from the letter "e". By abstracting the letterform, I transformed it into a planet orbited by a shooting star, creating a mark that is both a strong typographic anchor and a vivid visual metaphor for the Extiverse name - a universe of extensions.',
      },
    ],
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
    sections: [
      {
        heading: "Brand & Portfolio Design",
        body: "Designed the complete visual identity and portfolio website for a long-time client in web development. The goal was to create a personal brand that authentically represented their years of experience and career journey, presenting their technical background and projects in a compelling, professional digital space.",
      },
    ],
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
    sections: [
      {
        heading: "Landing Page Design",
        body: "Designed and built a polished, conversion-focused landing page for an e-learning school. The layout was crafted to clearly communicate the school's offerings, build trust with prospective students, and guide visitors toward enrollment.",
      },
    ],
  },
  {
    slug: "naks-choice",
    title: "Nak's Choice",
    image: "/images/projects/naks.svg",
    imageClass: "max-h-[70px]",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: "#",
    projectUrl: "#",
    sections: [
      {
        heading: "Brand Identity & Logo Design",
        body: "Designed a logo for a friend's online grocery business that launched during the pandemic in the Philippines. The mark cleverly merges the \"N\" and \"C\" initials with the shape of a shopping cart, creating a symbol that's instantly recognizable and directly communicates the nature of the business.",
      },
    ],
  },
  {
    slug: "threat-note",
    title: "Threat Note",
    image: "/images/projects/threat-note.svg",
    imageClass: "max-h-[70px]",
    badges: [{ variant: "brand", label: "Logo" }],
    siteUrl: "#",
    projectUrl: "#",
    sections: [
      {
        heading: "Brand Concept & Symbolism",
        body: "Engineered a clever, dual-meaning logo that flawlessly integrates the robust silhouette of a security shield with the sharp tip of a pencil. This combined mark perfectly and instantly communicates the platform's core value proposition of secure data logging and threat analysis.",
      },
    ],
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
    sections: [
      {
        heading: "Brand Concept & Logo",
        body: "Designed a clever, dynamic logo by using the shape of curved tickets to form the letter \"t\". This custom monogram instantly communicates the platform's core service while serving as a strong, memorable anchor for the brand identity.",
      },
      {
        heading: "UI/UX & Transaction Architecture",
        body: "Architected the complete end-to-end user experience for event management and ticket purchasing. I mapped out intuitive, high-conversion transaction flows that allow users to easily browse events, secure their spots, and seamlessly generate their digital tickets without any friction.",
      },
      {
        heading: "Frontend Engineering",
        body: "Built and deployed the platform's frontend using Vue.js. The development focused heavily on creating a snappy, reactive application capable of handling complex state management during the checkout process, ensuring a secure and smooth experience for every user.",
      },
    ],
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
    sections: [
      {
        heading: "Concept & Research",
        body: "A concept and research project exploring the design space for an esports betting platform. The visual direction drew heavy inspiration from 90s retro aesthetics — bold typography, vivid colors, and nostalgic UI patterns — reimagined for a modern, competitive gaming audience.",
      },
    ],
  },
];
