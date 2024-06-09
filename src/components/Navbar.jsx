import React from "react";
import images from "../assets/images";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="h-20 w-full text-white overflow-hidden absolute z-[100]">
      <nav className="h-full flex justify-between items-center w-[80%] mx-auto">
        <div>
          <img
            src={images.logo}
            alt="Logo"
            className="h-28 relative top-3"
          />
        </div>
        <ul className="flex gap-8 text-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>About</li>
        </ul>
        <div>
          <Button name={"Donate"} heart={true} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
