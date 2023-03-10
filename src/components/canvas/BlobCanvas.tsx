import { OrbitControls, Preload, Text3D } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useMemo, useRef } from "react";
import { MathUtils } from "three";
import fragmentShader from "../../shaders/fragmentShader";
import vertexShader from "../../shaders/vertexShader";

const Blob = () => {
	// This reference will give us direct access to the mesh
	const mesh = useRef<THREE.Mesh>(null!);
	const hover = useRef(false);

	const uniforms = useMemo(
		() => ({
			u_intensity: {
				value: 0.3,
			},
			u_time: {
				value: 0.0,
			},
		}),
		[]
	);

	useFrame((state) => {
		const { clock } = state;
		(mesh.current.material as THREE.ShaderMaterial).uniforms.u_time.value =
			0.4 * clock.getElapsedTime();

		(
			mesh.current.material as THREE.ShaderMaterial
		).uniforms.u_intensity.value = MathUtils.lerp(
			(mesh.current.material as THREE.ShaderMaterial).uniforms.u_intensity
				.value,
			hover.current ? 0.85 : 0.15,
			0.02
		);
	});

	return (
		<mesh
			ref={mesh}
			position={[0, 0, 0]}
			scale={1.5}
			onPointerOver={() => (hover.current = true)}
			onPointerOut={() => (hover.current = false)}
		>
			<icosahedronGeometry args={[2, 20]} />
			<shaderMaterial
				fragmentShader={fragmentShader}
				vertexShader={vertexShader}
				uniforms={uniforms}
				wireframe={false}
			/>
		</mesh>
	);
};

const BlobCanvas = () => {
	return (
		<Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
			<Suspense fallback={true}>
				<Blob />
			</Suspense>
			<OrbitControls enabled={false} />
			<Preload all />
		</Canvas>
	);
};

export default BlobCanvas;
