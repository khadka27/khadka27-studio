export interface Project {
  id?: string;
  slug: string;
  title: string;
  year: string;
  date?: string;
  type: string;
  category: string[];
  shortDescription: string;
  excerpt: string;
  description: string;
  tools: string[];
  roles: string[];
  client: string;
  thumbnail: string;
  heroImage: string;
  images: string[];
  gallery: string[];
  featured: boolean;
  challenge: string;
  solution: string;
  results: string[];
  outcome: string;
  designDetails?: string;
  relatedProjects: string[];
  accentColor?: string;
}

export const rawProjects = [
  {
    id: "ismt-tiktok-campaign",
    title: "ISMT College TikTok Growth Campaign",
    slug: "ismt-tiktok-campaign",
    category: ["Social Media", "Video", "Content Strategy"],
    description: "Comprehensive TikTok content strategy for ISMT College focusing on campus life, student stories, and trending formats to increase Gen Z engagement.",
    excerpt: "TikTok campaign that boosted student engagement by 250%.",
    thumbnail: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800",
    heroImage: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2024-06",
    client: "ISMT College",
    tools: ["TikTok", "CapCut", "Canva", "DSLR Camera"],
    featured: true,
    challenge: "ISMT College needed to increase their visibility among Gen Z students and showcase campus life in an authentic, engaging way that resonated with younger audiences.",
    solution: "Created original TikTok content leveraging trending formats and student-focused storytelling. Captured high-quality DSLR footage of campus events and edited with CapCut to create thumb-stopping videos optimized for the platform.",
    results: [
      "250% increase in student engagement",
      "Tripled follower count in 3 months",
      "15+ viral videos with 100K+ views",
      "Established strong Gen Z brand presence"
    ],
    images: [
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: "ismt-social-media-strategy",
    title: "ISMT Multi-Platform Content Strategy",
    slug: "ismt-social-media-strategy",
    category: ["Social Media", "Content Strategy", "Analytics"],
    description: "Developed and executed comprehensive content strategy across Instagram, Facebook, and TikTok with data-driven optimization.",
    excerpt: "Multi-platform strategy driving 180% engagement increase.",
    thumbnail: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    heroImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2024-04",
    client: "ISMT College",
    tools: ["Meta Business Suite", "Instagram Insights", "Google Analytics", "Canva", "Adobe Photoshop"],
    featured: true,
    challenge: "Create cohesive content strategy across multiple platforms while maintaining consistent branding and maximizing engagement with limited resources.",
    solution: "Researched audience preferences and developed platform-specific content calendars. Used Meta Business Suite and Instagram Insights to analyze performance and iterate on content strategy. Created branded templates in Canva and Photoshop for efficient production.",
    results: [
      "180% increase in overall engagement",
      "Improved follower retention by 65%",
      "45% increase in website traffic from social",
      "Consistent daily posting maintained"
    ],
    images: [
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: "campus-event-coverage",
    title: "Campus Event Photography & Video",
    slug: "campus-event-coverage",
    category: ["Video", "Photography", "Event"],
    description: "Professional DSLR photography and videography of campus events, edited into engaging social media content.",
    excerpt: "Professional event coverage increasing student interaction.",
    thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    heroImage: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2024-03",
    client: "ISMT College",
    tools: ["DSLR Camera", "Adobe Premiere Pro", "CapCut", "Adobe Photoshop"],
    featured: true,
    challenge: "Capture the energy and excitement of campus events in a way that showcases college life and encourages prospective student applications.",
    solution: "Used professional DSLR cameras to capture high-quality photos and videos of campus events. Applied advanced editing techniques and storytelling principles to create shareable content that resonated with students.",
    results: [
      "Increased student interaction by 120%",
      "20+ successful event coverages",
      "Content used in admission marketing",
      "Boosted campus community engagement"
    ],
    images: [
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: "paid-ad-campaigns",
    title: "Facebook & Instagram Paid Ad Campaigns",
    slug: "paid-ad-campaigns",
    category: ["Paid Advertising", "Social Media"],
    description: "Targeted paid advertising campaigns on Facebook and Instagram with A/B testing and audience optimization.",
    excerpt: "Data-driven ad campaigns achieving 3.5x ROI.",
    thumbnail: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=800",
    heroImage: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2024-02",
    client: "Various Clients",
    tools: ["Facebook Ads Manager", "Instagram Ads", "Meta Business Suite", "Google Analytics"],
    featured: false,
    challenge: "Maximize return on ad spend through strategic audience targeting, compelling ad creative, and continuous optimization.",
    solution: "Conducted thorough audience research and created multiple ad variations for A/B testing. Monitored performance metrics daily and optimized targeting, creative, and budget allocation based on data insights.",
    results: [
      "Average ROI of 3.5x across campaigns",
      "42% lower cost per acquisition",
      "Campaign reach of 500K+ users",
      "Conversion rate improved by 65%"
    ],
    images: [
      "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: "brand-identity-design",
    title: "Social Media Brand Identity Design",
    slug: "brand-identity-design",
    category: ["Branding", "Design"],
    description: "Created cohesive visual brand identity and design templates for consistent social media presence.",
    excerpt: "Brand design system improving content recognition.",
    thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    heroImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2024-01",
    client: "ISMT College",
    tools: ["Canva", "Adobe Photoshop", "Figma"],
    featured: false,
    challenge: "Establish consistent visual branding across all social platforms to improve brand recognition and professional appearance.",
    solution: "Designed comprehensive brand guidelines and created reusable templates in Canva and Photoshop. Developed post templates, story templates, and graphic elements aligned with college branding.",
    results: [
      "95% brand consistency achieved",
      "Content production time reduced by 40%",
      "Improved brand recognition among students",
      "50+ reusable templates created"
    ],
    images: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: "content-calendar-management",
    title: "Strategic Content Calendar Management",
    slug: "content-calendar-management",
    category: ["Content Strategy", "Planning"],
    description: "Comprehensive content planning and calendar management ensuring consistent, timely delivery across all platforms.",
    excerpt: "Calendar system ensuring 100% on-time delivery.",
    thumbnail: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800",
    heroImage: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2023-12",
    client: "ISMT College",
    tools: ["Google Calendar", "Later", "Meta Business Suite", "Trello"],
    featured: false,
    challenge: "Maintain consistent posting schedule across multiple platforms while balancing content quality and team collaboration.",
    solution: "Developed systematic content calendar using Google Calendar and scheduling tools like Later. Coordinated with design and marketing teams to ensure aligned messaging and timely content delivery.",
    results: [
      "100% on-time content delivery",
      "3 months of content planned in advance",
      "Improved team collaboration efficiency",
      "Enhanced audience trust through consistency"
    ],
    images: [
      "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  }
];

export const projects: Project[] = rawProjects.map((p, idx, arr) => {
  const otherSlugs = arr.filter((_, i) => i !== idx).map((item) => item.slug);
  return {
    ...p,
    year: p.date ? p.date.split("-")[0] : "2024",
    type: p.category[0] || "Social Media",
    shortDescription: p.excerpt,
    gallery: p.images,
    roles: ["Content Creator", "Digital Strategist"],
    outcome: p.results.join(". "),
    designDetails: `Developed using ${p.tools.join(", ")} to craft highly engaging visual narratives aligned with brand voice and targeted audience demographics.`,
    relatedProjects: otherSlugs.slice(0, 2),
    accentColor: idx % 2 === 0 ? "#8B2020" : "#2E3A2B",
  };
});

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return slugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as Project[];
}
