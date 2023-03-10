import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

type projectProps = {
	name: string;
	description: string;
	tags: { name: string; color: string }[];
	image: string;
	codeLink: string;
	live: string;
};

const ProjectCard = ({
	project,
	index,
}: {
	project: projectProps;
	index: number;
}) => {
	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.5, 1.5)}
			className="flex"
		>
			<Tilt className="bg-slate-800 flex flex-col p-5 rounded-2xl sm:w-[300px] w-full">
				<div className="relative w-full h-[230px]">
					<img
						src={project.image}
						alt={project.name}
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>

				{/* name description */}
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">
						{project.name}
					</h3>
					<p className="mt-2 text-secondary text-[14px]">
						{project.description}
					</p>
				</div>
				{/* tags */}
				<div className="mt-auto flex flex-wrap gap-2 ">
					{project.tags.map((tag, i) => (
						<p
							key={tag.name}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
				{/* links */}

				<div className="flex gap-5 items-center  mt-5">
					<div
						onClick={() => window.open(project.codeLink, "_blank")}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
					>
						<img
							src={github}
							alt="github"
							className="w-1/2 h-1/2 object-contain"
						/>
					</div>
					<div
						onClick={() => window.open(project.live, "_blank")}
						className="bg-theme flex-1  font-semibold tracking-wider text-slate-800 hover:scale-110 hover:bg-white duration-500 transition-all w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer"
					>
						Check it out
					</div>
				</div>
			</Tilt>
		</motion.div>
	);
};

const Projects = () => {
	return (
		<>
			<motion.div variants={textVariant(1.5)}>
				<p className="sectionSubHeading">
					"I may have created a few bugs in my projects, but at least
					I didn't let them reproduce."
				</p>
				<h2 className="sectionHeading">Projects</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 0.1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					This section showcases my professional skills and
					experience. It features projects that I have successfully
					completed through research, planning, and execution. The
					section demonstrates my commitment to excellence and passion
					for my work, whether it's designing a website, creating a
					marketing campaign, or developing software. Explore the
					section to see the breadth and depth of my expertise
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, i) => (
					<ProjectCard key={i} project={project} index={i} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Projects, "");
