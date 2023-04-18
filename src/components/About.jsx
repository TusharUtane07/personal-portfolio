import React from "react";
import b from "../assests/4884785.jpg";
import "animate.css";

const About = () => {
  return (
    <div className="h-screen mx-5 font-poppins">
      <div>
        <h1 className="text-3xl pt-2 font-bold m-auto font-poppins border-2 border-primary w-44  py-2  text-center">
          About Me
        </h1>
      </div>
      <div className="mt-10 lg:mt-20 font-semibold lg:flex lg:items-center lg:mx-40 gap-8">
        <div className="hidden lg:block animate__animated animate__fadeInLeftBig">
          <img src={b} alt="" className="w-[1400px]" />
        </div>
        <div className="text-xl  lg:text-xl animate__animated animate__fadeInRightBig">
          <p>
            • Hi there, I'm <span className="font-bold">Tushar Utane</span>, A
            frontend developer I build interactive applications for web.
          </p>
          <p className="mt-3">
            • As a Frontend developer, I specialize in using latest technologies
            including
            <span className="font-bold p-1">
              HTML, CSS, JAVASCRIPT, REACT, REDUX-TOOLKIT, TAILWIND-CSS, SCSS &
              FIREBASE
            </span>
            and tools like{" "}
            <span className="font-bold m-1">VSCODE, GIT & GITHUB.</span>
          </p>
          <p className="mt-3">
            • Throughout my learning period I build many
            <a href="#projects" className="mx-2 font-bold">
              projects
            </a>
            some of them are mentioned below
          </p>
          <p className="mt-3">
            • I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills feel
            free to
            <a href="#contact" className="mx-2 font-bold">
              contact
            </a>
            me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
