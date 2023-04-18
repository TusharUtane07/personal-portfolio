import React from "react";
import w1 from "../assests/w1.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Images from "./Images";
import "animate.css";

const Home = () => {
  return (
    <div className="font-poppins lg:ml-[200px] pb-20">
      <div className="lg:flex lg:items-center  lg:mx-5 lg:space-x-10 animate__animated animate__fadeInLeftBig">
        <div className="">
          <div className=" mt-16 text-5xl font-bold text-center lg:text-start md:text-7xl lg:mt-10 lg:text-4xl lg:flex lg:items-center lg:mx-10 lg:space-x-5">
            <h2>Front-end</h2>
            <h2 className="flex items-center justify-center my-2 lg:justify-start">
              React <img src={w1} className="w-12 ml-2 lg:hidden" />
            </h2>
            <h2 className="font-bold text-center lg:text-start lg:flex lg:items-center gap-3">
              Developer
              <img src={w1} className="w-10 ml-2 hidden lg:block" />
            </h2>
          </div>
          <div className="mt-12 text-2xl mx-5 text-center lg:text-start md:text-2xl md:my-16 lg:mt-5 lg:mx-10 ">
            <span className=" mb-8 text-3xl block lg:mb-8">
              Hi, My name is <br />
              <span className="text-4xl font-bold md:text-6xl lg:text-7xl uppercase ">
                Tushar Utane.
              </span>
            </span>
            <span>
              I build interactive frontend of web-applications
              <br /> using React, Redux & other front-end technologies.
              <br className="lg:hidden" />
              <span> Based in India.📍</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-14 text-5xl flex items-center justify-center space-x-6 md:space-x-8 lg:justify-start lg:mx-16 lg:mt-0 animate__animated animate__fadeInLeftBig">
        <a
          href="https://www.linkedin.com/in/tushar-utane-492b00260/"
          target="_blank"
        >
          <BsLinkedin className="hover:text-blue-500" />
        </a>
        <a href="https://github.com/CodeWithTusharUtane" target="_blank">
          <BsGithub className="hover:text-red-500" />
        </a>
      </div>

      <div className="lg:ml-14 lg:mt-16 mt-10 text-3xl lg:flex items-center animate__animated animate__fadeInRight">
        <p className="border-b border-primary mx-auto lg:mx-0 w-[170px] pb-2 lg:border-b-0 lg:border-r lg:w-[200px] ">
          Tech Stack
        </p>
        <div>
          <Images />
        </div>
      </div>
    </div>
  );
};

export default Home;
