import {
	Environment,
	Html,
	OrbitControls,
	useAnimations,
	useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { MeshStandardMaterial } from "three";
import { easing } from "maath";
import MyLoader from "../MyLoader";
import { ClickMe } from "../ClickMe";

const Avatar = () => {
	const [index, setIndex] = useState(2);
	const { scene, nodes, animations } = useGLTF("/avatar.glb") as any;
	const [hovered, setHovered] = useState(false);

	const avatar = useGLTF("/avatar.glb") as any;
	const { actions, names } = useAnimations(avatar.animations, avatar.scene);
	const halo = useRef<THREE.Mesh>(null!);
	useEffect(() => {
		// Reset and fade in animation after an index has been changed
		actions[names[index]]?.reset().fadeIn(0.5).play();
		// In the clean-up phase, fade it out
		return () => {
			actions[names[index]]?.fadeOut(0.5);
		};
	}, [index, actions, names]);
	// useFrame((state, delta) => {
	// 	// Animate the selection halo
	// 	easing.damp3(halo.current.scale, hovered ? 1.15 : 1, 0.2, delta);
	// 	easing.dampC(
	// 		// @ts-ignore
	// 		halo.current?.material.color,
	// 		hovered ? "green" : "red",
	// 		0.5,
	// 		delta
	// 	);
	// });
	return (
		<group>
			<primitive
				onPointerOver={() => console.log("hover")}
				object={avatar.scene}
				scale={2}
				position-y={-2}
				rotation-y={-0.5}
			/>

			{/* <mesh
				ref={halo}
				position-x={-3}
				rotation-y={0.25}
				onClick={() => setIndex((index + 1) % names.length)}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			>
				<circleGeometry args={[1, 64]} />;
			</mesh> */}
			<Html position={[-3.7, 0.3, 0]}>
				<button
					className="bg-purple-500 text-black p-2 rounded-lg text-lg w-[200px] hover:bg-white hover:scale-110 duration-500"
					onClick={() => setIndex((index + 1) % names.length)}
				>
					Impress Me!
				</button>
			</Html>
		</group>
	);
};

export const AvatarCanvas = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<pointLight position={[1, 1, 1]} />
			<OrbitControls enableZoom={false} />
			<Suspense fallback={<MyLoader />}>
				<Avatar />
			</Suspense>
		</Canvas>
	);
};
