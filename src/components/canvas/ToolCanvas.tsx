import {
	Environment,
	Icosahedron,
	MeshDistortMaterial,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import MyLoader from "../MyLoader";

function Scene({ imgUrl }: { imgUrl: string }) {
	const texture = useTexture(imgUrl);

	// We use `useResource` to be able to delay rendering the spheres until the material is ready
	const [material, set] = useState();

	return (
		<mesh>
			<Icosahedron
				args={[1, 4]}
				material={material}
				position={[0, 0, 0]}
			/>
			<MeshDistortMaterial
				ref={set}
				map={texture}
				roughness={0.1}
				metalness={1}
				bumpScale={0.005}
				clearcoat={1}
				clearcoatRoughness={1}
				radius={2}
				distort={0.5}
			/>
		</mesh>
	);
}

export const ToolCanvas = ({ icon }: { icon: string }) => {
	return (
		<Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
			<OrbitControls enableZoom={false} />
			<Environment preset="city" />
			<Suspense fallback={<MyLoader />}>
				<Scene imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};
