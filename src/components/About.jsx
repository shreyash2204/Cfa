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
        className={`h-[75vh] md:h-[110vh] w-full lg:flex-1 bg-cover max-md:bg-center md:bg-contain bg-fixed bg-no-repeat relative`}
        style={{
          backgroundImage: `url(${images.children4})`,
        }}></div>
      <div className="flex-1 flex flex-col gap-4" ref={aboutText}>
        <h2 className="text-xl text-orange-500 font-semibold">
          Learn About Us
        </h2>
        <h3 className="text-5xl font-medium">
          World wide Non Profit <br /> charity Organization
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam
          accusamus nemo suscipit corrupti velit explicabo deleniti porro,
          dolorum, optio animi ipsam reiciendis voluptatum maxime, ad veritatis
          dolore voluptatem consequatur. Corrupti explicabo saepe temporibus
          distinctio accusamus sit commodi dicta iure praesentium, fuga expedita
          nobis labore quam illum nulla maiores tempore.
        </p>
      </div>
    </div>
  );
};

export default About;
