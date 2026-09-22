import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CustomCursor from "@/components/motion/CustomCursor";
import PageTransition from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  title: "Raj Gupta — Content Creator | Social Media Manager | Digital Marketing Specialist",
  description:
    "A creative and digitally savvy content creator based in London, UK. Crafting engaging content that drives results across all major platforms.",
  keywords: [
    "Raj Gupta",
    "Content Creator",
    "Social Media Manager",
    "Digital Marketing Specialist",
    "London",
    "TikTok Marketing",
    "Paid Advertising",
    "Video Editing",
  ],
  authors: [{ name: "Raj Gupta" }],
  creator: "Raj Gupta",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://rajgupta.dev",
    title: "Raj Gupta — Content Creator & Digital Marketing Specialist",
    description:
      "Crafting engaging content that drives results across all major platforms. London, UK.",
    siteName: "Raj Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Gupta — Content Creator & Digital Marketing Specialist",
    description:
      "Crafting engaging content that drives results across all major platforms.",
    creator: "@thefoodiety",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SmoothScroll>
          <PageTransition>
            <CustomCursor />
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
