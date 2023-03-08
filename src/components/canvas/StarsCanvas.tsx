import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as random from "maath/random/dist/maath-random.cjs";

const Stars = () => {
	const ref = useRef<THREE.Points>(null!);
	const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});
	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere as Float32Array}
				stride={3}
				frustumCulled
			>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StartsCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense>
					<Stars />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default StartsCanvas;
