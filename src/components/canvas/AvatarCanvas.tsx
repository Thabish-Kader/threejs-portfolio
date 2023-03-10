import {
	Html,
	OrbitControls,
	Preload,
	useAnimations,
	useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import MyLoader from "../MyLoader";

const Avatar = ({ smallScreen }: { smallScreen: boolean }) => {
	const [index, setIndex] = useState(1);
	const avatar = useGLTF("/myavatar.glb");
	const { actions, names } = useAnimations(avatar.animations, avatar.scene);
	const [isClicked, setIsClicked] = useState(false);
	useEffect(() => {
		actions[names[index]]?.reset().fadeIn(0.5).play();

		return () => {
			actions[names[index]]?.fadeOut(0.5);
		};
	}, [index, actions, names]);

	return (
		<group>
			<primitive
				onPointerOver={() => console.log("hover")}
				object={avatar.scene}
				scale={smallScreen ? 1.7 : 2}
				position-y={-2}
				rotation-y={-0.5}
				position-x={[-1]}
			/>

			<Html
				position={[smallScreen ? -2 : -3.7, smallScreen ? 0 : 0.3, 0]}
			>
				<button
					className="bg-theme text-black w-[100px] p-2  rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-110 duration-500"
					onClick={() => {
						setIndex((index + 1) % names.length);
						setIsClicked(!isClicked);
					}}
				>
					{isClicked ? "Check out my moves" : "Impress Me!"}
				</button>
			</Html>
		</group>
	);
};

export const AvatarCanvas = () => {
	const [smallScreen, setSmallScreen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width:500px)");
		setSmallScreen(mediaQuery.matches);

		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setSmallScreen(e.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () =>
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);

	return (
		<Canvas dpr={[0, 2]}>
			<ambientLight intensity={0.5} />
			<pointLight position={[1, 1, 1]} />
			<OrbitControls enabled={false} />
			<Suspense fallback={<MyLoader />}>
				<Avatar smallScreen={smallScreen} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};
