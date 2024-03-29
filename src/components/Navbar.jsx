import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";
import "animate.css";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	function handleDownload() {
		const file = new Blob(["Resume content"], { type: "application/pdf" });
		const fileURL = URL.createObjectURL(file);
		window.open(
			"https://drive.google.com/file/d/1rjFVO7WdUol3vu68P2nOQErTbq0-Ep4U/view?usp=drive_link"
		);
	}

	return (
		<>
			<div className="fixed top-0 z-50 font-poppins text-primary lg:hidden shadow-md bg-primary w-screen">
				<div
					className=" flex items-center justify-between mx-5 text-2xl h-16  md:text-5xl 
      md:mx-10 md:my-5 md:pb-2 font-extrabold">
					<div>Tushar.dev</div>
					<div>
						<ThemeToggle />
					</div>
					<div className="">
						<GiHamburgerMenu
							// size={30}
							onClick={() => setNav(!nav)}
							className="cursor-pointer text-3xl md:text-5xl"
						/>
					</div>
				</div>

				{/* This will be shown on click ham */}
				<div
					className={
						nav
							? "fixed top-0 left-0 w-screen h-screen bg-white text-black  z-10 duration-700"
							: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white  text-black z-10 duration-700"
					}>
					<div className="flex items-center justify-between h-16 mx-5 md:mx-10 md:my-3">
						<div className="uppercase text-2xl text-black  md:text-5xl font-bold ">
							Tushar.dev
						</div>
						<RxCross1
							onClick={() => setNav(!nav)}
							className="text-3xl md:text-5xl"
						/>
					</div>
					<div className="flex flex-col text-center justify-center mt-16 space-y-12 text-4xl md:text-5xl md:space-y-14 md:mt-16">
						<div className="" onClick={() => setNav(!nav)}>
							<a href="#"> Home </a>
						</div>
						<div className="" onClick={() => setNav(!nav)}>
							<a href="#about"> About </a>
						</div>
						<div onClick={() => setNav(!nav)}>
							<a href="#projects">Projects</a>
						</div>
						<div onClick={() => setNav(!nav)}>
							<button onClick={handleDownload} download="Resume.pdf">
								Resume
							</button>
						</div>
						<div onClick={() => setNav(!nav)}>
							<a href="#contact">Contact</a>
						</div>
						<div className=""></div>
					</div>
				</div>
			</div>
			{/* Desktop */}
			<div className="fixed z-50 top-0 bg-primary w-screen">
				<div className="font-poppins h-[70px] mt-3 hidden lg:flex items-center w-[100%] justify-between shadow-md">
					<div className=" text-2xl font-bold ml-5 xl:ml-8 tracking-widest xl:pb-3 ">
						Tushar.dev
					</div>
					<div className="flex items-center justify-between mr-5 xl:mr-8 xl:space-x-8 ">
						<div className="text-2xl ">
							<a href="#"> Home </a>
						</div>
						<div className="text-2xl ">
							<a href="#about"> About </a>
						</div>
						<div className="text-2xl ">
							<a href="#projects">Projects</a>
						</div>
						<div className="text-2xl ">
							<a href="#contact">Contact</a>
						</div>
						<div className="text-2xl">
							<button onClick={handleDownload} download="Resume.pdf">
								Resume
							</button>
						</div>
						<div>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
