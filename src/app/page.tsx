"use client";

import { useState } from "react";
import Preloader from "@/components/home/Preloader";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CurvedTransition from "@/components/motion/CurvedTransition";
import WhatIDo from "@/components/home/WhatIDo";
import CurvedMarquee from "@/components/home/CurvedMarquee";
import WorkSection from "@/components/home/WorkSection";
import BehindScenes from "@/components/home/BehindScenes";
import About from "@/components/home/About";
import DesignerCoder from "@/components/home/DesignerCoder";
import Experience from "@/components/home/Experience";
import CapturedMoments from "@/components/home/CapturedMoments";
import ContactCTA from "@/components/home/ContactCTA";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />

      <div className={`transition-opacity duration-500 ${preloaderDone ? "opacity-100" : "opacity-0"}`}>
        <Header />

        <main>
          <Hero />
          <CurvedTransition from="light" to="dark" />
          <WhatIDo />
          <CurvedMarquee count={6} label="Selected Work/" speed={0.8} />
          <WorkSection />
          <BehindScenes />
          <CurvedTransition from="dark" to="light" />
          <About />
          <DesignerCoder />
          <CurvedTransition from="light" to="dark" />
          <Experience />
          <CurvedMarquee count={5} label="Captured Moments/" speed={0.6} direction="right" />
          <CapturedMoments />
          <CurvedTransition from="dark" to="light" />
          <ContactCTA />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
