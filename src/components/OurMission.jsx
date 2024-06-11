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
    <div className="flex flex-col md:flex-row items-center justify-center w-[90%] lg:w-[80%] mx-auto pb-12 gap-4 lg:gap-8 min-h-screen overflow-hidden">
      <div className="flex-1 flex flex-col gap-4" ref={missionText}>
        <h2 className="text-xl text-orange-500 font-semibold">Our Mission</h2>
        <h3 className="text-5xl font-medium">
          Transforming lives, fostering optimism, <br /> and protecting our
          environment
        </h3>
        <p>
        That's what motivates us at Care For All. We're on a mission fueled by deep emotions to spark change, touching one heart at a time. By relentlessly fighting for the rights of women, children, animals, and our planet, we stand for kindness, strength, and fairness. Our strongest desire propels us towards a vision where everyone thrives, every child is happy, every animal is cherished, and every part of our world is in balance.
        </p>
        <p>
        Come with us on this significant path to effect change that will last for generations. Together, we can shape a future brimming with love, fairness, and environmental care for everyone. Your contribution, whether it's through volunteering, giving, or sharing our cause, shines a beacon of hope in this journey of change. Let's create a world where every heart feels the comfort of care and the strength of hope. 
        </p>
      </div>
      <div className="flex-1 h-[60vh]" ref={missionImg}>
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
