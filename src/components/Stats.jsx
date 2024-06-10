import React, { useEffect, useRef } from "react";
import images from "../assets/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.to(first.current, {
      scrollTrigger: {
        trigger: first.current,
        start: "top 80%",
        end: "top center",
        toggleActions: "play none none none",
      },
      innerText: 1000,
      snap: "innerText",
      duration: 1,
    });
    gsap.to(second.current, {
      scrollTrigger: {
        trigger: second.current,
        start: "top 80%",
        end: "top center",
        toggleActions: "play none none none",
      },
      innerText: 100,
      snap: "innerText",
      duration: 1,
    });
    gsap.to(third.current, {
      scrollTrigger: {
        trigger: third.current,
        start: "top 80%",
        end: "top center",
        toggleActions: "play none none none",
      },
      innerText: 50000,
      snap: "innerText",
      duration: 1,
    });
    gsap.to(fourth.current, {
      scrollTrigger: {
        trigger: fourth.current,
        start: "top 80%",
        end: "top center",
        toggleActions: "play none none none",
      },
      innerText: 100000,
      snap: "innerText",
      duration: 1,
    });
  }, []);

  return (
    <div
      className={`h-screen md:h-[350px] bg-center bg-cover bg-fixed bg-no-repeat relative`}
      style={{
        backgroundImage: `url(${images.commitment})`
      }}>
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="flex justify-evenly items-center flex-col md:flex-row h-full text-5xl z-10 text-amber-500 font-bold">
        <div className="">
          <span ref={first}>100</span>
          <sup>+</sup>
          <p className="text-lg ml-3">lorem</p>
        </div>
        <div>
          <span ref={second}>10</span>
          <sup>+</sup>
          <p className="text-lg ml-3">lorem</p>
        </div>
        <div>
          <span ref={third}>1000</span>
          <sup>+</sup>
          <p className="text-lg ml-3">lorem</p>
        </div>
        <div>
          <span ref={fourth}>10000</span>
          <sup>+</sup>
          <p className="text-lg ml-3">lorem</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
