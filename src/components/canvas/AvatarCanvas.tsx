import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

const Avatar = () => {
	const [index, setIndex] = useState(1);
	const { scene, nodes } = useGLTF("/avatar.glb") as any;
	const avatar = useGLTF("/avatar.glb") as any;
	const animations = useAnimations(avatar.animations, avatar.scene);

	return (
		<>
			<ambientLight />
			<primitive object={scene} scale={2} position-y={-2} />;
		</>
	);
};

export const AvatarCanvas = () => {
	return (
		<Canvas>
			<OrbitControls />
			<Avatar />
		</Canvas>
	);
};
