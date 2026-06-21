"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Competitions from "@/components/Competitions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import AudioGate from "@/components/AudioGate";

export default function Home() {
  return (
    <main
      className="relative isolate min-h-screen overflow-x-hidden text-white"
      style={{ background: "var(--page-bg)" }}
    >
      <BackgroundEffects />

      <div className="relative z-10">
        <AudioGate />
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Competitions />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}