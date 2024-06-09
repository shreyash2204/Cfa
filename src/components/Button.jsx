import React from "react";
import { FaHeart } from "react-icons/fa";

const Button = ({ name, heart }) => {
  return (
    <button className="bg-orange-500 py-3 px-8 rounded-full text-white  flex gap-2 items-center justify-center">
      {name}
      {heart && <FaHeart className="text-sm" />}
    </button>
  );
};

export default Button;
