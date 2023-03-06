import { motion } from "framer-motion";
import { styles } from "../styles";
import HeroCanvas from "./canvas/HeroCanvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					{/* dot */}
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					{/* line */}
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				{/* hello message */}
				<div>
					<h1 className={`${styles.heroHeadText}`}>
						Hi, I'm <span className="text-[#915eff]">thabish</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						{/* TODO: Change the message */}I create stunning 3D UI,{" "}
						<br className="sm:block hidden" />
						for web applications
					</p>
				</div>
			</div>
			<HeroCanvas />
		</section>
	);
};

export default Hero;
