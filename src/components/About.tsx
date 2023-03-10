import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc/SectionWrapper";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full bg-gradient-to-r from-theme via-purple-500 to-theme-secondary p-[1px] rounded-[20px] shadow-card"
			>
				<div className="bg-slate-800 rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center ">
					<img
						src={icon}
						alt={title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant(1.5)}>
				<p className="sectionSubHeading ">
					"Learn about me, but don't worry, I'm not a narcissist - I
					only Google myself occasionally."
				</p>
				<h2 className="sectionHeading">About Me!!</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-gray-500 text-[17px] max-w-3xl leading-[30px]"
			>
				Hey there, fellow techies! I'm thabish, a software engineer who
				loves creating beautiful and functional web applications. With a
				keen eye for design and a passion for clean, efficient code, I
				enjoy exploring the latest tools and frameworks to stay on the
				cutting edge of web development. From React, Next.js, and
				GraphQL to Redux, TRPC, and Tailwind CSS, I'm always up for a
				new challenge. But my true love lies in the endless
				possibilities of Three.js, especially when paired with React
				Three Fiber. There's nothing quite like the rush of bringing
				complex 3D models to life with just a few lines of code! So
				whether you're a fellow developer, a curious user, or just
				someone looking to connect with like-minded creatives, I welcome
				you to my portfolio and invite you to join me on this exciting
				journey of innovation and discovery. Let's create something
				amazing together!
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
