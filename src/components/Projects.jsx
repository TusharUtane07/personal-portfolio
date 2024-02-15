import React from "react";
import p1 from "../assests/project1.png";
import p2 from "../assests/project2.png";
import p3 from "../assests/project3.png";
import p4 from "../assests/project4.png";
import p5 from "../assests/project4.png";

const projects = [
	{
		source: p1,
		link: "https://eshoppinghub.vercel.app/",
		code: "https://github.com/TusharUtane07/Ecommerce-app",
	},
	{
		source: p2,
		link: "https://image-generation-ai-typescript.vercel.app/",
		code: "https://github.com/TusharUtane07/ImageGenerationAITypescript",
	},
	{
		source: p3,
		link: "https://cryptobase-rho.vercel.app/",
		code: "https://github.com/TusharUtane07/cryptobase",
	},
	{
		source: p4,
		link: "https://650de1caa171f1244a5dea09--sprightly-syrniki-ce096b.netlify.app/",
		code: "https://github.com/TusharUtane07/Notehub-using-Typescript",
	},
];

const Projects = () => {
	return (
		<div>
			<div>
				<h1 className="text-3xl lg:text-8xl pt-2 font-bold m-auto  w-full py-2  text-center">
					Projects
				</h1>
			</div>
			<div className="mt-10 mx-5 grid grid-cols-1 md:grid-cols-2 my-5 lg:mx-32 ">
				{projects.map((item) => {
					return (
						<div className=" p-2 my-5 md:mx-5">
							<img src={item.source} alt="" />
							<div className="text-center">
								<button className="mx-5 bg-secondary hover:cursor-pointer mt-3 px-5 py-1 rounded-sm">
									<a href={item.link} target="_blank">
										Live
									</a>
								</button>
								<button className="mx-5 bg-secondary hover:cursor-pointer mt-3 px-5 py-1 rounded-sm">
									<a href={item.code}>Code</a>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
