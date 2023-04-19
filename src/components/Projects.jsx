import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="mt-10 font-poppins">
      <h1 className="text-3xl pt-2 font-bold m-auto w-full lg:text-8xl py-2 text-center">
        Projects
      </h1>
      <p className="ml-5 text-xl mt-5 text-center md:text-3xl md:my-10">
        Each project is unique piece of development
      </p>
      <div className="mt-10 w-full">
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;
