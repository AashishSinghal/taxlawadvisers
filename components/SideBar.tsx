"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Categories from "./Categories";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMennutoggle = (e: any) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className="felx md:hidden xl:hidden px-5 py-3 text-sm md:text-base bg-transparent cursor-pointer border border-[#62d7a2] text-[#62d7a2] flex items-center rounded-full text-center"
        onClick={handleMennutoggle}
      >
        <GiHamburgerMenu />
      </div>
      <div
        className={`absolute w-full h-full flex transition-[right] ease-out duration-300 justify-end bg-black bg-opacity-10 cursor-pointer top-0 z-50 ${
          isMenuOpen ? "right-0" : "right-[-100%]"
        }`}
        onClick={(e) => handleMennutoggle(e)}
      >
        <div
          className="flex flex-col h-full w-4/5 border-l-2 border bg-primary-content cursor-default border-[#62d7a2]"
          onClick={(e) => handleClick(e)}
        >
          <div
            className="felx md:hidden xl:hidden px-5 h-min py-3 ml-auto my-6 mr-5 text-sm md:text-base bg-transparent cursor-pointer border border-[#62d7a2] text-[#62d7a2] flex items-center rounded-full text-center"
            onClick={handleMennutoggle}
          >
            <IoMdClose />
          </div>
          <Categories />
        </div>
      </div>
    </>
  );
};

export default SideBar;
