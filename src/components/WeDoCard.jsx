import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const WeDoCard = ({ imgUrl, text, title }) => {
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
      },
      []
    );
  });

  return (
    <div
      className="h-max place-self-center rounded-md overflow-hidden shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
      ref={wedoCard}>
      <div className="h-[250px]">
        <img src={imgUrl} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-4 grid md:grid-rows-[auto,165px,auto] gap-4">
        <h3 className="text-xl text-orange-500 font-semibold">{title}</h3>
        <p className="text-[14px]">{text}</p>
        <Button name={"Donate"} heart={true} />
      </div>
    </div>
  );
};

export default WeDoCard;
