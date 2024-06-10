import React from "react";
import Slider from "react-slick";
import HeroItems from "./HeroItems";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { heroData } from "../data";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] right-4 lg:right-8 text-orange-500 text-xl lg:text-3xl h-8 lg:h-12 w-8 lg:w-12 flex justify-center items-center rotate-45 border-[1px] border-orange-500 hover:bg-orange-500 hover:text-white transition-all ease-in duration-300"
      onClick={onClick}>
      <SlArrowRight className="-rotate-45" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] left-4 lg:left-8 text-orange-500 text-xl lg:text-3xl h-8 lg:h-12 w-8 lg:w-12 flex justify-center items-center rotate-45 border-[1px] border-orange-500 hover:bg-orange-500 hover:text-white transition-all ease-in duration-300"
      onClick={onClick}>
      <SlArrowLeft className="-rotate-45" />
    </div>
  );
}

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        {heroData.map((item) => (
          <HeroItems key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
