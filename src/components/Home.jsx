import React from "react";
import w1 from "../assests/w1.png";
import w2 from "../assests/w2.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <div className="font-poppins">
      <div className="lg:flex lg:items-center lg:justify-center lg:mt-10 lg:mx-5 lg:space-x-10">
        <div className="">
          <div className="mt-16 text-5xl font-bold text-center md:text-7xl lg:mt-10 lg:text-5xl lg:flex lg:items-center lg:space-x-5 lg:justify-center">
            <h2>Front-End</h2>
            <h2 className="flex items-center justify-center my-2 lg:justify-start">
              React <img src={w1} className="w-12 ml-2 lg:w-16" />
            </h2>
          </div>
            <h2 className="text-5xl font-bold text-center ">Developer</h2>
          <div className="mt-12 text-2xl mx-8 text-center md:text-2xl md:my-16 lg:mt-10 lg:mx-10 ">
            <span className="font-bold text-3xl md:text-5xl block lg:text-6xl lg:mb-8">
              Hi, I'm Tushar Utane.
            </span>
            <span>
              A Focused React Developer building the Frontend of Websites and
              Web Applications. 
            <span> Based in India. 📍</span>
            </span>
          </div>
          </div>       
        <div className="hidden lg:flex items-center">
          <img src={w2} alt="developer-image" className="w-[70rem] rounded-lg" />
        </div>
      </div>
      <div className="mt-14 text-5xl md:text-7xl  flex items-center justify-center space-x-6 md:space-x-8 lg:justify-start lg:ml-[310px] lg:mt-0">
            <a
              href="https://www.linkedin.com/in/tushar-utane-492b00260/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/CodeWithTusharUtane" target="_blank">
              <BsGithub />
            </a>
          </div>
    </div>
  );
};

export default Home;
