import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CustomCursor from "@/components/motion/CustomCursor";
import PageTransition from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  title: "Roshan Khadka — Designer & Developer",
  description:
    "UI/UX Designer and Frontend Developer based in Kathmandu, Nepal. Building thoughtful, refined digital experiences that make a difference.",
  keywords: [
    "UI/UX Designer",
    "Frontend Developer",
    "Next.js",
    "Portfolio",
    "Kathmandu",
    "Nepal",
  ],
  authors: [{ name: "Roshan Khadka" }],
  creator: "Roshan Khadka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roshankhadka.dev",
    title: "Roshan Khadka — Designer & Developer",
    description:
      "UI/UX Designer and Frontend Developer based in Kathmandu, Nepal. Building thoughtful, refined digital experiences.",
    siteName: "Roshan Khadka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Khadka — Designer & Developer",
    description:
      "UI/UX Designer and Frontend Developer based in Kathmandu, Nepal.",
    creator: "@roshankhadka",
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
