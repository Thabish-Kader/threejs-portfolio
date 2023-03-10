import { motion } from "framer-motion";

import HeroCanvas from "./canvas/HeroCanvas";
import { AvatarCanvas } from "./canvas/AvatarCanvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					{/* dot */}
					<div className="w-5 h-5 rounded-full bg-theme" />
					{/* line */}
					<div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-theme to-transparent" />
				</div>
				{/* hello message */}
				<div>
					<h1 className="heroHeadText">
						Hi, I'm <span className="text-theme">thabish</span>
					</h1>
					<p className="hidden sm:block text-lg mt-2 text-white-100 w-[550px]">
						Welcome to my digital playground, where code meets
						creativity! Take a peek inside and you'll find a world
						of pixels and possibilities, where I bring my wildest
						ideas to life.
						<br />
						So come on in, explore a little, and let's make some
						magic together!
					</p>
				</div>
			</div>
			{/* <HeroCanvas /> */}
			<AvatarCanvas />

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
