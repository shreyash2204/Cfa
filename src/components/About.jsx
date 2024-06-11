import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import images from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutText = useRef(null);

  useEffect(() => {
    const aboutTextElement = aboutText.current;
    gsap.from(aboutTextElement, {
      scrollTrigger: {
        trigger: aboutTextElement,
        start: "top 80%",
        end: "top center",
        toggleActions: "play none none reset",
      },
      duration: 1,
      x: 100,
      opacity: 0,
      ease: "power.out",
    });
  }, []);

  return (
    <div className=" py-12 w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center gap-8 overflow-hidden">
      <div
        className={`h-[75vh] lg:h-[110vh] w-full lg:flex-1 bg-cover bg-center bg-fixed bg-no-repeat relative`}
        style={{
          backgroundImage: `url(${images.children4})`,
        }}></div>
      <div className="flex-1 flex flex-col gap-4" ref={aboutText}>
        <h2 className="text-xl text-orange-500 font-semibold">
          Learn About Us
        </h2>
        <h3 className="text-5xl font-medium">
        At Care for All 
        </h3>
        <p>
        Our souls are deeply committed to making significant and enduring improvements in the world. Each day, through our steadfast support and practical programs, we aim to change the lives of women, children, animals, and the planet.
        </p>
        <p>
        We firmly believe in the importance of assessing and measuring our effectiveness to be sure we're genuinely making a positive impact. Through careful and thorough tracking and review, we closely monitor the results of our projects, ready to adjust and improve to enhance our impact and reach. Our dedication to being accountable to our supporters and the communities we help motivates our continuous effort for excellence, pushing us to constantly improve and grow our positive influence.
        </p>
      </div>
    </div>
  );
};

export default About;
