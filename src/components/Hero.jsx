import React from "react";
import Slider from "react-slick";
import HeroItems from "./HeroItems";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] right-8 text-orange-500 text-3xl h-12 w-12 flex justify-center items-center rotate-45 border-[1px] border-orange-500 hover:bg-orange-500 hover:text-white transition-all ease-in duration-300"
      onClick={onClick}>
      <SlArrowRight className="-rotate-45" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 top-[45%] left-8 text-orange-500 text-3xl h-12 w-12 flex justify-center items-center rotate-45 border-[1px] border-orange-500 hover:bg-orange-500 hover:text-white transition-all ease-in duration-300"
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {[1, 2, 3].map((item) => (
          <HeroItems key={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
