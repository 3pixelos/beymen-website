"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Restaurants from "@/components/Restaurants";
import CircularGallery from "@/components/CircularGallery";
import Reviews from "@/components/Reviews";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // buttery smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    let raf: number;
    const tick = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  // lock scroll during the intro
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <main>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Navbar />
      <Hero started={!loading} />
      <About />
      <Restaurants />
      <CircularGallery />
      <Reviews />
      <MapSection />
      <Footer />
    </main>
  );
}
