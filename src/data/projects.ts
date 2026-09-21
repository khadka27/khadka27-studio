export interface Project {
  slug: string;
  title: string;
  year: string;
  type: string;
  shortDescription: string;
  description: string;
  tools: string[];
  roles: string[];
  client: string;
  thumbnail: string;
  gallery: string[];
  challenge: string;
  solution: string;
  designDetails: string;
  outcome: string;
  relatedProjects: string[];
  accentColor?: string;
}

export const projects: Project[] = [
  {
    slug: "sathi",
    title: "SATHI",
    year: "2025",
    type: "Mobile App Design",
    shortDescription:
      "A mental health companion app designed to make emotional support accessible and stigma-free for young Nepalis.",
    description:
      "SATHI is a concept-based mental health companion app designed to make emotional support accessible, stigma-free, and deeply personal for young Nepalis. The product centers human connection above all else — pairing users with certified counselors while offering AI-assisted mood tracking.",
    tools: ["Figma", "React Native", "Node.js", "PostgreSQL"],
    roles: ["UI/UX Designer", "Frontend Developer"],
    client: "Self-Initiated",
    thumbnail: "/images/projects/sathi/thumbnail.jpg",
    gallery: [
      "/images/projects/sathi/gallery-1.jpg",
      "/images/projects/sathi/gallery-2.jpg",
      "/images/projects/sathi/gallery-3.jpg",
    ],
    challenge:
      "Mental health stigma in Nepal means that most users won't seek help openly. The design needed to feel private, safe, and genuinely warm — while still professional enough to build trust with a clinical audience.",
    solution:
      "We developed a calm, human-first visual language using warm earth tones and generous whitespace. Onboarding was reimagined as a conversation rather than a form. The information architecture hides clinical complexity behind a simple journal-first interface.",
    designDetails:
      "Typography uses a blend of a humanist serif for empathy-building headings and Inter for functional UI elements. The color system was derived from Nepali landscape references — terracotta, sage, and cream — intentionally avoiding the sterile blues common in health apps.",
    outcome:
      "The prototype received overwhelmingly positive feedback from a user study of 40 participants aged 18–28. 87% rated it 'more approachable than other mental health apps they'd seen.' Currently in development with a local NGO partner.",
    relatedProjects: ["smart-docs", "song-playlist"],
    accentColor: "#C4A882",
  },
  {
    slug: "smart-docs",
    title: "Smart Docs",
    year: "2025",
    type: "Web Application",
    shortDescription:
      "An AI-powered document management platform that turns unstructured data into structured, searchable knowledge.",
    description:
      "Smart Docs is an AI-powered document management platform that transforms raw, unstructured data into clean, searchable, and interconnected knowledge — built for teams that care deeply about their information architecture.",
    tools: ["Next.js", "TypeScript", "OpenAI API", "Prisma", "PostgreSQL"],
    roles: ["Full-Stack Developer", "Product Designer"],
    client: "Startup Project",
    thumbnail: "/images/projects/smart-docs/thumbnail.jpg",
    gallery: [
      "/images/projects/smart-docs/gallery-1.jpg",
      "/images/projects/smart-docs/gallery-2.jpg",
    ],
    challenge:
      "Most document tools treat files as isolated objects. Smart Docs needed to surface relationships between documents, surface key insights, and make search feel conversational — all without overwhelming the user.",
    solution:
      "We built a graph-based document relationship engine on top of PostgreSQL with pgvector for semantic search. The frontend abstracts all complexity into a clean three-panel layout: navigation, document view, and AI assistant sidebar.",
    designDetails:
      "The interface uses a disciplined monochromatic system — near-black sidebar, white content area, subtle grey AI panel. Typography is strictly functional: Inter throughout, with bold weights reserved for document titles and user prompts only.",
    outcome:
      "Launched to a beta cohort of 200 users. Average session duration increased 3× compared to their previous tools. Featured in a Nepali tech newsletter as one of the most promising local SaaS products of 2025.",
    relatedProjects: ["futsal-nepal", "sathi"],
    accentColor: "#4A6741",
  },
  {
    slug: "futsal-nepal",
    title: "Futsal Nepal Pro Zone",
    year: "2024",
    type: "Web Platform",
    shortDescription:
      "A booking and tournament management platform for Nepal's rapidly growing futsal community.",
    description:
      "Futsal Nepal Pro Zone is a comprehensive booking and tournament management platform for Nepal's rapidly growing futsal community — connecting court owners, players, and tournament organizers in one seamless ecosystem.",
    tools: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind CSS"],
    roles: ["Frontend Developer", "UI Designer"],
    client: "Futsal Nepal Association",
    thumbnail: "/images/projects/futsal-nepal/thumbnail.jpg",
    gallery: [
      "/images/projects/futsal-nepal/gallery-1.jpg",
      "/images/projects/futsal-nepal/gallery-2.jpg",
    ],
    challenge:
      "Court bookings in Nepal were entirely offline — phone calls, WhatsApp, and manual ledger management. The product needed to serve both tech-savvy urban players and less digitally fluent court owners simultaneously.",
    solution:
      "A dual-interface approach: a mobile-first booking app for players and a simplified admin dashboard for court owners. Both share the same design language but are optimized for their respective user mental models.",
    designDetails:
      "The visual system uses deep green and white — the natural colors of a futsal court — as primary anchors. The booking flow was designed to complete in under 60 seconds with zero dead-ends and clear recovery paths.",
    outcome:
      "Launched with 12 courts across Kathmandu. Over 1,200 bookings processed in the first three months. Court utilization increased by 40% on average. Now expanding to Pokhara and Butwal.",
    relatedProjects: ["smart-docs", "car-collection"],
    accentColor: "#2D5A3D",
  },
  {
    slug: "song-playlist",
    title: "Song Playlist",
    year: "2024",
    type: "App Redesign",
    shortDescription:
      "A concept redesign of a music streaming experience focused on discovery, emotion, and visual storytelling.",
    description:
      "Song Playlist is a concept-based music streaming app redesign focused on improving user engagement and usability through emotional design, intelligent discovery, and a visual language that matches the feeling of music itself.",
    tools: ["Figma", "Framer", "React", "Tailwind CSS"],
    roles: ["UI/UX Designer", "Interaction Designer"],
    client: "Concept Project",
    thumbnail: "/images/projects/song-playlist/thumbnail.jpg",
    gallery: [
      "/images/projects/song-playlist/gallery-1.jpg",
      "/images/projects/song-playlist/gallery-2.jpg",
    ],
    challenge:
      "Existing music apps prioritize catalog breadth over the listening experience. Users feel overwhelmed by choice and disconnected from the emotion of the music. The redesign needed to bring the feeling back.",
    solution:
      "Redesigned around three core emotional states: Discovery, Focus, and Drift. Each mode shifts the interface's visual density, color temperature, and content hierarchy — dynamically responding to what the user wants to feel, not just hear.",
    designDetails:
      "Album artwork becomes the interface. Aggressive full-bleed album art with a sophisticated color extraction algorithm drives the UI palette per-track. Typography uses a large editorial serif for song titles — treating music like editorial content.",
    outcome:
      "The redesign was shared on Dribbble and received over 2,400 views in the first week. Selected as a case study at a local UX meetup. Several patterns have since been borrowed into real products.",
    relatedProjects: ["sathi", "car-collection"],
    accentColor: "#7B3F6E",
  },
  {
    slug: "car-collection",
    title: "Sports & Luxury Cars",
    year: "2024",
    type: "E-Commerce Platform",
    shortDescription:
      "A premium digital showroom for high-end sports and luxury vehicles — where the car is always the hero.",
    description:
      "Sports & Luxury Car Collection is a premium digital showroom experience for high-end vehicles. The brief was simple: make the car the hero. Everything else — UI, navigation, copy — exists only to frame and elevate the product.",
    tools: ["Next.js", "TypeScript", "Three.js", "Framer Motion", "Stripe"],
    roles: ["Frontend Developer", "Creative Director"],
    client: "Auto Dealer, Kathmandu",
    thumbnail: "/images/projects/car-collection/thumbnail.jpg",
    gallery: [
      "/images/projects/car-collection/gallery-1.jpg",
      "/images/projects/car-collection/gallery-2.jpg",
    ],
    challenge:
      "Luxury car buyers expect an experience that matches the caliber of the product. Generic e-commerce templates destroy the premium perception. The product needed to feel closer to a magazine editorial than a shopping cart.",
    solution:
      "A cinematic, full-screen presentation layer where each vehicle gets its own visual treatment. Large format photography, animated specifications panels, and a minimal-chrome interface inspired by automotive print advertising.",
    designDetails:
      "The design system uses a strict black-and-white palette punctuated by the natural colors of each vehicle. Headings use a custom-weighted condensed typeface. White space is treated as a luxury asset, not empty space.",
    outcome:
      "Conversion rate improved 28% vs the client's previous platform. Average time-on-page increased from 1.2 to 4.7 minutes. Three vehicles sold directly through the platform in the first month of launch.",
    relatedProjects: ["futsal-nepal", "song-playlist"],
    accentColor: "#8B1C1C",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return slugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as Project[];
}
