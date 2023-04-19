import React from "react";
import "animate.css";
import css from "../assests/css.png";
import html from "../assests/html.png";
import react from "../assests/react1.webp";
import firebase from "../assests/firebase.png";
import sass from "../assests/sass.png";
import js from "../assests/js.png";
import git from "../assests/git.png";
import tailwindcss from "../assests/tailwindcss.png";
import redux from "../assests/redux.png";

const image = [
  {
    img: html,
  },
  {
    img: css,
  },
  {
    img: js,
  },
  {
    img: tailwindcss,
  },
  {
    img: react,
  },
  {
    img: redux,
  },
  {
    img: firebase,
  },
  {
    img: sass,
  },
  {
    img: git,
  },
];

const About = () => {
  return (
    <div className="lg:pb-40 mx-5 font-poppins">
      <div>
        <h1 className="text-3xl lg:text-8xl pt-2 font-bold m-auto  w-full py-2  text-center">
          About Me
        </h1>
      </div>
      <div className="mt-10 lg:mt-28 font-semibold lg:flex lg:items-center lg:mx-60 gap-20">
        <div className="hidden lg:flex lg:flex-wrap gap-5 animate__animated animate__fadeInLeftBig ">
          {image.map((item) => {
            return (
              <div className="">
                <img src={item.img} alt="" className="w-20 animate-bounce" />
              </div>
            );
          })}
        </div>
        <div className="text-xl lg:text-xl animate__animated animate__fadeInRightBig">
          <p>
            • Hi there, I'm{" "}
            <span className="font-bold text-blue-500">Tushar Utane</span>, A
            frontend developer I build interactive applications for web.
          </p>
          <p className="mt-3">
            • As a Frontend developer, I specialize in using latest technologies
            including
            <span className="font-bold p-1 text-blue-500">
              HTML, CSS, JAVASCRIPT, REACT, REDUX-TOOLKIT, TAILWIND-CSS, SCSS &
              FIREBASE
            </span>
            and tools like{" "}
            <span className="font-bold m-1 text-blue-500">
              VSCODE, GIT & GITHUB.
            </span>
          </p>
          <p className="mt-3">
            • Throughout my learning period I build many
            <a href="#projects" className="mx-2 font-bold text-blue-500">
              projects
            </a>
            some of them are mentioned below
          </p>
          <p className="mt-3">
            • I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills feel
            free to
            <a href="#contact" className="mx-2 font-bold text-blue-500">
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
