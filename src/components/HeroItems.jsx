import React from "react";
import images from "../assets/images";
import Button from "./Button";

const HeroItems = () => {
  return (
    <div className="h-screen relative">
        <div className="absolute inset-0 bg-neutral-500 opacity-35 z-[-1]"></div>
      <img src={images.hero1} className="h-full object-cover absolute z-[-2] "></img>
      <div className=" h-full w-[80%] mx-auto flex  text-white items-start justify-center flex-col gap-4">
      <h1 className="text-2xl text-orange-500 font-semibold">
          Learn About Us
        </h1>
        <p className="text-6xl font-medium">
          Better Life For People
        </p>
        <p className="text-lg w-[65%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo unde enim corrupti vero em labore 
          quos, quod, voluptas, quidem voluptatum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, ea.
        </p>
        <Button name="Learn More" />
      </div>
    </div >
  );
};

export default HeroItems;
