import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import MyLoader from "../MyLoader";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Earth = () => {
	const earth = useGLTF("/planet/scene.gltf");

	return (
		<primitive
			object={earth.scene}
			scale={2.5}
			position-y={0}
			rotation-y={0}
		/>
	);
};

const EarthCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop="demand"
			gl={{ preserveDrawingBuffer: true }}
			camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 10] }}
		>
			<Suspense fallback={<MyLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />
			</Suspense>
		</Canvas>
	);
};

export default EarthCanvas;
