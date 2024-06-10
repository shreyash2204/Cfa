import React, { useEffect, useRef } from "react";
import images from "../assets/images";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  const missionText = useRef(null);
  const missionImg = useRef(null);

  useEffect(() => {
    gsap.from(missionText.current, {
      scrollTrigger: {
        trigger: missionText.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power.out",
    });
    gsap.from(missionImg.current, {
      scrollTrigger: {
        trigger: missionImg.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power.out",
    });
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-[90%] lg:w-[80%] mx-auto pb-12 gap-4 lg:gap-8 h-screen overflow-hidden">
      <div className="flex-1 flex flex-col gap-4" ref={missionText}>
        <h2 className="text-xl text-orange-500 font-semibold">Our Mission</h2>
        <h3 className="text-5xl font-medium">
          Empowering lives, nurturing hope, <br /> and safeguarding our planet{" "}
        </h3>
        <p>
          Empowering lives, nurturing hope, and safeguarding our planet—Care For
          All is on a mission to ignite change, one heart at a time. Through
          advocacy for women, children, animals, and the environment, we
          champion compassion, resilience, and equality. Our passion drives us
          to create a world where every individual thrives, every child smiles,
          every animal is cherished, and every corner of our earth flourishes.
          Join us in our journey to make a difference that echoes for
          generations.
        </p>
      </div>
      <div className="flex-1 h-[70%]" ref={missionImg}>
        <img
          src={images.missionbg}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default OurMission;
