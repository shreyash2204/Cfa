import React from "react";
// import Button from "./components/Button";
import images from "../assets/images";

const Footer = () => {
  return (
    <footer className=" text-white bg-black">
      <div className="grid grid-rows-[auto_auto_1fr] grid-cols-2 min-[950px]:grid-cols-3 min-[950px]:grid-rows-none place-content-center gap-12 min-[1023px]:gap-4 p-8 md:p-12 min-h-[400px]">
        <div className="w-full flex flex-col gap-6 items-center col-[1/-1] sm:col-[1/2]">
          <h1 className="text-4xl font-bold self-start">
            <img src={images.footerLogo} alt="Logo" className="h-12" />
          </h1>
          <p className="text-sm font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia
            deleniti necessitatibus provident porro quasi voluptatum molestias,
            pariatur animi quisquam!
          </p>
          <div className="self-start">
            {/* <Button text="Donate" py={4} px={3} /> */}
          </div>
        </div>
        <div className="footer-links w-full col-[1/-1] sm:col-[2/3]">
          <ul className="flex flex-col items-center w-full gap-4">
            <li className="hover:text-[#f47445] w-[120px]">Home</li>
            <li className="hover:text-[#f47445] w-[120px]">About</li>
            {/* <li className="hover:text-[#f47445] w-[120px]">Our Appraoch</li>
            <li className="hover:text-[#f47445] w-[120px]">Our Impact</li>
            <li className="hover:text-[#f47445] w-[120px]">Volunteering</li> */}
          </ul>
        </div>
        <div className="newsLetter col-[1/-1] row-[1/1] min-[950px]:col-[3/-1] w-full flex flex-col gap-3">
          <h3 className="text-2xl font-semibold text-[#f47445]">Subscribe</h3>
          <p className="text-sm font-extralight">
            Don’t miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b-[1px] border-gray-300 py-3 px-4 placeholder:text-slate-300 placeholder-opacity-20 bg-transparent"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b-[1px] border-gray-300 py-3 px-4 placeholder:text-slate-300 placeholder-opacity-20 bg-transparent"
            />
            {/* <Button text="Subscribe" py={8} px={3} /> */}
          </form>
        </div>
      </div>
      <div>
        <p className="flex items-center justify-center text-sm font-extralight bg-neutral-950 h-[80px]">
          &copy; 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
