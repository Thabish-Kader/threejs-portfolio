import { FormEvent, useRef, useState, Fragment } from "react";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { Dialog, Transition } from "@headlessui/react";
import { SocialIcon } from "react-social-icons";
import BlobCanvas from "./canvas/BlobCanvas";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		if (form.name === "" || form.email === "") {
			alert("Name and enail cannot be empty");
			setLoading(false);

			return;
		}
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
					setLoading(false);
					setIsOpen(true);
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
				className="flex-[0.75] bg-slate-800 p-8 rounded-2xl"
			>
				<p className="sectionSubHeading">
					"Contact me before the aliens invade, I'll make sure your
					project is out of this world!"
				</p>
				<p className="sectionHeading">Contact</p>
				{/* socials */}
				<div className="flex items-center gap-5">
					<SocialIcon
						bgColor="transparent"
						fgColor="#0961b8"
						style={{ height: 60, width: 60 }}
						target="_blank"
						url="https://www.linkedin.com/in/thabish-a-kader-366447224/"
					/>
					<SocialIcon
						bgColor="transparent"
						fgColor="#1c93e4"
						style={{ height: 50, width: 50 }}
						target="_blank"
						url="https://twitter.com/DeveloperTak"
					/>
					<SocialIcon
						bgColor="transparent"
						fgColor="#ffffff"
						style={{ height: 50, width: 50 }}
						target="_blank"
						url="https://github.com/Thabish-Kader"
					/>
					<SocialIcon
						bgColor="transparent"
						fgColor="#f10002"
						style={{ height: 50, width: 50 }}
						target="_blank"
						url="https://www.youtube.com/channel/UCv4o5GTLBg2IH2P7iYj1nwQ"
					/>
				</div>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					{/* name */}
					<label htmlFor="" className="flex flex-col">
						<span className="text-slate-300 font-medium mb-4">
							Name
						</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={(e) =>
								setForm({ ...form, name: e.target.value })
							}
							placeholder="What's your name"
							className="bg-slate-700 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					{/* email */}
					<label htmlFor="" className="flex flex-col">
						<span className="text-slate-300 font-medium mb-4">
							Email
						</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={(e) =>
								setForm({ ...form, email: e.target.value })
							}
							placeholder="What's your email"
							className="bg-slate-700 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					{/* message */}
					<label htmlFor="" className="flex flex-col">
						<span className="text-slate-300 font-medium mb-4">
							Message
						</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={(e) =>
								setForm({ ...form, message: e.target.value })
							}
							placeholder="Would you like to say something?"
							className="bg-slate-700 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-slate-700 w-full py-3 px-8 outline-none text-slate-300 font-bold shadow-md hover:text-white shadow-primary rounded-xl hover:bg-green-500 hover:scale-105 duration-500 transition-all"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<BlobCanvas />
			</motion.div>

			{/* Pop up Modal */}
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center ">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black  p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-white"
									>
										Thank You for Getting in Touch!
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-xs text-gray-300 text-justify">
											Thank you for getting in touch with
											me. Your message has been received
											and I appreciate the opportunity to
											connect with you. I will respond to
											your message as soon as possible,
											and if there is anything specific
											you would like me to address, please
											let me know. I look forward to
											speaking with you soon.
											<br />
											<br />
											Best regards,
											<br /> Thabish
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-tertiary px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 duration-500 transition-colors"
											onClick={closeModal}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
