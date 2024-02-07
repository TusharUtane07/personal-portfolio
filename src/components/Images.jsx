import React from "react";
import css from "../assests/css.png";
import html from "../assests/html.png";
import react from "../assests/react1.webp";
import firebase from "../assests/firebase.png";
import sass from "../assests/sass.png";
import js from "../assests/js.png";
import git from "../assests/git.png";
import tailwindcss from "../assests/tailwindcss.png";
import redux from "../assests/redux.png";
import java from "../assests/java.png";
import ts from "../assests/ts.png";
import next from "../assests/next.png";

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
		img: next,
	},
	{
		img: ts,
	},
	{
		img: redux,
	},
	{
		img: firebase,
	},
	{
		img: git,
	},
];

const Images = () => {
	return (
		<div className="flex flex-wrap items-center justify-center">
			{image.map((item, index) => {
				return (
					<div
						className="w-16 h-16 shadow-lg  mx-5 mt-9 lg:mt-0 rounded-full flex items-center justify-center z-10"
						key={index}>
						<img
							src={item.img}
							alt="logo"
							className="w-12 object-contain p-1"
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Images;
