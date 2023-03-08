import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc/SectionWrapper";

type testimonialType = {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
	link: string;
};

const FeedBackCard = ({
	testimonial,
	index,
}: {
	testimonial: testimonialType;
	index: number;
}) => (
	<motion.div
		variants={fadeIn("", "spring", index * 0.5, 0.75)}
		className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
	>
		<p className="text-white font-black text-[48px]">"</p>
		<div className="mt-1">
			<p className="text-white tracking-wider text-[18px]">
				{testimonial.testimonial}
			</p>
			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<a href={testimonial.link}>
						<p className="text-white font-medium text-[16px]">
							<span className="blue-text-gradient">@</span>
							{testimonial.name}
						</p>

						<p className="mt-1 text-secondary text-[12px]">
							{testimonial.designation} of {testimonial.company}
						</p>
					</a>
				</div>
				<img
					className="h-10 w-10 rounded-full object-cover"
					src={testimonial.image}
					alt={`testimonial by -${testimonial.name}`}
				/>
			</div>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-[20px]">
			<div className="padding bg-tertiary rounded-2xl min-h-[300px]">
				<motion.div variants={textVariant(1)}>
					<p className="sectionSubText">What others say</p>
					<h2 className="sectionHeadText">Testimonials.</h2>
				</motion.div>
			</div>
			<div className="padding -mt-20 pb-14 flex flex-wrap gap-7">
				{testimonials.map((testimonial, i) => (
					<FeedBackCard key={i} index={i} testimonial={testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "");
