import { motion } from "framer-motion";

import HeroCanvas from "./canvas/HeroCanvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					{/* dot */}
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					{/* line */}
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				{/* hello message */}
				<div>
					<h1 className="heroHeadText">
						Hi, I'm <span className="text-[#915eff]">thabish</span>
					</h1>
					<p className="heroSubText mt-2 text-white-100">
						{/* TODO: Change the message */}I create stunning 3D UI,{" "}
						<br className="sm:block hidden" />
						for web applications
					</p>
				</div>
			</div>
			<HeroCanvas />

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
