import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";

type ExperienceProps = {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
};

const ExperienceCard = ({ exp }: { exp: ExperienceProps }) => (
	<VerticalTimelineElement
		contentStyle={{ background: "#1d1836", color: "#fff" }}
		contentArrowStyle={{ borderRight: "7px solid #232631" }}
		date={exp.date}
		iconStyle={{ background: exp.iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img
					src={exp.icon}
					alt={exp.iconBg}
					className="w-[60%] h-[60%] object-contain"
				/>
			</div>
		}
	>
		<div>
			<h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
			<p className="text-secondary text-[16px] font-semibold">
				{exp.company_name}
			</p>
			<ul className="mt-5 list-disc ml-5 space-y-2">
				{exp.points.map((point, i) => (
					<li
						key={i}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</div>
	</VerticalTimelineElement>
);

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant(1.5)}>
				<p className="sectionSubText">What I have done so far</p>
				<h2 className="sectionHeadText">Journey</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((exp, i) => (
						<ExperienceCard key={i} exp={exp} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
