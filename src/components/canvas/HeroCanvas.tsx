import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computer = ({ isMobile }: { isMobile: boolean }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intenstiy={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const HeroCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	// check wether its mobile view or not
	useEffect(() => {
		// liten to change of the screen size
		const mediaQuery = window.matchMedia("(max-width:500px)");
		setIsMobile(mediaQuery.matches);

		// callback function to setIsMobile to true or false
		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// cleanup function
		return () =>
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<Loader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computer isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default HeroCanvas;
