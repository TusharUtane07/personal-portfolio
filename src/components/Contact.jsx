import React, { useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { toast } from "react-toastify";
import { db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	const addMessage = (e) => {
		e.preventDefault();
		try {
			setDoc(doc(db, "message", email), {
				name: name,
				email: email,
				message: message,
			});
			toast("Successfully sent message", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		} catch (error) {
			toast("Error sending message", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			console.log(error.message);
		}
	};

	useEffect(() => {
		setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
	});

	return (
		<div>
			<div className="font-poppins mb-10 mt-8">
				<h1 className="text-4xl lg:text-8xl pt-2 font-bold m-auto w-full py-2 text-center">
					Contact
				</h1>
				<form
					onSubmit={addMessage}
					className="mx-8 lg:mx-40 xl:mx-[270px] md:mx-16 rounded p-3 px-4 mt-8 border  dark:border-white border-[#27283d]">
					<label htmlFor="" className="font-bold text-xl lg:text-xl ">
						Name
					</label>
					<br />
					<input
						type="text"
						placeholder="Enter Your Name"
						className="mt-1 mb-5 lg:mb-8 pl-3 w-full h-10 bg-transparent outline-none border-b dark:border-white border-[#27283d]"
						required
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<br />
					<label htmlFor="" className="font-bold text-xl lg:text-xl  ">
						Email
					</label>
					<br />
					<input
						type="email"
						placeholder="Enter Your Email"
						className="mt-1 mb-5 lg:mb-8 pl-3 w-full h-10 bg-transparent outline-none border-b dark:border-white border-[#27283d]"
						required
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<br />
					<label htmlFor="" className="font-bold text-xl lg:text-xl ">
						Message
					</label>
					<br />
					<textarea
						name=""
						id=""
						className="resize-none mt-3 bg-transparent h-[200px] outline-none border pl-2 pt-2 border-[#27283d] lg:mt-5 w-full dark:border-white "
						required
						onChange={(e) => setMessage(e.target.value)}
						value={message}></textarea>
					<br />
					<button
						type="submit"
						className="dark:bg-[#ffffff] mt-3 w-full dark:text-[#27283d] bg-[#27283d] py-2 text-xl lg:text-xl  lg:w-52 lg:mt-5 px-5 text-white font-bold rounded-sm md:w-40 mb-2">
						Submit
					</button>
				</form>

				<div className="lg:grid grid-cols-3 lg:mt-10 mx-8 lg:mx-40 xl:mx-[270px] md:mx-16">
					<div className="mt-8 text-2xl ">
						<h1 className="font-bold">My Digital Spaces</h1>
						<div className="mt-3">
							<ul>
								<li className="flex items-center text-xl  gap-6">
									<BsGithub />
									<a href="https://github.com/TusharUtane07" target="_blank">
										Github
									</a>
								</li>
								<li className="flex items-center text-xl mt-3  gap-6">
									<BsLinkedin />
									<a
										href="https://www.linkedin.com/in/tushar-utane-492b00260/"
										target="_blank">
										LinkedIn
									</a>
								</li>
								<li className="flex items-center text-xl  mt-3  gap-6">
									<BsTwitter />
									<a href="https://twitter.com/tusharutane2" target="_blank">
										Twitter
									</a>
								</li>
								<li className="flex items-center text-xl  mt-3   gap-6">
									<BsInstagram />
									<a
										href="https://www.instagram.com/tushar_utane/"
										target="_blank">
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-8 text-2xl ">
						<h1 className="font-bold">Further Enquires</h1>
						<div className="mt-3">
							<h1 className="text-xl"> +91 7387927556</h1>
							<h1 className="text-xl"> tusharutane7556gmail.com</h1>
						</div>
					</div>
					<div className="mt-8 text-2xl lg:ml-10">
						<h1 className="font-bold">Location</h1>
						<div className="mt-3">
							<h1 className="text-xl"> Nagpur, India</h1>
							<h1 className="text-xl"> {time}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
