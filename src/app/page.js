"use client";
import { useEffect } from "react";

//Components
import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import About from "@/components/About";

const Home = () => {
  //add locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />
      {/* Temporary */}
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default Home;
