import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return <p>{title}</p>;
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant(1.5)}>
				<p className="sectionSubText">About</p>
				<h2 className="sectionHeadText">Overview</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Molestiae quaerat aut nam. Obcaecati nemo sunt reprehenderit
				quibusdam, rerum numquam quaerat autem odio modi facere non
				nihil architecto tempora explicabo corporis? Illum dicta eum
				eveniet esse dolorum perferendis praesentium delectus
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

export default About;
