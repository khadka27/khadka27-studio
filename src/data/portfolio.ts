export const creatorInfo = {
  name: "Raj Gupta",
  title: "Content Creator | Social Media Manager | Digital Marketing Specialist",
  tagline: "Crafting engaging content that drives results across all major platforms.",
  bio: "A creative and digitally savvy content creator with a strong command of major social media platforms including Instagram, Facebook, TikTok, LinkedIn, YouTube, and X. Experienced in crafting engaging content across formats: text, image, and video paired with skills in graphic design and video editing. Proficient in content planning, social media analytics, and running targeted paid ad campaigns with A/B testing. Passionate about digital marketing, community engagement, and using AI tools like ChatGPT to enhance content strategy and execution. Currently pursuing MSc in Digital Marketing at University of West London with a background in Computer Systems Engineering.",
  email: "rajg45681@gmail.com",
  phone: "07472062257",
  location: "London, UK",
  image: "/Images/raj_gupta.png",
  socialLinks: {
    youtube: "https://youtube.com",
    instagram: "https://www.instagram.com/thefoodiety/",
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com/in/raj-gupta-3b88102b3/",
    tiktok: "https://www.tiktok.com/@thefoodiety",
  },
};

export const stats = [
  { label: "Platforms Managed", value: "6+" },
  { label: "Content Pieces", value: "500+" },
  { label: "Engagement Rate", value: "85%" },
  { label: "Campaigns Delivered", value: "50+" },
];

export const services = [
  {
    title: "Content Creation",
    description:
      "End-to-end content production across text, image, and video formats. From ideation to execution, I create platform-optimized content that resonates with your target audience.",
    icon: "video",
  },
  {
    title: "Video Editing",
    description:
      "Professional video editing using CapCut and Adobe Premiere Pro. Specializing in short-form content for TikTok, Instagram Reels, and YouTube Shorts with strong storytelling focus.",
    icon: "film",
  },
  {
    title: "Social Media Strategy",
    description:
      "Data-driven social media strategies backed by analytics from Meta Business Suite, Instagram Insights, and Google Analytics. A/B testing and audience targeting for optimal results.",
    icon: "chart",
  },
  {
    title: "Paid Advertising",
    description:
      "Facebook and Instagram paid ad campaigns with strategic audience targeting and A/B testing. Proven track record of maximizing ROI through data-informed optimization.",
    icon: "sparkles",
  },
];

export const strengths = [
  {
    title: "Platform Expertise",
    description: "Deep understanding of Facebook, Instagram, TikTok, LinkedIn, YouTube, and X/Twitter",
  },
  {
    title: "Content Versatility",
    description: "Skilled in creating text, image, and video content across all formats",
  },
  {
    title: "Design & Editing",
    description: "Proficient in Canva, Adobe Photoshop, CapCut, and Adobe Premiere Pro",
  },
  {
    title: "Data-Driven Approach",
    description: "Analytics expertise with Meta Business Suite, Instagram Insights, and Google Analytics",
  },
  {
    title: "AI Integration",
    description: "Leveraging AI tools like ChatGPT to enhance content strategy and efficiency",
  },
  {
    title: "Strategic Planning",
    description: "Expert in content calendars, scheduling, and cross-platform campaign management",
  },
];

export const achievements = [
  {
    year: "2024",
    title: "MSc Digital Marketing",
    organization: "University of West London",
  },
  {
    year: "2024",
    title: "Digital Marketing Certification",
    organization: "HubSpot Academy",
  },
  {
    year: "2024",
    title: "Google Analytics Certification",
    organization: "Google",
  },
  {
    year: "2023",
    title: "Bachelor in Computer Systems Engineering",
    organization: "ISMT College",
  },
];

export const testimonials = [
  {
    name: "ISMT College Marketing Team",
    role: "Marketing Director",
    company: "ISMT College",
    content:
      "Raj's content creation skills transformed our social media presence. His TikTok content strategy significantly increased student engagement and brand visibility among Gen Z audiences.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Student Affairs Department",
    role: "Department Head",
    company: "ISMT College",
    content:
      "Working with Raj was exceptional. His ability to capture campus life through photos and videos, combined with his design skills, elevated our visual communication across all platforms.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Social Media Coordinator",
    role: "Digital Marketing Lead",
    company: "ISMT College",
    content:
      "Raj's analytical approach to content creation, using Meta Business Suite and Instagram Insights, helped us understand our audience better and create more targeted, effective campaigns.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Brand Manager",
    role: "Communications Manager",
    company: "ISMT College",
    content:
      "His content calendar management and consistent delivery ensured our social media stayed active and engaging. Raj's collaborative approach made working with him a pleasure.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export const toolsAndSkills = {
  editing: ["Adobe Premiere Pro", "CapCut", "DSLR Photography"],
  design: ["Canva", "Adobe Photoshop", "Figma"],
  platforms: ["Facebook", "Instagram", "TikTok", "LinkedIn", "YouTube", "X/Twitter"],
  analytics: ["Meta Business Suite", "Instagram Insights", "Google Analytics", "Facebook Ads Manager"],
  other: ["Copywriting", "A/B Testing", "Content Strategy", "AI Tools (ChatGPT)", "UI/UX Design"],
};

export const allSkillsList = [
  ...toolsAndSkills.editing,
  ...toolsAndSkills.design,
  ...toolsAndSkills.platforms,
  ...toolsAndSkills.analytics,
  ...toolsAndSkills.other,
];

export const portfolioData = {
  name: creatorInfo.name,
  firstName: "Raj",
  lastName: "Gupta",
  initials: "RG",
  role: creatorInfo.title,
  tagline: "Content Creator & Digital Strategist",
  email: creatorInfo.email,
  phone: creatorInfo.phone,
  location: creatorInfo.location,
  image: creatorInfo.image,
  availability: "AVAILABLE FOR COLLABORATION",
  availabilityDate: "LONDON'2026",
  introduction: creatorInfo.tagline,
  bio: creatorInfo.bio,
  about: creatorInfo.bio,
  socialLinks: {
    linkedin: creatorInfo.socialLinks.linkedin,
    instagram: creatorInfo.socialLinks.instagram,
    twitter: creatorInfo.socialLinks.twitter,
    tiktok: creatorInfo.socialLinks.tiktok,
    youtube: creatorInfo.socialLinks.youtube,
    github: "https://github.com",
  },
  resumeUrl: "/Raj%20CV.pdf",
  stats,
  services: [
    {
      id: "01",
      title: "Content Creation",
      shortTitle: "Content",
      description: services[0].description,
      capabilities: [
        "Text, Graphic & Short-Form Video Formats",
        "Multi-Platform Ideation & Viral Hook Scripting",
        "Audience Engagement & Community Building",
        "High-Converting Visual Storytelling",
        "Platform-Specific Content Algorithms",
      ],
    },
    {
      id: "02",
      title: "Video Editing",
      shortTitle: "Editing",
      description: services[1].description,
      capabilities: [
        "Adobe Premiere Pro & CapCut Short-Form Pacing",
        "TikTok, Reels & YouTube Shorts Optimization",
        "Dynamic Motion Graphics & Caption Styling",
        "Color Grading & Audio Master Sweetening",
        "DSLR Footage Color Correction",
      ],
    },
    {
      id: "03",
      title: "Social Media Strategy",
      shortTitle: "Strategy",
      description: services[2].description,
      capabilities: [
        "Data-Driven Growth with Meta Business Suite",
        "Instagram Insights & Google Analytics Auditing",
        "Strategic Content Calendars & Editorial Planning",
        "Audience Segmentation & Demographic Targeting",
        "AI Workflow Integration (ChatGPT Prompt Systems)",
      ],
    },
    {
      id: "04",
      title: "Paid Advertising",
      shortTitle: "Paid Ads",
      description: services[3].description,
      capabilities: [
        "Facebook & Instagram Ads Campaign Architecture",
        "Creative & Copy A/B Testing Matrix",
        "Target ROAS & Cost-Per-Acquisition Optimization",
        "Retargeting Funnels & Custom Audience Lookalikes",
        "Conversion Rate Optimization (CRO)",
      ],
    },
  ],
  experience: [
    {
      year: "2024–Present",
      title: "MSc in Digital Marketing",
      company: "University of West London",
      description:
        "Advancing strategic marketing frameworks, consumer behavior modeling, predictive analytics, and multichannel digital campaign architecture.",
    },
    {
      year: "2023–2024",
      title: "Social Media & Content Growth Lead",
      company: "ISMT College",
      description:
        "Led cross-platform campaigns across TikTok, Instagram, and Facebook. Tripled student community engagement by 250% and generated 15+ viral videos exceeding 100K views.",
    },
    {
      year: "2024",
      title: "Certified Digital Marketer & Data Analyst",
      company: "HubSpot Academy & Google",
      description:
        "Attained professional certifications in HubSpot Inbound Marketing and Google Analytics 4, mastering conversion attribution and data-informed funnel optimization.",
    },
    {
      year: "2019–2023",
      title: "BSc Computer Systems Engineering",
      company: "ISMT College",
      description:
        "Built deep computational and systems-level foundation in software engineering, algorithms, and analytical logic — powering a unique data-backed marketing edge.",
    },
  ],
  achievements,
  strengths,
  testimonials,
  toolsAndSkills,
  skills: allSkillsList,
};
