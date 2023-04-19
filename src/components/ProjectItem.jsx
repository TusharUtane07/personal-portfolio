import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import p1 from "../assests/1.png";
import p2 from "../assests/2.png";
import p3 from "../assests/3.png";

const ProjectItem = () => {
  return (
    <>
      <div className="pb-5 mx-1 mt-4 lg:flex xl:mx-60">
        <div className="p-1 lg:ml-5">
          <img
            src={p1}
            alt=""
            className="w-[300px] md:w-[500px] mt-4 m-auto rounded-md lg:w-[1700px] hover:cursor-pointer"
          />
        </div>
        <div className="ml-5">
          <p className="text-3xl text-center py-3">Cornflix</p>
          <p className="mx-4">
            Cornflix Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Amet ex exercitationem quas obcaecati facilis, quo adipisci nihil
            recusandae dicta corporis accusantium natus ipsum nam ut expedita
            tempora. Sequi, nesciunt illo.
          </p>
          <div className="flex gap-4 text-2xl ml-4">
            <p className="pt-4"> React</p>
            <p className="pt-4">Scss</p>
          </div>
          <div className="flex gap-4 ml-4 hover:cursor-pointer">
            <p className="pt-4 flex items-center gap-2 text-xl">
              Code <AiFillGithub />
            </p>
            <p className="pt-4 flex text-xl items-center gap-2">
              Link <BiLinkExternal />
            </p>
          </div>
        </div>
      </div>
      <div className="pb-5 mx-1 mt-4 lg:flex xl:mx-60">
        <div className="p-1 lg:ml-5">
          <img
            src={p2}
            alt=""
            className="w-[300px] md:w-[500px] mt-4 m-auto rounded-md lg:w-[1700px] hover:cursor-pointer"
          />
        </div>
        <div className="ml-5">
          <p className="text-3xl text-center py-3">Eshopping-Hub</p>
          <p className="mx-4">
            Cornflix Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Amet ex exercitationem quas obcaecati facilis, quo adipisci nihil
            recusandae dicta corporis accusantium natus ipsum nam ut expedita
            tempora. Sequi, nesciunt illo.
          </p>
          <div className="flex gap-4 text-2xl ml-4">
            <p className="pt-4"> React</p>
            <p className="pt-4">Scss</p>
          </div>
          <div className="flex gap-4 ml-4 hover:cursor-pointer">
            <p className="pt-4 flex items-center gap-2 text-xl">
              Code <AiFillGithub />
            </p>
            <p className="pt-4 flex text-xl items-center gap-2">
              Link <BiLinkExternal />
            </p>
          </div>
        </div>
      </div>
      <div className="pb-5 mx-1 mt-4 lg:flex xl:mx-60">
        <div className="p-1 lg:ml-5">
          <img
            src={p3}
            alt=""
            className="w-[300px] md:w-[500px] mt-4 m-auto rounded-md lg:w-[1700px] hover:cursor-pointer"
          />
        </div>
        <div className="ml-5">
          <p className="text-3xl text-center py-3">Cryptobase</p>
          <p className="mx-4">
            Cornflix Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Amet ex exercitationem quas obcaecati facilis, quo adipisci nihil
            recusandae dicta corporis accusantium natus ipsum nam ut expedita
            tempora. Sequi, nesciunt illo.
          </p>
          <div className="flex gap-4 text-2xl ml-4">
            <p className="pt-4"> React</p>
            <p className="pt-4">Scss</p>
          </div>
          <div className="flex gap-4 ml-4 hover:cursor-pointer">
            <p className="pt-4 flex items-center gap-2 text-xl">
              Code <AiFillGithub />
            </p>
            <p className="pt-4 flex text-xl items-center gap-2">
              Link <BiLinkExternal />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
