import React from "react";
import images from "../assets/images";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="h-20 w-full text-white overflow-hidden absolute z-[100]">
      <nav className="h-full flex justify-between items-center w-[90%] md:w-[80%] mx-auto">
        <div>
          <Link to="/">
          <img
            src={images.logo}
            alt="Logo"
            className="h-28 relative top-3"
          />
          </Link>
        </div>
        <ul className="flex gap-8 text-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>About</li>
        </ul>
        <div>
          <Link to="/donate">
          <Button name={"Donate"} heart={true} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
