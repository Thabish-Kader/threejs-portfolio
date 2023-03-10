import React from "react";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import ToolsCanvas from "./canvas/ToolsCanvas";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((tech, i) => (
				<div className="w-28 h-28 " key={i}>
					<ToolsCanvas icon={tech.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "");
