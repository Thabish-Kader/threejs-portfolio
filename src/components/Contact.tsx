import React, { FormEvent, useRef, useState } from "react";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	// const handleChange = () = {}
	const handleSubmit = (e: FormEvent) => {};

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
					<label htmlFor="" className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Name
						</span>
					</label>
				</form>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
