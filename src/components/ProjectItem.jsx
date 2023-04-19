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
          <a href="https://cornflix2-0.vercel.app/">
            <img
              src={p1}
              alt=""
              className="w-[300px] md:w-[500px] mt-4 m-auto rounded-md lg:w-[1700px] hover:cursor-pointer"
            />
          </a>
        </div>
        <div className="ml-5">
          <p className="text-3xl text-center py-3">Cornflix</p>
          <p className="mx-4">
            Cornflix is a platform where you can find movies & tv shows as your
            preference. In these project I implemented{" "}
            <b> infinite scroll, lazy loading, and search </b>features for
            providing smooth user experience.
          </p>
          <div className="flex gap-4 text-2xl ml-4">
            <p className="pt-4"> React</p>
            <p className="pt-4">Scss</p>
          </div>
          <div className="flex gap-4 ml-4 hover:cursor-pointer">
            <a href="https://github.com/CodeWithTusharUtane/cornflix2.0">
              <p className="pt-4 flex items-center gap-2 text-xl">
                Code <AiFillGithub />
              </p>
            </a>
            <a href="https://cornflix2-0.vercel.app/">
              <p className="pt-4 flex text-xl items-center gap-2">
                Link <BiLinkExternal />
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-5 mx-1 mt-4 lg:flex xl:mx-60">
        <div className="p-1 lg:ml-5">
          <a href="https://eshoppinghub.vercel.app/">
            <img
              src={p2}
              alt=""
              className="w-[300px] md:w-[500px] mt-4 m-auto rounded-md lg:w-[2500px] hover:cursor-pointer"
            />
          </a>
        </div>
        <div className="ml-5">
          <p className="text-3xl text-center py-3">Eshopping-Hub</p>
          <p className="mx-4">
            Eshopping Hub is ecommerce platform where user can view product add
            them to cart users are authenticated with firebase and admin can
            add, remove & edit products, users specific data is stored these are
            implemented using Firebase Firestore database and Firebase storage.
          </p>
          <div className="flex gap-4 text-2xl ml-4">
            <p className="pt-4"> React & Redux</p>
            <p className="pt-4">Tailwind Css</p>
            <p className="pt-4">Firebase</p>
          </div>
          <div className="flex gap-4 ml-4 hover:cursor-pointer">
            <a href="https://github.com/CodeWithTusharUtane/Ecommerce-app">
              <p className="pt-4 flex items-center gap-2 text-xl">
                Code <AiFillGithub />
              </p>
            </a>
            <a href="https://eshoppinghub.vercel.app/">
              <p className="pt-4 flex text-xl items-center gap-2">
                Link <BiLinkExternal />
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-5 mx-1 mt-4 lg:flex xl:mx-60">
        <div className="p-1 lg:ml-5">
          <a href="https://cryptobase-rho.vercel.app/">
            <img
              src={p3}
              alt=""
              className="w-[300px] md:w-[500px] mt-4 m-auto rounded-md lg:w-[1300px] hover:cursor-pointer"
            />
          </a>
        </div>
        <div className="ml-5">
          <p className="text-3xl text-center py-3">Cryptobase</p>
          <p className="mx-4">
            Cryptobase is a cryto currency tracking app where you can find any
            currencies detailed analysis and the information fetched from
            Coingecko api.
          </p>
          <div className="flex gap-4 text-2xl ml-4">
            <p className="pt-4"> React</p>
            <p className="pt-4">Tailwindcss</p>
          </div>
          <div className="flex gap-4 ml-4 hover:cursor-pointer">
            <a
              target="_blank"
              href="https://github.com/CodeWithTusharUtane/cryptobase"
            >
              <p className="pt-4 flex items-center gap-2 text-xl">
                Code <AiFillGithub />
              </p>
            </a>
            <a href="https://cryptobase-rho.vercel.app/" target="_blank">
              <p className="pt-4 flex text-xl items-center gap-2">
                Link <BiLinkExternal />
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
