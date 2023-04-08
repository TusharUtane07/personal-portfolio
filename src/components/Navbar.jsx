import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="font-poppins text-primary">
      <div className="uppercase flex items-center justify-between mx-5 text-3xl h-16 border-2 border-white md:text-5xl md:mx-10">
        tushar utane
        <div className="">
      <ThemeToggle/>
        </div>
        <div className="">
          <GiHamburgerMenu
            onClick={() => setNav(!nav)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* This will be shown on click ham */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-screen h-screen bg-white text-black  z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white  text-black z-10 duration-300"
        }
      >
        <div className="flex items-center justify-between h-16 mx-5 md:mx-10">
          <div className="uppercase text-3xl text-black  md:text-5xl">Tushar utane</div>
          <RxCross1 onClick={() => setNav(!nav)} size={30} className="text-3xl md:text-5xl" />
        </div>
        <div className='flex flex-col text-center justify-center mt-10 space-y-5 text-2xl'>
          <div className="">Home</div>
          <div className="">About</div>
          <div className="">Projects</div>
          <div className="">Contact</div>
          <div className="">
          </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
