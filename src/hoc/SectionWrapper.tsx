import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

export const SectionWrapper = (Component: () => JSX.Element, idName: string) =>
	function HOC() {
		return (
			<motion.section
				// variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className="padding max-w-7xl mx-auto relative z-10"
			>
				<span
					className="mt-[-100px] pb-[100px] block"
					id={idName}
				></span>
				<Component />
			</motion.section>
		);
	};
