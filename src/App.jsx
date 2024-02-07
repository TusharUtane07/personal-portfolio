import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { FaArrowUp } from "react-icons/fa";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	return (
		<div className="relative">
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			{/* <Navbar /> */}
			<Home />
			<div id="about">
				<About />
			</div>
			<div id="projects">
				<Projects />
			</div>
			<div id="contact">
				<Contact />
			</div>

			{isScrolled && (
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="fixed right-1 bottom-1 ">
					<FaArrowUp className="text-2xl p-2 lg:text-5xl text-white rounded-full  bg-[#27283d] dark:bg-white dark:text-[#27283d]" />
				</button>
			)}
		</div>
	);
};

export default App;
