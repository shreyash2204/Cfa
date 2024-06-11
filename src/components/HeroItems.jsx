import React, { useEffect, useRef } from "react";
import Button from "./Button";
import gsap from "gsap";

const HeroItems = ({ imgUrl, text }) => {
  const heroText = useRef(null);

  useEffect(() => {
    gsap.from(heroText.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.25,
      ease: "power.out",
    });
  }, []);

  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 bg-neutral-500 opacity-35 z-[-1]"></div>
      <img
        src={imgUrl}
        className="h-full w-full object-cover absolute z-[-2] "></img>
      <div
        className=" h-full w-[90%] md:w-[80%] mx-auto flex text-white items-start justify-center flex-col gap-2 md:gap-4"
        ref={heroText}>
        <h1 className="text-2xl text-orange-500 font-semibold ">
          Here at Care For All
        </h1>
        <p className="text-5xl md:text-6xl font-medium md:w-[65%]">
          We aim for a straight forward but significant goal
        </p>
        <p className="md:text-lg md:w-[65%]">{text}</p>
        <Button name="Learn More" />
      </div>
    </div>
  );
};

export default HeroItems;
