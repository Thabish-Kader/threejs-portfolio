import React, { FormEvent, useRef, useState } from "react";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/EarthCanvas";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_oeoqx8n",
				"template_2yhuvfq",
				{
					from_name: form.name,
					to_name: "Thabish",
					from_email: form.email,
					to_email: "kadertabish2@gmail.com",
					message: form.message,
				},
				"VE2gxGpcgEUvUNm1t"
			)
			.then(
				() => {
					setLoading(false),
						alert("I will get back to you as soon as possible");
					setForm({ name: "", email: "", message: "" });
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something went wrong");
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="sectionSubText">Get in touch</p>
				<p className="sectionHeadText">Contact</p>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					{/* name */}
					<label htmlFor="" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Name
						</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={(e) =>
								setForm({ ...form, name: e.target.value })
							}
							placeholder="What's your name"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					{/* email */}
					<label htmlFor="" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Email
						</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={(e) =>
								setForm({ ...form, email: e.target.value })
							}
							placeholder="What's your email"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					{/* message */}
					<label htmlFor="" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your message
						</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={(e) =>
								setForm({ ...form, message: e.target.value })
							}
							placeholder="Would you like to say something?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
