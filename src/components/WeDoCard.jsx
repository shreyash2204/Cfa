import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const WeDoCard = ({ imgUrl }) => {
  // console.log(imgUrl);

  const wedoCard = useRef(null);

  useEffect(() => {
    gsap.from(
      wedoCard.current,
      {
        scrollTrigger: {
          trigger: wedoCard.current,
          start: "top bottom",
          end: "top 20%",
          toggleActions: "play none none reset",
        },
        duration: 1,
        opacity: 0,
        y: 100,
        stagger: 0.5,
        ease: "power.out",
        marker: true,
      },
      []
    );
  });

  return (
    <div className="h-max rounded-md overflow-hidden shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]" ref={wedoCard}>
      <div className="h-[250px]">
        <img src={imgUrl} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-4 flex flex-col items-start gap-4">
        <h3 className="text-xl text-orange-500 font-semibold">
          Lorem, ipsum dolor sit
        </h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe
          beatae ipsum dolor! Expedita eaque, harum cupiditate unde doloribus
          molestiae modi consequatur corporis aliquam similique.
        </p>
        <Button name={"Donate"} heart={true} />
      </div>
    </div>
  );
};

export default WeDoCard;
