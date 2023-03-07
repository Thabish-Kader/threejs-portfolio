import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant(1.5)}>
				<p className="sectionSubText">The Projects I have worked on</p>
				<h2 className="sectionHeadText">Projects</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 0.1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				></motion.p>
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
