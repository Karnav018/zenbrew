"use client";
import Separator from "./Separator";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white">
      {/* overlay */}
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]"></div>
      {/* video */}
      <video
        autoPlay
        loop
        muted
        className=" absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container max-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        {/* Text */}
        <div className="">
           
        </div>
      </div>
    </section>
  );
};

export default Hero;
