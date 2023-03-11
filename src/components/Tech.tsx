import { SectionWrapper } from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { ToolCanvas } from "./canvas/ToolCanvas";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((tech, i) => (
				<div className="w-32 h-32 " key={i}>
					<ToolCanvas icon={tech.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "");
