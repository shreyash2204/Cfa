import React, { useEffect, useRef } from "react";
import WeDoCard from "./WeDoCard";
import { wedoData } from "../data";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const wedoText = useRef(null);
  // const wedoCard = useRef(null);

  useEffect(() => {
    gsap.from(wedoText.current, {
      scrollTrigger: {
        trigger: wedoText.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power.out",
    });
  }, []);

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto py-12 overflow-hidden">
      <div
        className=" mb-12 flex flex-col items-center justify-center text-center gap-4"
        ref={wedoText}>
        <h2 className="text-xl text-orange-500 font-semibold">What We Do?</h2>
        <h3 className="text-5xl font-medium">
          We Belive that we can save
          <br />
          more life with you
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(320px,_1fr))] place-content-center gap-6">
        {wedoData.map((wedo) => (
          <WeDoCard key={wedo.id} {...wedo} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
